import dayjs from 'dayjs';
import { kebabCase } from 'lodash-es';
import { format } from 'prettier';
import { remark } from 'remark';
import pangu from 'remark-pangu';

import { config, meta } from '../core/constants';
import { LobeAgent, lobeAgentSchema } from '../schema/agentMeta';
import { Logger } from '../utils/logger';
import { calculateTokenUsage } from '../utils/token';

/**
 * 验证和修复 examples 字段
 * @param agent Agent 配置对象
 * @returns 修复后的 Agent 配置
 */
export const validateAndFixExamples = (agent: LobeAgent): LobeAgent => {
  if (!agent.examples || !Array.isArray(agent.examples)) {
    return agent;
  }

  let hasIssues = false;
  const fixedExamples = agent.examples.map((example, index) => {
    const issues: string[] = [];

    // 检查是否有嵌套的对象结构问题
    if (typeof example === 'object' && example !== null) {
      // 检查是否有错误的嵌套结构，如 { "assistant": { "content": "..." } }
      for (const [key, value] of Object.entries(example)) {
        if (
          (key === 'assistant' || key === 'user' || key === 'system' || key === 'function') &&
          typeof value === 'object' &&
          value !== null &&
          value &&
          'content' in value
        ) {
          // 发现嵌套结构错误，修复它
          const fixedExample = {
            content: (value as any).content || '',
            role: key,
          };
          Object.assign(example, fixedExample);
          issues.push(`修复了嵌套的 ${key} 结构`);
          hasIssues = true;
        }
      }

      // 检查必需字段
      if (!('role' in example)) {
        issues.push('缺少 role 字段');
        hasIssues = true;
      }

      if (!('content' in example)) {
        issues.push('缺少 content 字段');
        hasIssues = true;
        (example as any).content = '';
      }

      // 检查 role 值是否有效
      const validRoles = ['user', 'assistant', 'system', 'function'];
      if ('role' in example && !validRoles.includes(example.role as string)) {
        issues.push(`无效的 role 值: ${example.role}`);
        hasIssues = true;
      }

      // 检查 content 是否为字符串
      if ('content' in example && typeof example.content !== 'string') {
        issues.push('content 必须是字符串');
        hasIssues = true;
        (example as any).content = String(example.content || '');
      }
    }

    if (issues.length > 0) {
      Logger.warn(`examples[${index}] 存在问题`, `${agent.identifier}: ${issues.join(', ')}`);
    }

    return example;
  });

  if (hasIssues) {
    Logger.info('已自动修复 examples 字段问题', agent.identifier);
    agent.examples = fixedExamples;
  }

  return agent;
};

/**
 * 格式化并检查 Agent Schema
 * @param agent Agent 配置对象
 * @returns 验证通过的 Agent 配置
 */
export const formatAndCheckSchema = (agent: any) => {
  // 补充缺失字段
  if (!agent.schemaVersion) agent.schemaVersion = meta.schemaVersion;
  if (!agent.createdAt) agent.createdAt = dayjs().format('YYYY-MM-DD');

  // Schema 验证
  const result = lobeAgentSchema.safeParse(agent);

  if (!result.success) {
    Logger.error('Schema 验证失败', agent.identifier);
    throw new Error((result as any).error);
  }
  return agent;
};

/**
 * 格式化提示词内容
 * @param prompt 提示词文本
 * @param locale 语言代码
 * @returns 格式化后的提示词
 */
export const formatPrompt = async (prompt: string, locale: string) => {
  return locale === 'zh-CN'
    ? String(await remark().use(pangu).process(prompt)) // 中文使用 pangu 处理
    : String(await remark().process(prompt));
};

/**
 * 格式化 Agent JSON 配置
 * @param agent Agent 配置对象
 * @param locale 语言代码
 * @returns 格式化后的 Agent 配置
 */
export const formatAgentJSON = async (agent: LobeAgent, locale: string = config.entryLocale) => {
  // 计算插件数量（基于 config.plugins 的长度）
  agent.pluginCount = agent.config?.plugins?.length || 0;

  // 计算知识库数量（基于 config.knowledgeBases 的长度）
  agent.knowledgeCount = agent.config?.knowledgeBases?.length || 0;

  // 验证和修复 examples 字段
  // eslint-disable-next-line no-param-reassign
  agent = validateAndFixExamples(agent);

  // 计算 token 使用量（仅在未计算过时才计算）
  if (!agent.tokenUsage || agent.tokenUsage === 0) {
    agent.tokenUsage = calculateTokenUsage(agent);
    Logger.info('已计算 token 使用量', `${agent.identifier}: ${agent.tokenUsage} tokens`);
  }

  formatAndCheckSchema(agent);

  // 格式化系统角色描述
  agent.config.systemRole = await formatPrompt(agent.config.systemRole, locale);
  agent.config.systemRole = await format(agent.config.systemRole, { parser: 'markdown' });

  // 格式化标识符和标签
  agent.identifier = kebabCase(agent.identifier);
  if (agent?.meta?.tags?.length > 0) {
    agent.meta.tags = agent.meta.tags.map((tag) => kebabCase(tag));
  }

  return agent;
};

/**
 * 检查标识符唯一性
 * @param arr 标识符数组
 */
export const checkUniqueIdentifier = (arr: string[]) => {
  const duplicates = [];
  const set = new Set();

  for (const element of arr) {
    if (set.has(element)) {
      duplicates.push(element);
    } else {
      set.add(element);
    }
  }

  if (duplicates.length > 0) {
    Logger.error('发现重复的标识符', JSON.stringify(duplicates));
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  } else {
    Logger.success('标识符唯一性检查通过');
  }
};

/**
 * 检查英文标识符格式
 * @param str 标识符字符串
 * @returns 是否符合英文标识符格式
 */
export const CheckEnglishIdentifier = (str: string): boolean => {
  const regex = /^[\d\sA-Za-z-]+$/;
  return regex.test(str);
};
