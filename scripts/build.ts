import { consola } from 'consola';
import { readJSONSync, writeJSONSync } from 'fs-extra';
import { merge } from 'lodash-es';
import { Dirent } from 'node:fs';
import { resolve } from 'node:path';

import { Parser } from './Parser';
import { LobeAgent } from './agentMetaSchema';
import { agents, config, localesDir, meta, publicDir } from './const';
import { checkDir, checkJSON, getLocaleAgentFileName } from './utils';

class Builder {
  private agents: Dirent[];

  constructor(agents: Dirent[]) {
    checkDir(publicDir);
    this.agents = agents;
  }

  /**
   * build single locale agents
   * @param locale
   */
  buildSingleLocaleAgents = (locale: string) => {
    const agentIndex: LobeAgent[] = [];
    for (const file of this.agents) {
      // if file is not json ,skip it
      if (!checkJSON(file)) continue;
      const { content, locale: defaultLocale, id } = Parser.parseFile(file.name);

      const localeFileName = getLocaleAgentFileName(id, locale);

      // find correct agent content
      let agent: LobeAgent;
      if (defaultLocale === locale) {
        agent = content;
      } else {
        // merge default agent with data
        const data = readJSONSync(resolve(localesDir, localeFileName));
        agent = merge({}, content, data);
      }

      // write agent to public dir
      writeJSONSync(resolve(publicDir, localeFileName), agent);

      // add agent meta to index
      delete agent.config;
      agentIndex.push(agent);
    }

    return agentIndex.sort(
      // @ts-ignore
      (a, b) => new Date(b.createAt) - new Date(a.createAt),
    );
  };

  run = async () => {
    for (const locale of config.outputLocales) {
      consola.start(`build ${locale}`);

      const agents = this.buildSingleLocaleAgents(locale);
      consola.info(`collected ${agents.length} agents`);

      const agentsIndex = { ...meta, agents };

      const indexFileName = getLocaleAgentFileName('index', locale);
      writeJSONSync(resolve(publicDir, indexFileName), agentsIndex);
      consola.success(`build ${locale}`);
    }
  };
}

await new Builder(agents).run();
