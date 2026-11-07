#!/usr/bin/env bun
/**
 * 语言验证命令
 * 用于验证翻译文件的语言是否匹配预期的语言代码
 */
import { existsSync, readdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';

import { Logger } from '../utils/logger';
import {
  LanguageValidationResult,
  ValidationStats,
  fixLanguageIssues,
  fixLanguageWithFallback,
  validateTranslationLanguage,
} from '../validators/language-validator';

/**
 * 获取所有翻译文件路径
 * @param targetFile - 指定验证的文件路径
 * @returns 翻译文件路径数组
 */
function getAllTranslationFiles(targetFile?: string): string[] {
  if (targetFile) {
    return existsSync(targetFile) ? [targetFile] : [];
  }

  const files: string[] = [];
  const localesDir = resolve(process.cwd(), 'locales');

  if (!existsSync(localesDir)) {
    return files;
  }

  const dirs = readdirSync(localesDir, { withFileTypes: true });

  for (const dir of dirs) {
    if (dir.isDirectory()) {
      const agentDir = resolve(localesDir, dir.name);
      const agentFiles = readdirSync(agentDir).filter(
        (file) => file.endsWith('.json') && !file.endsWith('index.json'),
      );

      for (const file of agentFiles) {
        files.push(resolve(agentDir, file));
      }
    }
  }

  return files;
}

/**
 * 将绝对路径转换为可点击的相对路径格式
 * @param filePath - 绝对文件路径
 * @returns 相对路径格式，便于在终端中点击打开
 */
function formatClickablePath(filePath: string): string {
  return filePath.replace(process.cwd() + '/', './');
}

/**
 * 验证所有翻译文件的语言
 * @param shouldDelete - 是否删除验证失败的文件
 * @param shouldFix - 是否修复部分匹配的文件
 * @param targetFile - 指定验证的文件路径
 */
async function validateAllLanguages(
  shouldDelete = false,
  shouldFix = false,
  targetFile?: string,
): Promise<void> {
  Logger.split('⚡ 开始验证所有翻译文件的语言');

  // 获取所有翻译文件
  const files = getAllTranslationFiles(targetFile);

  Logger.info(`找到翻译文件 ${files.length}`);

  if (files.length === 0) {
    Logger.warn('没有找到翻译文件');
    return;
  }

  const stats: ValidationStats = {
    total: files.length,
    passed: 0,
    failed: 0,
    ignored: 0,
    lowConfidence: 0,
    fixed: 0,
  };

  const failedFiles: string[] = [];
  const fixableFiles: LanguageValidationResult[] = [];
  const detailedResults: LanguageValidationResult[] = [];

  // 并发验证所有文件
  await pMap(
    files,
    async (file) => {
      const result = await validateTranslationLanguage(file);
      detailedResults.push(result);

      // 生成可点击的文件路径 (相对路径格式，VSCode 终端可识别)
      const clickablePath = formatClickablePath(file);

      // 检查是否被忽略
      if (result.expectedLanguage === 'ignored') {
        stats.ignored++;
        return result;
      }

      // 检查是否可以修复
      if (result.fixable) {
        fixableFiles.push(result);
      }

      if (!result.valid) {
        stats.failed++;
        failedFiles.push(file);

        // 构建问题摘要
        const issuesSummary =
          result.issues && result.issues.length > 0 ? ` (${result.issues.length} 个字段问题)` : '';

        // 如果可以修复，显示不同的提示
        if (result.fixable) {
          Logger.warn(
            `⚠️  ${clickablePath} - 期望 ${result.expectedLanguage}, 检测到 ${result.detectedLanguage} (${result.confidence.toFixed(3)})${issuesSummary} [可修复]`,
          );
        } else {
          Logger.error(
            `❌ ${clickablePath} - 期望 ${result.expectedLanguage}, 检测到 ${result.detectedLanguage} (${result.confidence.toFixed(3)})${issuesSummary}`,
          );
        }
      } else {
        stats.passed++;

        // 检查是否有字段级问题需要修复
        if (result.fixable && result.issues && result.issues.length > 0) {
          Logger.warn(`⚠️  ${clickablePath} - ${result.issues.length} 个字段语言问题 [可修复]`);
        }
        // 低置信度警告 (只对很低置信度的警告)
        else if (result.confidence < 0.4 && result.confidence >= 0.2) {
          stats.lowConfidence++;
          Logger.warn(`⚠️  ${clickablePath} - 置信度很低 (${result.confidence.toFixed(3)})`);
        }
        // 正常通过的文件（只在较少文件时显示）
        else if (files.length <= 20) {
          Logger.info(`✅ ${clickablePath} - 通过验证 (${result.confidence.toFixed(3)})`);
        }
      }

      return result;
    },
    { concurrency: 10 },
  );

  // 如果需要修复，处理可修复的文件
  if (shouldFix && fixableFiles.length > 0) {
    Logger.split('🔧 开始修复语言不匹配的文件');
    Logger.info(`发现 ${fixableFiles.length} 个文件需要修复`);

    for (const result of fixableFiles) {
      const clickablePath = formatClickablePath(result.filePath);
      Logger.info(`修复 ${clickablePath}`);

      let fixed = false;

      // 判断使用哪种修复方式
      const shouldUseFallback =
        !result.valid && // 验证失败
        (!result.detectedLanguage || // 无法检测语言
          result.detectedLanguage !== result.expectedLanguage || // 语言不匹配
          result.confidence < 0.4); // 置信度很低

      if (shouldUseFallback) {
        // 使用 en-US 兜底修复整个文件
        fixed = await fixLanguageWithFallback(result.filePath);
      } else if (result.issues && result.issues.length > 0) {
        // 有具体字段问题，使用字段级修复
        fixed = await fixLanguageIssues(result.filePath, result.issues);
      } else {
        // 兜底情况：其他可修复问题也使用兜底修复
        fixed = await fixLanguageWithFallback(result.filePath);
      }

      if (fixed) {
        stats.fixed++;
      }
    }

    Logger.success(`修复完成，共修复 ${stats.fixed} 个文件`);
  }

  // 如果需要删除，删除验证失败的文件
  if (shouldDelete && failedFiles.length > 0) {
    Logger.split('🗑️  开始删除验证失败的文件');
    Logger.warn(`将删除 ${failedFiles.length} 个验证失败的文件`);

    let deletedCount = 0;
    for (const file of failedFiles) {
      try {
        rmSync(file);
        const clickablePath = formatClickablePath(file);
        Logger.info(`已删除: ${clickablePath}`);
        deletedCount++;
      } catch (error) {
        const clickablePath = formatClickablePath(file);
        Logger.error(`删除失败: ${clickablePath} - ${error}`);
      }
    }

    Logger.warn(`删除完成，共删除 ${deletedCount} 个文件`);
  }

  // 显示汇总统计
  Logger.split('📊 验证汇总统计');
  Logger.info(`总文件数: ${stats.total}`);

  // 计算实际验证的文件数（排除忽略的文件）
  const actualTotal = stats.total - stats.ignored;
  const successRate = actualTotal > 0 ? ((stats.passed / actualTotal) * 100).toFixed(1) : '100.0';

  Logger.info(`实际验证: ${actualTotal} 个文件`);
  Logger.info(`成功率: ${successRate}%`);
  Logger.info(`验证通过: ${stats.passed}`);

  if (stats.ignored > 0) {
    Logger.info(`已忽略: ${stats.ignored}`);
  }

  if (stats.failed > 0) {
    Logger.error(`验证失败: ${stats.failed}`);
  }

  if (stats.lowConfidence > 0) {
    Logger.warn(`低置信度: ${stats.lowConfidence}`);
  }

  if (fixableFiles.length > 0 && !shouldFix) {
    Logger.warn(`可修复问题: ${fixableFiles.length} 个文件`);
    Logger.info('使用 --fix 参数来修复这些问题');
  }

  if (shouldFix && stats.fixed > 0) {
    Logger.success(`已修复: ${stats.fixed} 个文件`);
  }

  if (shouldDelete && failedFiles.length > 0) {
    Logger.warn(`已删除: ${failedFiles.length} 个文件`);
  }

  if (stats.failed === 0) {
    Logger.success(`✅ 验证完成，所有文件通过验证`);
  } else {
    Logger.error(`❌ 验证完成，${stats.failed} 个文件失败`);

    if (!shouldDelete) {
      Logger.info('使用 --delete 参数来删除验证失败的文件');
    }
  }
}

// 解析命令行参数
const args = process.argv.slice(2);
const shouldDelete = args.includes('--delete');
const shouldFix = args.includes('--fix');
const targetFile = args.find((arg) => !arg.startsWith('--'));

// 运行验证 - 使用顶级await
try {
  await validateAllLanguages(shouldDelete, shouldFix, targetFile);
} catch (error) {
  Logger.error(`验证过程中发生错误: ${error}`);
  process.exit(1);
}
