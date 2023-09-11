import { consola } from 'consola';
import { cloneDeep, merge } from 'lodash-es';
import { resolve } from 'node:path';

import { formatAndCheckSchema } from './check.mjs';
import { agents, agentsDir, config, localesDir, meta, publicDir } from './const.mjs';
import { checkDir, checkJSON, readJSON, writeJSON } from './utils.mjs';

const build = async () => {
  checkDir(publicDir);

  const agentsIndex = {
    ...meta,
    agents: [],
  };

  const list = {};

  for (const file of agents) {
    if (checkJSON(file)) {
      const data = readJSON(resolve(agentsDir, file.name));
      const agent = formatAndCheckSchema(data);
      if (!list[config.entryLocale]) list[config.entryLocale] = [];
      writeJSON(resolve(publicDir, file.name), agent, false);

      // clean useless key
      delete agent.config;

      list[config.entryLocale].push(agent);

      for (const locale of config.outputLocales) {
        if (!list[locale]) list[locale] = [];
        const localeFileName = file.name.replace('.json', `.${locale}.json`);
        const localeFilePath = resolve(localesDir, localeFileName);
        const localeData = readJSON(localeFilePath);
        const agentLocale = merge(cloneDeep(agent), localeData);
        writeJSON(resolve(publicDir, localeFileName), agentLocale, false);
        delete agentLocale.config;
        list[locale].push(agentLocale);
      }
    }
  }

  agentsIndex.agents = list[config.entryLocale].sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt),
  );

  for (const locale of [config.entryLocale, ...config.outputLocales]) {
    agentsIndex.agents = list[locale].sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
    const name = locale === config.entryLocale ? `index.json` : `index.${locale}.json`;
    writeJSON(resolve(publicDir, name), agentsIndex, false);
    consola.success(`build ${name}`);
  }
};

await build();
