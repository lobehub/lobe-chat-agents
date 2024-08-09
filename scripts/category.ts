import { consola } from 'consola';
import 'dotenv/config';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';

import { category, config } from './const';

const model = new ChatOpenAI(
  { modelName: config.modelName, temperature: 0 },
  { baseURL: process.env.OPENAI_PROXY_URL },
);

export const addCategory = async (json) => {
  consola.info(`category generating...`);
  const res = await model.call(
    [
      new SystemMessage(
        [
          `You are an expert proficient in categorizing assistants. Based on the catalog listing, classify the following assistant's information into one of the categories.`,
          `## Rules`,
          `- The input format is JSON, and the output format is the corresponding category like: {"category":"programming"}`,
          `- The output category string must strictly follow the provided catalog.`,
          `## Categories List`,
          category.map((m) => `- ${m}`).join('\n'),
        ].join('\n'),
      ),
      new HumanMessage(JSON.stringify(json.meta)),
    ],
    {
      response_format: { type: 'json_object' },
    },
  );

  const addedCategory = JSON.parse(res.content as string).category;

  if (category.includes(addedCategory))
    return {
      ...json,
      meta: {
        ...json.meta,
        category: addedCategory,
      },
    };

  return json;
};
