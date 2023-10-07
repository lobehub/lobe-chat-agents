import { consola } from 'consola';
import { get, set } from 'lodash-es';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { Parser } from './Parser';
import { formatAgentJSON, formatPrompt } from './check';
import { agents, config, localesDir } from './const';
import { translateJSON } from './i18n';
import { checkJSON, getLocaleAgentFileName, split, writeJSON } from './utils';

class Formatter {
  formatJSON = async (fileName: string) => {
    consola.start(fileName);

    let { content: agent, id, locale: defaultLocale } = Parser.parseFile(fileName);

    agent = await formatAgentJSON(agent, defaultLocale);

    // i18n workflow
    let rawData = {};

    for (const key of config.selectors) {
      const rawValue = get(agent, key);
      if (rawValue) set(rawData, key, rawValue);
    }

    if (Object.keys(rawData).length > 0) {
      for (const locale of config.outputLocales) {
        if (locale === defaultLocale) continue;

        const localeFileName = getLocaleAgentFileName(id, locale);
        const localeFilePath = resolve(localesDir, localeFileName);

        // TODO: localMode flat
        if (existsSync(localeFilePath)) continue;

        consola.log('gen', id, `from [${defaultLocale}] to [${locale}]`);
        const translateResult = await translateJSON(rawData, locale, defaultLocale);
        if (translateResult) {
          translateResult.config.systemRole = await formatPrompt(
            translateResult.config.systemRole,
            config.outputLocales,
          );
          writeJSON(localeFilePath, translateResult);
          consola.success(`${locale} generated`);
        }
      }
    }

    consola.success(`format success`);
  };

  run = async () => {
    consola.start('Start format json content...');

    for (const file of agents) {
      if (checkJSON(file)) {
        await this.formatJSON(file.name);
      }
    }
  };
}

split('FORMAT JSON CONTENT');

await new Formatter().run();
