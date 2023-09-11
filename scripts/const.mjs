import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { readJSON } from './utils.mjs';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const root = resolve(__dirname, '..');
export const agentsDir = resolve(root, './agents');
export const localesDir = resolve(root, './locales');
export const agents = readdirSync(agentsDir, { withFileTypes: true });
export const agentLocales = readdirSync(localesDir, { withFileTypes: true });
export const templatePath = resolve(root, 'agent-template.json');
export const templateFullPath = resolve(root, 'agent-template-full.json');
export const metaPath = resolve(root, 'meta.json');
export const meta = readJSON(metaPath);
export const host = 'https://chat-agents.lobehub.com';
export const githubHomepage = 'https://github.com/lobehub/lobe-chat-agents';
export const publicDir = resolve(root, 'public');

export { default as config } from '../.i18nrc.js';
