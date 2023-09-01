import { consola } from 'consola';
import { kebabCase } from 'lodash-es';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { format } from 'prettier';
import { remark } from 'remark';
import pangu from 'remark-pangu';

import { formatAndCheckSchema } from './check.mjs';
import { agentDir, agents, metaPath, root, templateFullPath, templatePath } from './const.mjs';

const formatJSON = async (filePath, checkType) => {
  consola.start(filePath.replace(root, ''));

  const data = readFileSync(filePath, {
    encoding: 'utf8',
  });

  let agent = JSON.parse(data);

  if (checkType) {
    agent = formatAndCheckSchema(agent);
    agent.config.systemRole = String(await remark().use(pangu).process(agent.config.systemRole));
    agent.config.systemRole = await format(agent.config.systemRole, { parser: 'markdown' });
    agent.identifier = kebabCase(agent.identifier);
    if (agent?.meta?.tags?.length > 0) {
      agent.meta.tags = agent.meta.tags.map((tag) => tag.toLowerCase().replaceAll(' ', '-'));
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
      const filePath = resolve(agentDir, file.name);
      await formatJSON(filePath, true);
    }
  }
};

await runFormat();
