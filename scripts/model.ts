import { ChatOpenAI } from 'langchain/chat_models/openai';

import { config } from './const';

export const model = new ChatOpenAI(
  { maxRetries: 4, modelName: config.modelName, temperature: config.temperature },
  { baseURL: process.env.OPENAI_PROXY_URL },
);
