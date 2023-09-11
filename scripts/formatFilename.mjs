import { consola } from 'consola';
import { renameSync } from 'node:fs';
import { resolve } from 'node:path';

import { agentLocales, agents, agentsDir, localesDir } from './const.mjs';
import { checkJSON, readJSON } from './utils.mjs';

const formatFilenameById = (fileName) => {
  const filePath = resolve(agentsDir, fileName);
  const agent = readJSON(filePath);
  const newFilename = agent.identifier + '.json';
  if (fileName !== newFilename) {
    const newFilepath = resolve(agentsDir, newFilename);
    renameSync(filePath, newFilepath);
    consola.success(`rename [${fileName}] >> [${newFilename}]`);
    for (const file of agentLocales) {
      if (checkJSON(file)) {
        const localeFilename = file.name;
        const localeFilepath = resolve(localesDir, localeFilename);
        const localeFilenameArray = file.name.split('.');

        if (localeFilenameArray[0] === fileName.split('.')[0]) {
          const newLocaleFilename = [
            agent.identifier,
            localeFilenameArray[1],
            localeFilenameArray[2],
          ].join('.');
          const newLocaleFilepath = resolve(localesDir, newLocaleFilename);
          renameSync(localeFilepath, newLocaleFilepath);
          consola.success(`rename [${localeFilename}] >> [${newLocaleFilename}]`);
        }
      }
    }
  }
};

export const formatFilenames = () => {
  consola.start('Start format filenames...');
  for (const file of agents) {
    if (checkJSON(file)) {
      try {
        formatFilenameById(file.name);
      } catch (error) {
        consola.error(file.name, error);
      }
    }
  }
  consola.success('clean');
};
