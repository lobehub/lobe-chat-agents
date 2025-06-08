import { encode } from 'gpt-tokenizer';

import { LobeAgent } from '../schema/agentMeta';

/**
 * 计算 Agent 的 token 使用量
 * 计算 systemRole、openingMessage、openingQuestions、examples 等内容的 token 数量
 * @param agent Agent 对象
 * @returns token 使用量
 */
export function calculateTokenUsage(agent: LobeAgent): number {
  let totalTokens = 0;

  // 计算 systemRole 的 tokens
  if (agent.config.systemRole) {
    totalTokens += encode(agent.config.systemRole).length;
  }

  return totalTokens;
}

/**
 * 更新 Agent 的 tokenUsage 字段
 * @param agent Agent 对象
 * @param force 是否强制重新计算，默认为 false
 * @returns 更新后的 Agent 对象
 */
export function updateAgentWithTokenUsage(agent: LobeAgent, force: boolean = false): LobeAgent {
  // 如果已经有 tokenUsage 且不强制重新计算，则跳过
  if (!force && agent.tokenUsage && agent.tokenUsage > 0) {
    return agent;
  }

  const tokenUsage = calculateTokenUsage(agent);
  return {
    ...agent,
    tokenUsage,
  };
}
