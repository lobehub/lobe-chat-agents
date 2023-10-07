import { readJSONSync } from 'fs-extra';
import { resolve } from 'node:path';

import { LobeAgent } from './agentMetaSchema';
import { agentsDir } from './const';

export class Parser {
  static parseFile = (fileName: string) => {
    // <id>.<locale>  test: https://regex101.com/r/t744SN/1
    const regexp = /^(?<id>[\w-]*)\.?(?<locale>.*)?$/;

    const match = regexp.exec(fileName.replace('.json', ''));
    const { id, locale = 'en' } = match.groups;

    const filePath = resolve(agentsDir, fileName);

    let agent: LobeAgent = readJSONSync(filePath);

    return { content: agent, id, locale };
  };
}
