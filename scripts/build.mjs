import { consola } from 'consola';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { formatAndCheckSchema } from './check.mjs';
import { agentDir, agents, meta, root } from './const.mjs';

const build = async () => {
  const agentsIndex = {
    ...meta,
    agents: [],
  };

  const list = [];
  for (const file of agents) {
    if (file.isFile()) {
      const data = readFileSync(resolve(agentDir, file.name), {
        encoding: 'utf8',
      });
      const agent = JSON.parse(data);
      list.push(formatAndCheckSchema(agent));
    }
  }

  agentsIndex.agents = list.sort((a, b) => new Date(b.createAt) - new Date(a.createAt));

  const publicPath = resolve(root, 'public');

  if (!existsSync(publicPath)) mkdirSync(publicPath);

  writeFileSync(resolve(root, './public/index.json'), JSON.stringify(agentsIndex, null, 2), {
    encoding: 'utf8',
  });

  consola.success('build index.json');
};

await build();
