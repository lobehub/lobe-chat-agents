import { consola } from 'consola';
import { cloneDeep, get, merge, set } from 'lodash-es';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';

import { formatAgentJSON, formatPrompt } from './check.mjs';
import {
  agents,
  agentsDir,
  config,
  localesDir,
  metaPath,
  templateFullPath,
  templatePath,
} from './const.mjs';
import { formatFilenames } from './formatFilename.mjs';
import { translateJSON } from './i18n.mjs';
import { checkJSON, readJSON, writeJSON } from './utils.mjs';

const formatJSON = async (fileName, checkType) => {
  consola.start(fileName);

  const filePath = resolve(agentsDir, fileName);

  let agent = readJSON(filePath);

  if (checkType) {
    agent = await formatAgentJSON(agent);

    // i18n workflow
    let rawData = {};

    for (const key of config.selectors) {
      const rawValue = get(agent, key);
      if (rawValue) set(rawData, key, rawValue);
    }

    if (rawData) {
      if (agent.locale && agent.locale !== config.entryLocale) {
        if (config.outputLocales.includes(agent.locale)) {
          writeJSON(
            resolve(localesDir, fileName.replace('.json', `.${agent.locale}.json`)),
            rawData,
          );
        }
        rawData = await translateJSON(rawData, config.entryLocale, agent.locale);
        agent = merge(cloneDeep(agent), rawData);
        delete agent.locale;
      }

      for (const locale of config.outputLocales) {
        const localeFilePath = resolve(localesDir, fileName.replace('.json', `.${locale}.json`));
        if (existsSync(localeFilePath)) continue;
        const translateResult = await translateJSON(rawData, locale);
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
  }

  writeJSON(filePath, agent);

  consola.success(`format success`);
};

const runFormat = async () => {
  await formatJSON(metaPath);
  await formatJSON(templatePath);
  await formatJSON(templateFullPath);
  for (const file of agents) {
    if (checkJSON(file)) {
      await formatJSON(file.name, true);
    }
  }
};

await runFormat();
formatFilenames();
