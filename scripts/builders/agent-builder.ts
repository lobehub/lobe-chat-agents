import { readJSONSync, writeJSONSync } from 'fs-extra';
import { merge } from 'lodash-es';
import { Dirent, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';
import { zodToJsonSchema } from 'zod-to-json-schema';

import { agents, config, localesDir, meta, publicDir, schemasDir } from '../core/constants';
import { AgentParser } from '../parsers/agent-parser';
import { LobeAgent, lobeAgentSchema } from '../schema/agentMeta';
import { findDuplicates } from '../utils/common';
import {
  checkDir,
  checkJSON,
  getBuildLocaleAgentFileName,
  getLocaleAgentFileName,
} from '../utils/file';
import { Logger } from '../utils/logger';
import { updateAgentWithTokenUsage } from '../utils/token';

/**
 * Agent 构建器类
 * 负责构建所有语言版本的 Agent 文件和索引
 */
class AgentBuilder {
  private agents: Dirent[];

  constructor(agents: Dirent[]) {
    checkDir(publicDir);
    this.agents = agents;
  }

  /**
   * 构建指定语言的 Agent 文件
   * @param locale 语言代码
   * @returns Agent 索引数组
   */
  private buildSingleLocaleAgents = async (locale: string) => {
    // 并行处理所有 JSON 文件
    const agentIndex = await pMap(
      this.agents.filter((file) => checkJSON(file)),
      async (file) => {
        const { content, id } = AgentParser.parseFile(file.name);
        const localeFileName = getLocaleAgentFileName(id, locale);

        // 查找正确的 Agent 内容
        let agent: LobeAgent;

        // 如果本地化文件不存在，跳过
        const filePath = resolve(localesDir, localeFileName);
        if (!existsSync(filePath)) return null;

        // 合并默认 Agent 与本地化数据
        const data = readJSONSync(filePath);
        agent = merge({}, content, data);

        // 计算并添加 token 使用量
        agent = updateAgentWithTokenUsage(agent);

        // 写入 Agent 文件到 public 目录
        if (locale === config.entryLocale) {
          writeJSONSync(resolve(publicDir, `${id}.en-US.json`), agent);
        }
        writeJSONSync(resolve(publicDir, getBuildLocaleAgentFileName(id, locale)), agent);

        // 返回 Agent 元数据
        return {
          author: agent.author,
          createdAt: agent.createdAt,
          homepage: agent.homepage,
          identifier: agent.identifier,
          knowledgeCount: agent.knowledgeCount || 0,
          meta: agent.meta,
          pluginCount: agent.pluginCount || 0,
          schemaVersion: agent.schemaVersion,
          tokenUsage: agent.tokenUsage,
        };
      },
      { concurrency: config.concurrency }, // 使用配置中的并发数控制
    );

    // 过滤掉跳过的项目并按创建时间倒序排列
    return agentIndex.filter(Boolean).sort(
      // @ts-ignore
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
    );
  };

  /**
   * 构建 Schema 文件
   */
  buildSchema = () => {
    Logger.start('构建 Agent Schema', `v${meta.schemaVersion}`);
    checkDir(schemasDir);
    checkDir(resolve(publicDir, 'schema'));

    const schema = zodToJsonSchema(lobeAgentSchema);
    const fileName = `lobeAgentSchema_v${meta.schemaVersion}.json`;

    const schemaPath = resolve(schemasDir, fileName);
    const publicSchemaPath = resolve(publicDir, 'schema', fileName);

    writeJSONSync(schemaPath, schema);
    writeJSONSync(publicSchemaPath, schema);

    Logger.file('write', schemaPath);
    Logger.file('write', publicSchemaPath);
    Logger.success('Schema 构建完成', `v${meta.schemaVersion}`);
  };

  /**
   * 构建所有语言版本的 Agent 文件
   */
  buildFullLocaleAgents = async () => {
    Logger.split('构建多语言版本');

    // 并行构建所有语言版本
    await pMap(
      config.outputLocales,
      async (locale: string, index: number) => {
        Logger.start('构建语言版本', locale, `${index + 1}/${config.outputLocales.length}`);

        const agents = await this.buildSingleLocaleAgents(locale);
        Logger.info(`收集到 Agents`, agents.length);

        // 统计标签使用频率
        let tags = [];
        for (const agent of agents) {
          tags = [...tags, ...agent.meta.tags];
        }
        tags = findDuplicates(tags);

        // 生成索引文件
        const agentsIndex = { ...meta, agents, tags };
        const indexFileName = getBuildLocaleAgentFileName('index', locale);

        if (locale === config.entryLocale) {
          const entryIndexPath = resolve(publicDir, 'index.en-US.json');
          writeJSONSync(entryIndexPath, agentsIndex);
          Logger.file('write', entryIndexPath);
        }

        const indexPath = resolve(publicDir, indexFileName);
        writeJSONSync(indexPath, agentsIndex);
        Logger.file('write', indexPath);

        // 统计信息
        Logger.stats({
          'Agents 数量': agents.length,
          '热门标签数量': tags.length,
          '索引文件': indexFileName,
          '语言版本': locale,
        });

        Logger.success('语言版本构建完成', locale);
      },
      { concurrency: config.concurrency }, // 使用配置中的并发数控制
    );
  };

  /**
   * 执行构建流程
   */
  run = async () => {
    Logger.split('开始构建流程');
    const startTime = Date.now();

    this.buildSchema();
    await this.buildFullLocaleAgents();

    const duration = Date.now() - startTime;
    Logger.success('构建流程完成', '', `耗时 ${duration}ms`);
  };
}

/**
 * 导出构建器实例
 */
export const agentBuilder = new AgentBuilder(agents);
