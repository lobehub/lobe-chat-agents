import { consola } from 'consola';
import { colors } from 'consola/utils';
import { get, set } from 'lodash-es';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';

import { Parser } from './Parser';
import { addCategory } from './category';
import { formatAgentJSON, formatPrompt } from './check';
import { deleteEmptyJsonFiles } from './clean';
import { agents, agentsDir, config, localesDir } from './const';
import { translateJSON } from './i18n';
import { checkJSON, getLocaleAgentFileName, split, writeJSON } from './utils';

class Formatter {
  formatJSON = async (fileName: string) => {
    let { content: agent, id, locale: defaultLocale } = Parser.parseFile(fileName);

    agent = await formatAgentJSON(agent, defaultLocale);

    if (!agent.meta.category) {
      agent = await addCategory(agent);
      consola.info(colors.yellow(id), 'add category:', agent.meta.category);
    }

    if (!agent.createdAt) {
      // @ts-ignore
      // TODO: remove createAt
      agent.createdAt = agent.createAt;
    }

    writeJSON(resolve(agentsDir, fileName), agent);

    // i18n workflow
    let rawData = {};

    for (const key of config.selectors) {
      const rawValue = get(agent, key);
      if (rawValue) set(rawData, key, rawValue);
    }

    if (Object.keys(rawData).length > 0) {
      const directoryPath = resolve(localesDir, id);

      if (!existsSync(directoryPath)) {
        mkdirSync(directoryPath, { recursive: true });
      }

      await pMap(
        config.outputLocales,
        async (locale: string) => {
          if (locale === defaultLocale) return;

          const localeFileName = getLocaleAgentFileName(id, locale);
          const localeFilePath = resolve(localesDir, localeFileName);

          // TODO: localMode flat
          if (existsSync(localeFilePath)) return;

          consola.start(
            colors.yellow(id),
            `from`,
            colors.cyan(`[${defaultLocale}]`),
            `to`,
            colors.cyan(`[${locale}]`),
          );
          const translateResult = await translateJSON(
            localeFileName,
            rawData,
            locale,
            defaultLocale,
          );
          if (translateResult) {
            translateResult.config.systemRole = await formatPrompt(
              translateResult.config.systemRole,
              config.outputLocales,
            );
            writeJSON(localeFilePath, translateResult);
            consola.success(colors.yellow(id), colors.cyan(`[${locale}]`), `generated`);
          }
        },
        { concurrency: 5 },
      );
    }
  };

  run = async () => {
    consola.start('Start format json content...');
    deleteEmptyJsonFiles(localesDir);
    await pMap(
      agents,
      async (file) => {
        if (checkJSON(file)) {
          await this.formatJSON(file.name);
        }
      },
      { concurrency: 5 },
    );
    consola.success(`format success`);
  };
}

split('FORMAT JSON CONTENT');

await new Formatter().run();
