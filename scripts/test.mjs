import { consola } from 'consola';
import { resolve } from 'node:path';

import { checkUniqueIdentifier, formatAndCheckSchema } from './check.mjs';
import { agents, agentsDir, root } from './const.mjs';
import { readJSON } from './utils.mjs';

const runTest = () => {
  const identifiers = [];
  for (const file of agents) {
    if (file.isFile()) {
      const filePath = resolve(agentsDir, file.name);
      consola.start(filePath.replace(root, ''));
      const agent = readJSON(filePath);
      formatAndCheckSchema(agent);
      identifiers.push(agent.identifier);
    }
  }
  checkUniqueIdentifier(identifiers);
};

runTest();
