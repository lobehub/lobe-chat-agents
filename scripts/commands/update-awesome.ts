#!/usr/bin/env node
/**
 * 更新 Awesome 命令
 * 用于更新 README 文件中的 Agent 列表
 */
import { readJSONSync } from 'fs-extra';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';

import {
  config,
  indexCnPath,
  indexPath,
  publicDir,
  readmeCnPath,
  readmePath,
} from '../core/constants';
import { updateAwesomeReadme } from '../utils/common';
import { Logger } from '../utils/logger';

/**
 * 更新指定语言的 README 文件
 * @param filePath README 文件路径
 * @param md 原始 Markdown 内容
 * @param agents Agent 列表
 * @param locale 语言代码
 */
const updateAwesome = async (filePath: string, md: string, agents: any[], locale?: string) => {
  const lang = locale === 'zh-CN' ? '中文' : '英文';
  Logger.start(`处理${lang} README`, `${agents.length} 个 Agents`);

  // 并行处理所有 Agent 条目生成
  const data = await pMap(
    agents,
    async ({ identifier, author, createdAt, homepage }, i) => {
      const agentConfigPath = resolve(
        publicDir,
        [identifier, locale, 'json'].filter(Boolean).join('.'),
      );

      try {
        const { meta } = readJSONSync(agentConfigPath);

        // 构建 Agent 条目
        const header = `### [${meta.title.replaceAll('[', '').replaceAll(']', '')}](https://lobechat.com/discover/assistant/${identifier})`;
        const subHeader = `<sup>By **[@${author}](${homepage})** on **${createdAt}**</sup>`;
        const desc = [
          `${meta.description}`,
          `${meta.tags
            .filter(Boolean)
            .map((tag) => `\`${tag}\``)
            .join(' ')}`,
        ].join('\n\n');

        return [i === 0 ? false : '---', header, subHeader, desc].filter(Boolean).join('\n\n');
      } catch (error) {
        Logger.warn('Agent 配置读取失败', `${identifier}: ${error}`);
        return '';
      }
    },
    { concurrency: config.concurrency }, // 使用配置中的并发数控制
  );

  // 更新 README 内容
  const newMd = updateAwesomeReadme(md, data.filter(Boolean).join('\n\n'));
  writeFileSync(filePath, newMd, 'utf8');
  Logger.file('write', filePath);
  Logger.success(`${lang} README 更新完成`);
};

/**
 * 执行更新流程
 */
const runUpdateAwesome = async () => {
  Logger.split('更新 README 文件');
  const startTime = Date.now();

  // 读取文件内容
  Logger.start('读取文件内容');
  const readmeCn = readFileSync(readmeCnPath, 'utf8');
  const readme = readFileSync(readmePath, 'utf8');
  const index = readJSONSync(indexPath);
  const indexCn = readJSONSync(indexCnPath);

  Logger.info('文件读取完成');
  Logger.stats({
    '中文 Agents': indexCn.agents.length,
    '英文 Agents': index.agents.length,
  });

  // 并行更新英文和中文 README
  Logger.start('更新 README 内容');
  await Promise.all([
    updateAwesome(readmePath, readme, index.agents),
    updateAwesome(readmeCnPath, readmeCn, indexCn.agents, 'zh-CN'),
  ]);

  const duration = Date.now() - startTime;
  Logger.success('README 更新完成', '', `耗时 ${duration}ms`);
};

// 执行更新
await runUpdateAwesome();
