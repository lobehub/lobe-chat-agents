import { consola } from 'consola';
import { cloneDeep, merge } from 'lodash-es';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import config from '../.i18nrc.js';
import { formatAndCheckSchema } from './check.mjs';
import { agents, agentsDir, localesDir, meta, root } from './const.mjs';

const build = async () => {
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
      list[config.entryLocale].push(agent);
      for (const locale of config.outputLocales) {
        if (!list[locale]) list[locale] = [];
        const localeFilePath = resolve(localesDir, file.name.replace('.json', `.${locale}.json`));
        const localeData = readFileSync(localeFilePath, {
          encoding: 'utf8',
        });
        list[locale].push(merge(cloneDeep(agent), JSON.parse(localeData)));
      }
    }
  }

  agentsIndex.agents = list[config.entryLocale].sort(
    (a, b) => new Date(b.createAt) - new Date(a.createAt),
  );

  const publicPath = resolve(root, 'public');

  if (!existsSync(publicPath)) mkdirSync(publicPath);

  for (const locale of [config.entryLocale, ...config.outputLocales]) {
    agentsIndex.agents = list[locale].sort((a, b) => new Date(b.createAt) - new Date(a.createAt));
    const name = locale === config.entryLocale ? `index.json` : `index.${locale}.json`;
    writeFileSync(resolve(root, `./public`, name), JSON.stringify(agentsIndex, null, 2), {
      encoding: 'utf8',
    });
    consola.success(`build ${name}`);
  }
};

await build();
