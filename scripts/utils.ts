import { consola } from 'consola';
import { colors } from 'consola/utils';
import { Dirent, existsSync, mkdirSync, writeFileSync } from 'node:fs';

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
  const localeSuffix = locale === 'en' ? '' : `.${locale}`;
  return id + localeSuffix + '.json';
};
