#!/usr/bin/env node
/**
 * 测试命令
 * 用于验证 Agent 配置文件的格式和唯一性
 */
import { readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';
import pMap from 'p-map';

import { agents, agentsDir, config, root } from '../core/constants';
import { Logger } from '../utils/logger';
import { checkUniqueIdentifier, formatAndCheckSchema } from '../validators/agent-validator';

/**
 * 执行测试流程
 */
const runTest = async () => {
  Logger.split('开始验证 Agent 文件');
  const startTime = Date.now();

  const validFiles = agents.filter((file) => file.isFile());
  Logger.info('待验证文件数量', validFiles.length);

  // 并行验证所有 Agent 文件
  const results = await pMap(
    validFiles,
    async (file, index) => {
      const filePath = resolve(agentsDir, file.name);
      const relativePath = filePath.replace(root, '');

      Logger.progress(index + 1, validFiles.length, `验证 ${relativePath}`);

      try {
        const agent = readJSONSync(filePath);
        formatAndCheckSchema(agent); // 验证 Schema
        Logger.success('Schema 验证通过', file.name);
        return agent.identifier;
      } catch (error) {
        Logger.error('Schema 验证失败', `${file.name}: ${error}`);
        throw error;
      }
    },
    { concurrency: config.concurrency }, // 使用配置中的并发数控制
  );

  Logger.start('检查标识符唯一性');
  checkUniqueIdentifier(results); // 检查标识符唯一性
  Logger.success('标识符唯一性检查通过');

  const duration = Date.now() - startTime;
  Logger.stats({
    总耗时: `${duration}ms`,
    验证文件数量: validFiles.length,
    验证通过: results.length,
  });

  Logger.success('所有验证完成');
};

// 执行测试
await runTest();
