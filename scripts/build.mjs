import { consola } from 'consola';
import { cloneDeep, merge } from 'lodash-es';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import config from '../.i18nrc.js';
import { formatAndCheckSchema } from './check.mjs';
import { agents, agentsDir, host, localesDir, meta, root } from './const.mjs';

const build = async () => {
  const publicPath = resolve(root, 'public');

  if (!existsSync(publicPath)) mkdirSync(publicPath);

  const agentsIndex = {
    ...meta,
    agents: [],
  };

  const list = {};

  for (const file of agents) {
    if (file.isFile()) {
      const data = readFileSync(resolve(agentsDir, file.name), {
        encoding: 'utf8',
      });
      const agent = formatAndCheckSchema(JSON.parse(data));
      if (!list[config.entryLocale]) list[config.entryLocale] = [];
      writeFileSync(resolve(root, `./public`, file.name), JSON.stringify(agent), {
        encoding: 'utf8',
      });
      delete agent.config;
      agent.manifest = `${host}/${file.name}`;
      list[config.entryLocale].push(agent);

      for (const locale of config.outputLocales) {
        if (!list[locale]) list[locale] = [];
        const localeFileName = file.name.replace('.json', `.${locale}.json`);
        const localeFilePath = resolve(localesDir, localeFileName);
        const localeData = readFileSync(localeFilePath, {
          encoding: 'utf8',
        });
        const agentLocale = merge(cloneDeep(agent), JSON.parse(localeData));
        writeFileSync(resolve(root, `./public`, localeFileName), JSON.stringify(agentLocale), {
          encoding: 'utf8',
        });
        delete agentLocale.config;
        agentLocale.manifest = `${host}/${localeFileName}`;
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
    writeFileSync(resolve(root, `./public`, name), JSON.stringify(agentsIndex), {
      encoding: 'utf8',
    });
    consola.success(`build ${name}`);
  }
};

await build();
