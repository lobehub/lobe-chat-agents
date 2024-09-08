import { consola } from 'consola';
import 'dotenv/config';
import { getOpenAI } from "./openai";

import { category, config } from './const';

export const addCategory = async (json) => {
  consola.info(`category generating...`);
  const completion = await getOpenAI.chat.completions.create({
    messages: [
      { role: "system", content: [
        `You are an expert proficient in categorizing assistants. Based on the catalog listing, classify the following assistant's information into one of the categories.`,
        `## Rules`,
        `- The input format is JSON, and the output format is the corresponding category like: {"category":"programming"}`,
        `- The output category string must strictly follow the provided catalog.`,
        `## Categories List`,
        category.map((m) => `- ${m}`).join('\n'),
      ].join('\n')},
      { role: "user", content: JSON.stringify(json.meta) }
    ],
    model: config.modelName,
    temperature: 0,
    stream: false,
    response_format: {
      type: 'json_object'
    }
  });

  const addedCategory = JSON.parse(completion.choices[0].message.content as string).category;

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
