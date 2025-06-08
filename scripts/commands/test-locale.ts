#!/usr/bin/env node
/**
 * 本地化测试命令
 * 用于验证所有语言版本的 Agent 文件是否存在
 */
import { existsSync, readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';
import pMap from 'p-map';

import { agents, agentsDir, config, publicDir, root } from '../core/constants';
import { Logger } from '../utils/logger';
import { formatAndCheckSchema } from '../validators/agent-validator';

/**
 * 执行本地化测试流程
 */
const runTest = async () => {
  Logger.split('开始本地化测试');
  const startTime = Date.now();

  const validFiles = agents.filter((file) => file.isFile());
  Logger.info('待测试文件数量', validFiles.length);

  // 并行收集所有 Agent 标识符
  Logger.start('收集 Agent 标识符');
  const identifiers = await pMap(
    validFiles,
    async (file, index) => {
      const filePath = resolve(agentsDir, file.name);
      const relativePath = filePath.replace(root, '');

      Logger.progress(index + 1, validFiles.length, `解析 ${relativePath}`);

      try {
        const agent = readJSONSync(filePath);
        formatAndCheckSchema(agent); // 验证 Schema
        return agent.identifier;
      } catch (error) {
        Logger.error('文件解析失败', `${file.name}: ${error}`);
        throw error;
      }
    },
    { concurrency: config.concurrency }, // 使用配置中的并发数控制
  );

  Logger.success('标识符收集完成', '', `共 ${identifiers.length} 个`);

  // 并行检查每个 Agent 的所有语言版本
  Logger.start('检查多语言版本文件');
  let totalChecked = 0;

  await pMap(
    identifiers,
    async (identifier, index) => {
      Logger.progress(index + 1, identifiers.length, `检查 ${identifier}`);

      const filename = [identifier, 'json'].join('.');
      const isExist = existsSync(resolve(publicDir, filename));

      if (!isExist) {
        Logger.error('主文件不存在', filename);
        throw `${filename} Agent 文件不存在`;
      }

      // 并行检查所有输出语言版本
      const nonEntryLocales = config.outputLocales.filter(
        (locale) => locale !== config.entryLocale,
      );
      await pMap(
        nonEntryLocales,
        async (locale) => {
          const localeFilename = [identifier, locale, 'json'].join('.');
          const isLocaleExist = existsSync(resolve(publicDir, localeFilename));

          if (!isLocaleExist) {
            Logger.error('本地化文件不存在', localeFilename);
            throw `${localeFilename} Agent 文件不存在`;
          }
          totalChecked++;
        },
        { concurrency: config.concurrency }, // 使用配置中的并发数控制
      );

      Logger.success('多语言版本检查通过', identifier, `${config.outputLocales.length} 种语言`);
    },
    { concurrency: config.concurrency }, // 使用配置中的并发数控制
  );

  const duration = Date.now() - startTime;
  Logger.stats({
    'Agent 数量': identifiers.length,
    '总耗时': `${duration}ms`,
    '支持语言数': config.outputLocales.length,
    '检查文件总数': totalChecked + identifiers.length,
  });

  Logger.success('本地化测试完成');
};

// 执行测试
await runTest();
