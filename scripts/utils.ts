import { consola } from 'consola';
import { colors } from 'consola/utils';
import { Dirent, existsSync, mkdirSync, writeFileSync } from 'node:fs';

import { config, readmeSplit } from './const';

export const writeJSON = (filePath, data, format = true) => {
  const jsonStr = format ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  writeFileSync(filePath, jsonStr, 'utf8');
};

export const checkDir = (dirpath) => {
  if (!existsSync(dirpath)) mkdirSync(dirpath);
};

export const checkJSON = (file: Dirent) => file.isFile() && file.name?.endsWith('.json');

export const split = (name) => {
  consola.log('');
  consola.log(colors.gray(`========================== ${name} ==============================`));
};

export const getLocaleAgentFileName = (id: string, locale?: string) => {
  const localeSuffix = locale === config.entryLocale ? '' : `.${locale}`;
  return id + localeSuffix + '.json';
};

export const findDuplicates = (arr: string[]): string[] => {
  const duplicates: { [key: string]: number } = {};

  // 统计每个项目出现的次数
  for (const item of arr) {
    if (duplicates[item]) {
      duplicates[item]++;
    } else {
      duplicates[item] = 1;
    }
  }

  // 挑出重复出现 3 次以上的项目
  const COUNT = 3;

  const result = Object.keys(duplicates).filter((item) => duplicates[item] >= COUNT);

  // 按重复次数从多到少排序
  result.sort((a, b) => duplicates[b] - duplicates[a]);

  return result;
};

export const updateAwesomeReadme = (md: string, prompts: string): string => {
  const mds = md.split(readmeSplit);
  mds[1] = [' ', prompts, ' '].join('\n\n');

  return mds.join(readmeSplit);
};

export const checkHeader = (line: string) => {
  const header = [
    '### systemRole',
    '### identifier',
    '### avatar',
    '### title',
    '### description',
    '### tags',
    '### locale',
  ];
  let check = false;
  header.forEach((item) => {
    if (line.startsWith(item)) check = true;
  });
  return check;
};
