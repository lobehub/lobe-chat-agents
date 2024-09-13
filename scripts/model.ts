import { ChatOpenAI } from 'langchain/chat_models/openai';

import { config } from './const';

export const model = new ChatOpenAI(
  { modelName: config.modelName, temperature: config.temperature, maxRetries: 4 },
  { baseURL: process.env.OPENAI_PROXY_URL },
);
