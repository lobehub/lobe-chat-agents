import "dotenv/config";
import OpenAI from "openai";

export const getOpenAI = new OpenAI({
    baseURL: process.env.OPENAI_PROXY_URL,
    apiKey: process.env.OPENAI_API_KEY,
  })
