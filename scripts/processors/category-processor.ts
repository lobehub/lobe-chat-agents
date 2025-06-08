import 'dotenv/config';

import { category } from '../core/constants';
import { callOpenAI } from '../core/model';
import { Logger } from '../utils/logger';

/**
 * 为 Agent 添加分类标签
 * 使用 AI 模型自动识别并分配合适的分类
 * @param json Agent 配置对象
 * @returns 添加分类后的 Agent 配置
 */
export const addCategory = async (json: any) => {
  const res = await callOpenAI(
    [
      {
        content: [
          `You are an expert in assistant categorization. Select one category from the [Category List] to classify the following [Assistant Information].`,
          `## Rules`,
          `- Input format is JSON, output format is the corresponding category, e.g.: {"category":"programming"}`,
          `- The output category string must strictly follow the provided categories.`,
        ].join('\n'),
        role: 'system',
      },
      {
        content: [`[Category List]`, category.map((m) => `- ${m}`).join('\n')].join('\n'),
        role: 'user',
      },
      {
        content: [`[Assistant Information]`, JSON.stringify(json)].join('\n'),
        role: 'user',
      },
    ],
    {
      response_format: { type: 'json_object' },
    },
  );

  const addedCategory = JSON.parse(res).category;

  // 验证分类是否在允许的列表中
  if (category.includes(addedCategory)) {
    return {
      ...json,
      meta: {
        ...json.meta,
        category: addedCategory,
      },
    };
  }

  Logger.error('分类生成失败', `${json.identifier}: ${addedCategory}`);
  return json;
};

/**
 * 自动生成 Agent 内容并添加分类
 * 包括 category、summary、examples、openingMessage、openingQuestions
 * @param json Agent 配置对象
 * @returns 添加分类和内容后的 Agent 配置
 */
export const generateAgentContentAndCategory = async (json: any) => {
  const systemPrompt = `You are a professional AI Agent content generation and categorization expert. You need to generate the following content based on the provided Agent information:

## Task Requirements

1. **category**: Select the most appropriate category from the provided category list
2. **summary**: Detailed description of the Agent's features, use cases, and core value, more specific and detailed than the description (100-150 words)
3. **examples**: 3-5 typical dialogue examples showing how users interact with the Agent, formatted as LLM message arrays
4. **openingMessage**: A friendly opening message introducing the Agent's capabilities (50-80 words)
5. **openingQuestions**: 3-4 suggested opening questions to help users quickly start conversations

## Output Format

Output strictly in the following JSON format, without any additional text:

\`\`\`json
{
  "category": "selected_category",
  "summary": "detailed feature description and use case explanation",
  "examples": [
    {
      "role": "user",
      "content": "user input example 1"
    },
    {
      "role": "assistant", 
      "content": "agent response example 1"
    },
    {
      "role": "user",
      "content": "user input example 2"
    },
    {
      "role": "assistant",
      "content": "agent response example 2"
    }
  ],
  "openingMessage": "opening message content",
  "openingQuestions": [
    "suggested question 1",
    "suggested question 2",
    "suggested question 3"
  ]
}
\`\`\`

## Notes

- All content must be highly relevant to the Agent's role and functionality
- Language style should be consistent with the Agent's settings
- Category must be strictly selected from the provided category list
- Summary should be more detailed than description, including specific features, use cases, core advantages, etc.
- Examples should demonstrate the Agent's professional capabilities, with each user message followed by an assistant reply
- Examples should show 2-3 complete rounds of dialogue interaction
- Opening questions should be practical and inspiring`;

  try {
    const res = await callOpenAI(
      [
        {
          content: systemPrompt,
          role: 'system',
        },
        {
          content: [`[Category List]`, category.map((m) => `- ${m}`).join('\n')].join('\n'),
          role: 'user',
        },
        {
          content: [
            `Please generate content for the following Agent:`,
            ``,
            `**Agent Information:**`,
            JSON.stringify(
              {
                description: json.meta.description,
                systemRole: json.config.systemRole,
                tags: json.meta.tags,
                title: json.meta.title,
              },
              null,
              2,
            ),
          ].join('\n'),
          role: 'user',
        },
      ],
      {
        response_format: { type: 'json_object' },
      },
    );

    const generatedContent = JSON.parse(res);

    // 验证分类是否在允许的列表中
    const isValidCategory = category.includes(generatedContent.category);

    // 构建更新后的 Agent 配置
    const updatedAgent = {
      ...json,
      config: {
        ...json.config,
        openingMessage: json.config.openingMessage || generatedContent.openingMessage,
        openingQuestions: json.config.openingQuestions || generatedContent.openingQuestions,
      },
      examples: json.examples || generatedContent.examples,
      meta: {
        ...json.meta,
        category: json.meta.category || (isValidCategory ? generatedContent.category : undefined),
      },
      summary: json.summary || generatedContent.summary,
    };

    if (!isValidCategory) {
      Logger.error('分类生成失败', `${json.identifier}: ${generatedContent.category}`);
    } else {
      Logger.success('内容生成和分类完成', json.identifier);
    }

    return updatedAgent;
  } catch (error) {
    Logger.error('内容生成失败', `${json.identifier}: ${error}`);
    return json;
  }
};
