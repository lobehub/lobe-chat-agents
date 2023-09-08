import { consola } from 'consola';
import { cloneDeep, get, merge, set } from 'lodash-es';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import config from '../.i18nrc.js';
import { formatAgentJSON } from './check.mjs';
import {
  agents,
  agentsDir,
  localesDir,
  metaPath,
  templateFullPath,
  templatePath,
} from './const.mjs';
import { translateJSON } from './i18n.mjs';


const formatJSON = async (fileName, checkType) => {
  consola.start(fileName);

  const filePath = resolve(agentsDir, fileName);

  const data = readFileSync(filePath, {
    encoding: 'utf8',
  });

  let agent = JSON.parse(data);

  if (checkType) {
    agent = formatAgentJSON(agent);

    // i18n workflow
    let rawData = {};

    for (const key of config.selectors) {
      const rawValue = get(agent, key);
      if (rawValue) set(rawData, key, rawValue);
    }

    if (rawData) {
      if (agent.locale && agent.locale !== config.entryLocale) {
        if (config.outputLocales.includes(agent.locale)) {
          writeFileSync(
            resolve(localesDir, fileName.replace('.json', `.${agent.locale}.json`)),
            JSON.stringify(rawData, null, 2),
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
          writeFileSync(localeFilePath, JSON.stringify(translateResult, null, 2));
          consola.success(`${locale} generated`);
        }
      }
    }
  }

  writeFileSync(filePath, JSON.stringify(agent, null, 2), {
    encoding: 'utf8',
  });

  consola.success(`format success`);
};

const runFormat = async () => {
  await formatJSON(metaPath);
  await formatJSON(templatePath);
  await formatJSON(templateFullPath);
  for (const file of agents) {
    if (file.isFile()) {
      await formatJSON(file.name, true);
    }
  }
};

await runFormat();
