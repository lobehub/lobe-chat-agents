import { readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';

import { agentsDir, config } from '../core/constants';
import { LobeAgent } from '../schema/agentMeta';

/**
 * Agent 文件解析器
 * 用于解析 Agent 配置文件，提取 ID、语言代码和内容
 */
export const AgentParser = {
  /**
   * 解析 Agent 文件
   * @param fileName 文件名
   * @returns 解析结果包含内容、ID 和语言代码
   */
  parseFile: (fileName: string) => {
    // 正则表达式匹配格式: <id>.<locale>
    // 测试地址: https://regex101.com/r/t744SN/1
    // @ts-ignore
    const regexp = /^(?<id>[\w-]*)\.?(?<locale>.*)?$/;

    const match = regexp.exec(fileName.replace('.json', ''));
    const { id, locale = config.entryLocale } = match.groups;

    const filePath = resolve(agentsDir, fileName);
    const agent: LobeAgent = readJSONSync(filePath);

    return {
      content: agent, // Agent 配置内容
      id, // Agent 唯一标识符
      locale, // 语言代码
    };
  },
};
