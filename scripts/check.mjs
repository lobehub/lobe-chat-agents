import { consola } from 'consola';
import dayjs from 'dayjs';
import { kebabCase } from 'lodash-es';
import { format } from 'prettier';
import { remark } from 'remark';
import pangu from 'remark-pangu';

import config from '../.i18nrc.js';
import { agentMetaSchema } from './agentMetaSchema.mjs';
import { meta } from './const.mjs';

export const formatAndCheckSchema = (agent) => {
  if (!agent.schemaVersion) agent.schemaVersion = meta.schemaVersion;
  if (!agent.createAt) agent.createAt = dayjs().format('YYYY-MM-DD');

  const result = agentMetaSchema.safeParse(agent);

  if (result.success) {
    consola.success(`schema check pass`);
  } else {
    consola.error(`schema check fail`);
    throw new Error(result.error);
  }
  return agent;
};

export const formatPrompt = async (prompt, local) => {
  return local === 'zh_CN'
    ? String(await remark().use(pangu).process(prompt))
    : String(await remark().process(prompt));
};
export const formatAgentJSON = async (agent) => {
  formatAndCheckSchema(agent);
  agent.config.systemRole = await formatPrompt(
    agent.config.systemRole,
    agent?.locale || config.entryLocale,
  );

  agent.config.systemRole = await format(agent.config.systemRole, { parser: 'markdown' });
  agent.identifier = kebabCase(agent.identifier);
  if (agent?.meta?.tags?.length > 0) {
    agent.meta.tags = agent.meta.tags.map((tag) => tag.toLowerCase().replaceAll(' ', '-'));
  }
  return agent;
};

export const checkUniqueIdentifier = (arr) => {
  let duplicates = [];
  let set = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i])) {
      duplicates.push(arr[i]);
    } else {
      set.add(arr[i]);
    }
  }

  if (duplicates.length > 0) {
    consola.error('Duplicates identifier:', JSON.stringify(duplicates));
    process.exit(1);
  } else {
    consola.success('Unique identifier check pass');
  }
};
