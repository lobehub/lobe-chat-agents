import dJSON from 'dirty-json';
import 'dotenv/config';

import { config } from '../core/constants';
import { callOpenAI } from '../core/model';
import { Logger } from '../utils/logger';

/**
 * 翻译 JSON 对象到指定语言
 * @param filename 文件名（用于日志显示）
 * @param json 待翻译的 JSON 对象
 * @param outputLocale 目标语言代码
 * @param entryLocale 源语言代码
 * @returns 翻译后的 JSON 对象
 */
export const translateJSON = async (
  filename: string,
  json: any,
  outputLocale: string,
  entryLocale = config.entryLocale,
) => {
  Logger.start('生成国际化内容', filename, `${entryLocale} → ${outputLocale}`);

  const res = await callOpenAI(
    [
      {
        content: [
          `Translate the i18n JSON file to ${outputLocale} according to BCP 47 standards`,
          `Keep the key names the same as the original file, ensuring the output is still a valid i18n JSON file.`,
          `Special attention: For "role" fields, keep the original values unchanged (such as "user", "assistant", "system", "function"), do not translate them.`,
          `Only translate the content of "content" fields and other text content.`,
          `Do not include any other text or explanations outside the JSON object. Start directly with a left brace and end with a right brace.`,
        ].join('\n'),
        role: 'system',
      },
      {
        content: JSON.stringify(json),
        role: 'user',
      },
    ],
    {
      response_format: { type: 'json_object' },
    },
  );

  try {
    const result = JSON.parse(res);
    Logger.success('国际化内容生成完成', filename);
    return result;
  } catch {
    Logger.warn('JSON 解析失败，尝试使用 dirty-json', filename);
    try {
      const data = dJSON.parse(res);
      Logger.debug('使用 dirty-json 解析成功', JSON.stringify(data, null, 2));
      Logger.success('国际化内容生成完成', filename, '使用 dirty-json');
      return data;
    } catch (error) {
      Logger.error('国际化内容生成失败', `${filename}: ${error}`);
      Logger.debug('原始响应内容', res);
      return null;
    }
  }
};
