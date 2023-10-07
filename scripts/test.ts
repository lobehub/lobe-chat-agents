import { consola } from 'consola';
import { readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';

import { checkUniqueIdentifier, formatAndCheckSchema } from './check';
import { agents, agentsDir, root } from './const';

const runTest = () => {
  const identifiers = [];
  for (const file of agents) {
    if (file.isFile()) {
      const filePath = resolve(agentsDir, file.name);
      consola.start(filePath.replace(root, ''));
      const agent = readJSONSync(filePath);
      formatAndCheckSchema(agent);
      identifiers.push(agent.identifier);
    }
  }
  checkUniqueIdentifier(identifiers);
};

runTest();
