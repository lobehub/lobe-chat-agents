import { readJSONSync } from 'fs-extra';
import { readdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

// 文件路径相关配置
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);
export const root = resolve(__dirname, '../..');

// 核心目录路径
export const agentsDir = resolve(root, './src'); // Agent 配置文件目录
export const schemasDir = resolve(root, './schema'); // Schema 文件目录
export const localesDir = resolve(root, './locales'); // 多语言文件目录
export const publicDir = resolve(root, './public'); // 构建输出目录

// 目录内容读取
export const agents = readdirSync(agentsDir, { withFileTypes: true }); // Agent 文件列表
export const agentLocales = readdirSync(localesDir, { withFileTypes: true }); // 多语言文件列表

// 模板文件路径
export const templatePath = resolve(root, 'agent-template.json'); // Agent 模板文件
export const templateFullPath = resolve(root, 'agent-template-full.json'); // 完整 Agent 模板文件

// 索引文件路径
export const indexPath = resolve(publicDir, 'index.json'); // 英文索引文件
export const indexCnPath = resolve(publicDir, 'index.zh-CN.json'); // 中文索引文件

// README 文件路径
export const readmePath = resolve(root, 'README.md'); // 英文 README
export const readmeCnPath = resolve(root, 'README.zh-CN.md'); // 中文 README

// 元数据文件
export const metaPath = resolve(root, 'meta.json');
export const meta = readJSONSync(metaPath); // 项目元数据

// 外部链接配置
export const host = 'https://chat-agents.lobehub.com'; // 项目主站地址
export const githubHomepage = 'https://github.com/lobehub/lobe-chat-agents'; // GitHub 仓库地址

// README 分割标识符
export const readmeSplit = '<!-- AWESOME PROMPTS -->';

// Agent 分类列表
export const category = [
  'academic', // 学术研究
  'career', // 职业发展
  'copywriting', // 文案写作
  'design', // 设计相关
  'education', // 教育学习
  'emotions', // 情感沟通
  'entertainment', // 娱乐休闲
  'games', // 游戏相关
  'general', // 通用助手
  'life', // 生活助理
  'marketing', // 市场营销
  'office', // 办公效率
  'programming', // 编程开发
  'translation', // 翻译相关
];

// 导入 i18n 配置
export { default as config } from '../../.i18nrc.js';
