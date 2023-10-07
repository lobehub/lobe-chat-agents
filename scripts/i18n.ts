import { consola } from 'consola';
import 'dotenv/config';
import { ChatOpenAI } from 'langchain/chat_models/openai';
import { HumanMessage, SystemMessage } from 'langchain/schema';

import { config } from './const';

const model = new ChatOpenAI(
  {
    openAIApiKey: 'sk-MvphtQT9kVkMQGygPpC9QSgGLXWoVIuhglKOtLlGw8m6Xjfo',
    temperature: 0,
  },
  { baseURL: 'https://api.chatanywhere.com.cn' },
);

export const translateJSON = async (json, outputLocale, entryLocale = config.entryLocale) => {
  consola.info(`i18n generating...`);
  const res = await model.call([
    new SystemMessage(
      [
        `Translate the i18n JSON file from ${entryLocale} to ${outputLocale} according to the BCP 47 standard`,
        `Keep the keys the same as the original file and make sure the output remains a valid i18n JSON file.`,
      ].join('\n'),
    ),
    new HumanMessage(JSON.stringify(json)),
  ]);

  return JSON.parse(res.content);
};
