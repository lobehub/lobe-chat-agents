import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

export const readJSON = (filePath) => {
  const data = readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

export const writeJSON = (filePath, data, format = true) => {
  const jsonStr = format ? JSON.stringify(data, null, 2) : JSON.stringify(data);
  writeFileSync(filePath, jsonStr, 'utf8');
};

export const checkDir = (dirpath) => {
  if (!existsSync(dirpath)) mkdirSync(dirpath);
};

export const checkJSON = (file) => file.isFile() && file.name?.includes('.json');
