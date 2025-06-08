#!/usr/bin/env node
/**
 * 构建命令
 * 用于构建所有语言版本的 Agent 文件和 Schema
 */
import { agentBuilder } from '../builders/agent-builder';

// 执行构建流程
await agentBuilder.run();
