import { consola } from 'consola';
import { colors } from 'consola/utils';
import dJSON from 'dirty-json';
import 'dotenv/config';
import { HumanMessage, SystemMessage } from 'langchain/schema';

import { config } from './const';
import { model } from './model';

export const translateJSON = async (
  filename,
  json,
  outputLocale,
  entryLocale = config.entryLocale,
) => {
  consola.info(colors.yellow(filename), `i18n generating...`);
  const res = await model.call(
    [
      new SystemMessage(
        [
          `Translate the i18n JSON file from ${entryLocale} to ${outputLocale} according to the BCP 47 standard`,
          `Keep the keys the same as the original file and make sure the output remains a valid i18n JSON file.`,
          `Do not include any additional text or explanations outside the JSON object.Start directly with a left brace and end with a right brace.`,
        ].join('\n'),
      ),
      new HumanMessage(JSON.stringify(json)),
    ],
    {
      response_format: { type: 'json_object' },
    },
  );
  try {
    return JSON.parse(res.content as string);
  } catch {
    consola.warn(colors.yellow(filename), 'i18n parse fail, try to use dirty json');
    try {
      const data = dJSON.parse(res.content as string);
      console.info(JSON.stringify(data, null, 2));
      return data;
    } catch {
      consola.error(colors.yellow(filename), 'i18n dirty json parse fail');
      consola.error(res.content);
    }
  }
};
