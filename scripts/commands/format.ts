#!/usr/bin/env node
/**
 * 格式化命令
 * 用于格式化 Agent 配置文件并生成多语言版本
 */
import { formatAgents } from '../formatters/agent-formatter';

// 执行格式化流程
await formatAgents();
