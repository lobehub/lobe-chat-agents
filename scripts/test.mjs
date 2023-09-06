import { consola } from 'consola';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { formatAndCheckSchema } from './check.mjs';
import { agents, agentsDir, root } from './const.mjs';

const runTest = () => {
  for (const file of agents) {
    if (file.isFile()) {
      const filePath = resolve(agentsDir, file.name);
      consola.start(filePath.replace(root, ''));
      const data = readFileSync(filePath, {
        encoding: 'utf8',
      });
      const agent = JSON.parse(data);
      formatAndCheckSchema(agent);
    }
  }
};

runTest();
