import { readFileSync, readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const root = resolve(__dirname, '..');
export const agentsDir = resolve(root, './agents');
export const localesDir = resolve(root, './locales');
export const agents = readdirSync(agentsDir, { withFileTypes: true });
export const templatePath = resolve(root, 'agent_template.json');
export const templateFullPath = resolve(root, 'agent_template_full.json');
export const metaPath = resolve(root, 'meta.json');
export const meta = JSON.parse(readFileSync(metaPath, { encoding: 'utf8' }));
export const host = 'https://chat-plugins.lobehub.com'
