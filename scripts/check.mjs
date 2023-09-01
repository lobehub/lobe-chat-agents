import { consola } from 'consola';
import dayjs from 'dayjs';

import { agentMetaSchema } from './agentMetaSchema.mjs';
import { meta } from './const.mjs';

export const formatAndCheckSchema = (agent) => {
  if (!agent.schemaVersion) agent.schemaVersion = meta.schemaVersion;
  if (!agent.createAt) agent.createAt = dayjs().format('YYYY-MM-DD');

  const result = agentMetaSchema.safeParse(agent);

  if (result.success) {
    consola.success(`schema check pass`);
  } else {
    consola.error(`schema check fail`, result.error);
  }
  return agent;
};
