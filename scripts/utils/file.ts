import {
  Dirent,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  statSync,
  unlinkSync,
  writeFileSync,
} from 'node:fs';
import { extname, join, resolve } from 'node:path';

import { config } from '../core/constants';
import { Logger } from './logger';

export { readJSONSync } from 'fs-extra';

/**
 * 规范化语言代码
 * @param locale 语言代码
 * @returns 标准化后的语言代码
 */
export const normalizeLocale = (locale?: string): string => {
  if (!locale) return 'en-US';

  if (locale.startsWith('ar')) return 'ar';
  if (locale.startsWith('cn')) return 'zh-CN';

  for (const l of config.outputLocales) {
    if (l.startsWith(locale)) {
      return l;
    }
  }

  return 'en-US';
};

/**
 * 写入 JSON 文件
 * @param filePath 文件路径
 * @param data 数据对象
 * @param format 是否格式化
 */
export const writeJSON = (filePath: string, data: any, format = true) => {
  const jsonStr = format ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  writeFileSync(filePath, jsonStr, 'utf8');
};

/**
 * 检查并创建目录
 * @param dirpath 目录路径
 */
export const checkDir = (dirpath: string) => {
  if (!existsSync(dirpath)) mkdirSync(dirpath, { recursive: true });
};

/**
 * 检查是否为 JSON 文件
 * @param file 文件信息
 * @returns 是否为 JSON 文件
 */
export const checkJSON = (file: Dirent): boolean => {
  return file.isFile() && file.name?.endsWith('.json');
};

/**
 * 删除空的 JSON 文件
 * @param dir 目录路径
 */
export const deleteEmptyJsonFiles = (dir: string) => {
  const files = readdirSync(dir);
  files.forEach((file) => {
    const filePath = resolve(dir, file);
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      deleteEmptyJsonFiles(filePath); // 递归处理子目录
    } else if (stats.isFile() && extname(file) === '.json') {
      const data = readFileSync(filePath, 'utf8').trim();
      if (!data || data === '' || data === '{}' || data === '[]') {
        unlinkSync(filePath);
        Logger.file('delete', filePath);
      }
    }
  });
};

/**
 * 获取本地化 Agent 文件名
 * @param id Agent ID
 * @param locale 语言代码
 * @returns 文件名
 */
export const getLocaleAgentFileName = (id: string, locale?: string): string => {
  const formatedLocale = normalizeLocale(locale);
  const localeSuffix = formatedLocale === config.entryLocale ? '' : `.${formatedLocale}`;
  return join(id, 'index' + localeSuffix + '.json');
};

/**
 * 获取构建时的本地化 Agent 文件名
 * @param id Agent ID
 * @param locale 语言代码
 * @returns 文件名
 */
export const getBuildLocaleAgentFileName = (id: string, locale?: string): string => {
  const formatedLocale = normalizeLocale(locale);
  const localeSuffix = formatedLocale === config.entryLocale ? '' : `.${formatedLocale}`;
  return id + localeSuffix + '.json';
};
