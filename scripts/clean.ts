import { consola } from 'consola';
import { colors } from 'consola/utils';
import { readFileSync, readdirSync, statSync, unlinkSync } from 'fs';
import { extname, resolve } from 'path';

export const deleteEmptyJsonFiles = (dir: string) => {
  const files = readdirSync(dir);
  files.forEach((file) => {
    const filePath = resolve(dir, file);
    const stats = statSync(filePath);
    if (stats.isDirectory()) {
      deleteEmptyJsonFiles(filePath);
    } else if (stats.isFile() && extname(file) === '.json') {
      const data = readFileSync(filePath, 'utf8').trim();
      if (!data || data === '' || data === '{}' || data === '[]') {
        unlinkSync(filePath);
        consola.info(`delete empty file`, colors.yellow(filePath));
      }
    }
  });
};
