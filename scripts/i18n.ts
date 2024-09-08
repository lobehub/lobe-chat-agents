import { consola } from "consola";
import "dotenv/config";
import { getOpenAI } from "./openai";

import { config } from "./const";

export const translateJSON = async (
  json,
  outputLocale,
  entryLocale = config.entryLocale
) => {
  consola.info(`i18n generating...`);
  const completion = await getOpenAI.chat.completions.create({
    messages: [
      {
        role: "system",
        content: [
          `Translate the i18n JSON file from ${entryLocale} to ${outputLocale} according to the BCP 47 standard`,
          `Keep the keys the same as the original file and make sure the output remains a valid i18n JSON file.`,
        ].join("\n"),
      },
      { role: "user", content: JSON.stringify(json) },
    ],
    model: config.modelName,
    temperature: 0,
    stream: false,
    response_format: {
      type: "json_object",
    },
  });

  return JSON.parse(completion.choices[0].message.content as string);
};
