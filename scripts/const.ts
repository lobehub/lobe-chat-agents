import { readJSONSync } from 'fs-extra';
import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const root = resolve(__dirname, '..');

export const agentsDir = resolve(root, './src');
export const schemasDir = resolve(root, './schema');
export const localesDir = resolve(root, './locales');
export const publicDir = resolve(root, './public');

export const agents = readdirSync(agentsDir, { withFileTypes: true });
export const agentLocales = readdirSync(localesDir, { withFileTypes: true });

export const templatePath = resolve(root, 'agent-template.json');
export const templateFullPath = resolve(root, 'agent-template-full.json');

export const indexPath = resolve(publicDir, 'index.json');

export const indexCnPath = resolve(publicDir, 'index.zh-CN.json');

export const readmePath = resolve(root, 'README.md');

export const readmeCnPath = resolve(root, 'README.zh-CN.md');

export const metaPath = resolve(root, 'meta.json');
export const meta = readJSONSync(metaPath);

export const host = 'https://chat-agents.lobehub.com';
export const githubHomepage = 'https://github.com/lobehub/lobe-chat-agents';

export const readmeSplit = '<!-- AWESOME PROMPTS -->';

export { default as config } from '../.i18nrc.js';
