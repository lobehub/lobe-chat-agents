import { consola } from 'consola';
import { existsSync, readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';

import { formatAndCheckSchema } from './check';
import { agents, agentsDir, config, publicDir, root } from './const';

const runTest = () => {
  const identifiers = [];
  for (const file of agents) {
    if (file.isFile()) {
      const filePath = resolve(agentsDir, file.name);
      consola.start(filePath.replace(root, ''));
      const agent = readJSONSync(filePath);
      formatAndCheckSchema(agent);
      identifiers.push(agent.identifier);
    }
  }
  for (const identifier of identifiers) {
    const filename = [identifier, 'json'].join('.');
    const isExist = existsSync(resolve(publicDir, filename));
    if (!isExist) throw `${filename} agent not exist`;
    for (const locale of config.outputLocales) {
      if (locale === config.entryLocale) continue;
      const localeFilename = [identifier, locale, 'json'].join('.');
      const isLocaleExist = existsSync(resolve(publicDir, localeFilename));
      if (!isLocaleExist) throw `${localeFilename} agent not exist`;
    }
    consola.success(`${identifier} with ${config.outputLocales.length} locales`);
  }
};

runTest();
