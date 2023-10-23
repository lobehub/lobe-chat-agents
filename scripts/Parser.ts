import { readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';

import { agentsDir, config } from './const';
import { LobeAgent } from './schema/agentMeta';

export const Parser = {
  parseFile: (fileName: string) => {
    // <id>.<locale>  test: https://regex101.com/r/t744SN/1
    const regexp = /^(?<id>[\w-]*)\.?(?<locale>.*)?$/;

    const match = regexp.exec(fileName.replace('.json', ''));
    const { id, locale = config.entryLocale } = match.groups;

    const filePath = resolve(agentsDir, fileName);

    let agent: LobeAgent = readJSONSync(filePath);

    return { content: agent, id, locale };
  },
};
