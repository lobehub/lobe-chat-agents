# Scripts 目录结构说明

本目录包含了 Lobe Chat Agents 项目的所有脚本工具，经过重新组织和优化，使功能更加清晰，更容易维护。

## 📁 目录结构

```
scripts/
├── core/                    # 核心配置和模型
│   ├── constants.ts         # 项目常量配置
│   └── model.ts            # AI 模型配置
├── utils/                   # 工具函数
│   ├── file.ts             # 文件操作工具
│   ├── common.ts           # 通用工具函数
│   └── logger.ts           # 自定义日志系统
├── parsers/                 # 解析器模块
│   └── agent-parser.ts     # Agent 文件解析器
├── processors/              # 处理器模块
│   ├── category-processor.ts # 分类处理器
│   └── i18n-processor.ts   # 国际化处理器
├── validators/              # 验证器模块
│   ├── agent-validator.ts  # Agent 验证器
│   └── language-validator.ts # 语言验证器
├── builders/                # 构建器模块
│   └── agent-builder.ts    # Agent 构建器
├── formatters/              # 格式化器模块
│   └── agent-formatter.ts  # Agent 格式化器
├── commands/                # 命令行工具
│   ├── build.ts            # 构建命令
│   ├── format.ts           # 格式化命令
│   ├── test.ts             # 测试命令
│   ├── test-locale.ts      # 本地化测试命令
│   ├── validate-language.ts # 语言验证命令
│   ├── update-awesome.ts   # 更新 README 命令
│   └── auto-submit.ts      # 自动提交命令
├── schema/                  # 数据结构定义
│   ├── agentMeta.ts        # Agent 元数据 Schema
│   └── llm.ts              # LLM 相关 Schema
└── README.md               # 本说明文件
```

## 🚀 主要功能模块

### 核心模块 (core/)

- **constants.ts**: 包含所有项目常量，如路径配置、分类列表、翻译字段选择器等
- **model.ts**: OpenAI 模型配置和初始化

### 工具模块 (utils/)

- **file.ts**: 文件操作相关工具函数，如文件读写、目录管理等
- **common.ts**: 通用工具函数，如字符串处理、数组操作等
- **logger.ts**: 自定义日志系统，提供结构化、彩色输出，支持进度条、统计信息等

### 解析器模块 (parsers/)

- **agent-parser.ts**: 解析 Agent 配置文件，提取 ID、语言代码和内容

### 处理器模块 (processors/)

- **category-processor.ts**: 使用 AI 自动为 Agent 分配分类
- **i18n-processor.ts**: 处理多语言翻译，支持 OpenAI API 调用

### 验证器模块 (validators/)

- **agent-validator.ts**: 验证 Agent 配置格式和数据完整性
- **language-validator.ts**: 使用 eld 库验证翻译文件的语言准确性

### 构建器模块 (builders/)

- **agent-builder.ts**: 构建所有语言版本的 Agent 文件和索引

### 格式化器模块 (formatters/)

- **agent-formatter.ts**: 格式化 Agent 配置文件并生成多语言版本，支持增量翻译检测

### 命令行工具 (commands/)

- **build.ts**: 构建所有 Agent 文件和 Schema
- **format.ts**: 格式化 Agent 配置文件，触发翻译流程
- **test.ts**: 验证 Agent 配置文件格式
- **test-locale.ts**: 验证多语言文件完整性
- **validate-language.ts**: 验证翻译文件语言准确性，支持批量验证和清理
- **update-awesome.ts**: 更新 README 中的 Agent 列表
- **auto-submit.ts**: 自动处理 GitHub Issue 并创建 PR

## 📋 使用方法

### 构建项目

```bash
pnpm run build
```

### 格式化 Agent 文件（包含翻译）

```bash
pnpm run format
```

### 运行测试

```bash
pnpm run test
pnpm run test:locale # 测试多语言文件
pnpm run type-check  # TypeScript 类型检查
```

### 语言验证

```bash
pnpm run validate:lang                    # 验证所有翻译文件
pnpm run validate:lang --delete           # 验证并删除失败的文件
pnpm run validate:lang <file_path>        # 验证单个文件
pnpm run clean:lang                       # 清理验证失败的翻译文件
```

### 更新 README

```bash
pnpm run update:awesome
```

## 🌟 核心特性

### 🔄 增量翻译系统

- **智能检测**: 自动比较源文件与现有翻译，仅翻译新增或修改的内容
- **内容合并**: 使用 lodash.merge 将新翻译与现有翻译智能合并
- **性能优化**: 避免重复翻译，节省 API 调用成本

### 🛡️ 语言验证系统

- **自动检测**: 使用 eld 库检测翻译文件的实际语言
- **准确性验证**: 确保翻译结果与预期语言代码匹配
- **批量处理**: 支持批量验证和自动清理无效文件
- **详细报告**: 提供置信度、问题详情等详细信息

### 📊 日志系统

- **结构化输出**: 统一的日志格式，支持不同级别和颜色
- **进度追踪**: 实时显示处理进度和统计信息
- **文件操作日志**: 详细记录文件读写、创建、删除操作
- **翻译流程日志**: 专门的翻译过程日志记录

### 🎯 翻译字段配置

支持的翻译字段（在 constants.ts 中配置）：

- `meta.title` - Agent 标题
- `meta.description` - Agent 描述
- `meta.tags` - 标签
- `config.systemRole` - 系统角色
- `summary` - 摘要
- `examples` - 示例对话
- `config.openingMessage` - 开场消息
- `config.openingQuestions` - 开场问题

## 🔧 优化特性

1. **模块化设计**: 按功能将代码分离到不同模块，提高可维护性
2. **中文注释**: 为所有函数和重要代码添加了详细的中文注释
3. **类型安全**: 使用 TypeScript 提供完整的类型定义
4. **智能翻译**: 增量检测避免重复翻译，提高效率
5. **质量保证**: 自动语言验证确保翻译质量
6. **并发处理**: 使用 p-map 进行并发处理，提高性能
7. **清晰的职责分离**: 每个模块都有明确的职责范围
8. **结构化日志**: 统一的日志系统提供更好的开发体验

## 🛠️ 开发指南

### 添加新功能

1. **核心逻辑**: 添加到 `processors/`、`validators/` 或 `builders/` 目录
2. **工具函数**: 添加到 `utils/file.ts` 或 `utils/common.ts`
3. **命令行工具**: 在 `commands/` 目录创建新命令
4. **类型定义**: 在 `schema/` 目录更新类型定义

### 使用日志系统

```typescript
import { Logger } from '../utils/logger';

// 基本日志
Logger.info('处理文件', fileName);
Logger.success('操作完成', target, details);
Logger.warn('警告信息', reason);
Logger.error('错误信息', error);

// 流程日志
Logger.start('开始操作', target);
Logger.split('分隔线标题');

// 文件操作
Logger.file('read', filePath, 'success');
Logger.translate(agentId, 'zh-CN', 'en-US', 'success');

// 统计信息
Logger.stats({
  总文件数: totalCount,
  成功数量: successCount,
});
```

### 调试技巧

```bash
# 启用调试模式
DEBUG=true pnpm run validate:lang

# 类型检查
pnpm run type-check

# 单个文件测试
pnpm run validate:lang path/to/file.json
```
