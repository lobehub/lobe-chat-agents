import { consola } from 'consola';
import dayjs from 'dayjs';
import { kebabCase } from 'lodash-es';
import { format } from 'prettier';
import { remark } from 'remark';
import pangu from 'remark-pangu';

import { config, meta } from './const';
import { LobeAgent, lobeAgentSchema } from './schema/agentMeta';

export const formatAndCheckSchema = (agent) => {
  if (!agent.schemaVersion) agent.schemaVersion = meta.schemaVersion;
  if (!agent.createAt) agent.createAt = dayjs().format('YYYY-MM-DD');

  const result = lobeAgentSchema.safeParse(agent);

  if (result.success) {
    consola.success(`schema check pass`);
  } else {
    consola.error(`schema check fail`);
    throw new Error((result as any).error);
  }
  return agent;
};

export const formatPrompt = async (prompt: string, locale: string) => {
  return locale === 'zh-CN'
    ? String(await remark().use(pangu).process(prompt))
    : String(await remark().process(prompt));
};

export const formatAgentJSON = async (agent: LobeAgent, locale: string = config.entryLocale) => {
  formatAndCheckSchema(agent);
  agent.config.systemRole = await formatPrompt(agent.config.systemRole, locale);

  agent.config.systemRole = await format(agent.config.systemRole, { parser: 'markdown' });
  agent.identifier = kebabCase(agent.identifier);
  if (agent?.meta?.tags?.length > 0) {
    agent.meta.tags = agent.meta.tags.map((tag) => kebabCase(tag));
  }
  return agent;
};

export const checkUniqueIdentifier = (arr) => {
  let duplicates = [];
  let set = new Set();

  for (const element of arr) {
    if (set.has(element)) {
      duplicates.push(element);
    } else {
      set.add(element);
    }
  }

  if (duplicates.length > 0) {
    consola.error('Duplicates identifier:', JSON.stringify(duplicates));
    // eslint-disable-next-line unicorn/no-process-exit
    process.exit(1);
  } else {
    consola.success('Unique identifier check pass');
  }
};
