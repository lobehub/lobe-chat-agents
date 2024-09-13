import { consola } from 'consola';
import 'dotenv/config';
import { HumanMessage, SystemMessage } from 'langchain/schema';

import { category, config } from './const';
import { model } from './model';

export const addCategory = async (json) => {
  const res = await model.call(
    [
      new SystemMessage(
        [
          `You are an expert proficient in categorizing assistants. Pick one category from the [Categories List] classify the following [Assistant Info].`,
          `## Rules`,
          `- The input format is JSON, and the output format is the corresponding category like: {"category":"programming"}`,
          `- The output category string must strictly follow the provided catalog.`,
        ].join('\n'),
      ),
      new HumanMessage([`[Categories List]`, category.map((m) => `- ${m}`).join('\n')].join('\n')),
      new HumanMessage([`[Assistant Info]`, JSON.stringify(json)].join('\n')),
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

  consola.error(json.identifier, `category generating fail:`, addedCategory);
  return json;
};
