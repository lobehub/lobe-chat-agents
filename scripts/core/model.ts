import OpenAI from 'openai';

import { config } from './constants';

/**
 * OpenAI 客户端实例
 * 用于各种 AI 生成任务，如分类、翻译、内容生成等
 */
export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  baseURL: process.env.OPENAI_PROXY_URL,
  maxRetries: 4, // 最大重试次数
});

/**
 * 调用 OpenAI Chat Completion API
 * @param messages 消息数组
 * @param options 可选参数
 * @returns 生成的回复内容
 */
export const callOpenAI = async (
  messages: Array<{ content: string; role: 'system' | 'user' | 'assistant' }>,
  options?: {
    model?: string;
    response_format?: { type: 'json_object' };
    temperature?: number;
  },
) => {
  const response = await openai.chat.completions.create({
    messages,
    model: options?.model || config.modelName,
    response_format: options?.response_format,
    temperature: options?.temperature ?? config.temperature,
  });

  return response.choices[0]?.message?.content || '';
};
