import { readJSONSync } from 'fs-extra';
import { get, merge, set } from 'lodash-es';
import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import pMap from 'p-map';

import { agents, agentsDir, config, localesDir } from '../core/constants';
import { AgentParser } from '../parsers/agent-parser';
import { generateAgentContentAndCategory } from '../processors/category-processor';
import { translateJSON } from '../processors/i18n-processor';
import { checkJSON, deleteEmptyJsonFiles, getLocaleAgentFileName, writeJSON } from '../utils/file';
import { Logger } from '../utils/logger';
import { formatAgentJSON, formatPrompt } from '../validators/agent-validator';
import { validateTranslationLanguage } from '../validators/language-validator';

/**
 * Agent 格式化器类
 * 负责格式化 Agent 配置文件和生成多语言版本
 */
class AgentFormatter {
  private ignoreFilePath = '.i18nignore';
  private ignoredFiles: Set<string> = new Set();

  constructor() {
    this.loadIgnoreList();
  }

  /**
   * 加载忽略文件列表
   */
  private loadIgnoreList = () => {
    try {
      if (existsSync(this.ignoreFilePath)) {
        const content = readFileSync(this.ignoreFilePath, 'utf8');
        const lines = content
          .split('\n')
          .map((line) => line.trim())
          .filter((line) => line && !line.startsWith('#'));

        this.ignoredFiles = new Set(lines);
        if (this.ignoredFiles.size > 0) {
          Logger.info(`已加载忽略文件列表`, `${this.ignoredFiles.size} 个文件`);
        }
      }
    } catch (error) {
      Logger.warn('加载忽略文件列表失败', error);
    }
  };

  /**
   * 添加文件到忽略列表
   * @param filePath 要忽略的文件路径
   */
  private addToIgnoreList = (filePath: string) => {
    if (this.ignoredFiles.has(filePath)) {
      return; // 已存在，不重复添加
    }

    this.ignoredFiles.add(filePath);

    try {
      let content = '';
      if (existsSync(this.ignoreFilePath)) {
        content = readFileSync(this.ignoreFilePath, 'utf8');
      } else {
        content = '# 语言验证忽略文件\n# 此文件中列出的路径将跳过语言验证\n\n';
      }

      // 添加新的忽略文件，确保末尾有换行符
      if (!content.endsWith('\n')) {
        content += '\n';
      }
      content += `${filePath}\n`;

      writeFileSync(this.ignoreFilePath, content, 'utf8');
      Logger.warn(`已添加到忽略列表`, filePath);
    } catch (error) {
      Logger.error('添加到忽略列表失败', error);
    }
  };

  /**
   * 检查文件是否在忽略列表中
   * @param filePath 文件路径
   * @returns 是否被忽略
   */
  private isIgnored = (filePath: string): boolean => {
    return this.ignoredFiles.has(filePath);
  };

  /**
   * 从翻译文件中提取可检测的文本内容
   * @param data 翻译数据对象
   * @returns 可检测的文本内容字符串
   */
  private extractDetectableText = (data: any): string => {
    const texts: string[] = [];

    // 提取各种文本字段
    if (data.meta?.title) texts.push(data.meta.title);
    if (data.meta?.description) texts.push(data.meta.description);
    if (data.config?.systemRole) texts.push(data.config.systemRole);
    if (data.config?.openingMessage) texts.push(data.config.openingMessage);

    // 提取开启问题数组
    if (data.config?.openingQuestions && Array.isArray(data.config.openingQuestions)) {
      texts.push(...data.config.openingQuestions);
    }

    // 提取标签（如果是字符串数组）
    if (data.meta?.tags && Array.isArray(data.meta.tags)) {
      texts.push(...data.meta.tags.filter((tag: any) => typeof tag === 'string'));
    }

    // 提取示例内容
    if (data.examples && Array.isArray(data.examples)) {
      data.examples.forEach((example: any) => {
        if (example.content) texts.push(example.content);
      });
    }

    // 提取摘要
    if (data.summary) texts.push(data.summary);

    return texts.join(' ').trim();
  };

  /**
   * 比较源数据和已有翻译数据，找出需要翻译的新增字段
   * @param sourceData 源数据
   * @param existingData 已有翻译数据
   * @returns 需要翻译的数据和是否有更新
   */
  private getIncrementalData = (sourceData: any, existingData: any) => {
    const needsTranslation = {};
    let hasUpdates = false;

    for (const key of config.selectors) {
      const sourceValue = get(sourceData, key);
      const existingValue = get(existingData, key);

      // 如果源数据中有该字段，但翻译数据中没有，则需要翻译
      if (sourceValue && existingValue === undefined) {
        set(needsTranslation, key, sourceValue);
        hasUpdates = true;
      }
    }

    return { hasUpdates, needsTranslation };
  };

  /**
   * 格式化单个 JSON 文件
   * @param fileName 文件名
   */
  formatJSON = async (fileName: string) => {
    let { content: agent, id, locale: defaultLocale } = AgentParser.parseFile(fileName);

    // 格式化 Agent JSON
    agent = await formatAgentJSON(agent, defaultLocale);

    // 检查是否需要生成分类或内容
    const needsCategory = !agent.meta.category;
    const needsContentGeneration =
      !agent.summary ||
      !agent.examples ||
      !agent.config.openingMessage ||
      !agent.config.openingQuestions;

    // 如果需要生成分类或内容，使用合并的函数一次性生成
    if (needsCategory || needsContentGeneration) {
      agent = await generateAgentContentAndCategory(agent);
      Logger.success('内容生成和分类完成', id);
    }

    // 处理创建时间字段
    if (!agent.createdAt) {
      // @ts-ignore
      // TODO: 移除 createAt 字段
      agent.createdAt = agent.createAt;
    }

    // 写入格式化后的文件
    writeJSON(resolve(agentsDir, fileName), agent);

    // 国际化工作流
    let rawData = {};

    // 提取需要翻译的字段
    for (const key of config.selectors) {
      const rawValue = get(agent, key);
      if (rawValue) set(rawData, key, rawValue);
    }

    if (Object.keys(rawData).length > 0) {
      const directoryPath = resolve(localesDir, id);

      // 创建本地化目录
      if (!existsSync(directoryPath)) {
        mkdirSync(directoryPath, { recursive: true });
      }

      // 并行生成多语言版本
      await pMap(
        config.outputLocales,
        async (locale: string) => {
          const localeFileName = getLocaleAgentFileName(id, locale);
          const localeFilePath = resolve(localesDir, localeFileName);
          const relativeFilePath = `locales/${localeFileName}`;

          // 检查文件是否在忽略列表中
          if (this.isIgnored(relativeFilePath)) {
            Logger.info('跳过被忽略的文件', relativeFilePath);
            return;
          }

          // 检查是否需要增量翻译
          let dataToTranslate = rawData;
          let existingTranslation = {};
          let isIncremental = false;

          if (existsSync(localeFilePath)) {
            try {
              existingTranslation = readJSONSync(localeFilePath);
              const { needsTranslation, hasUpdates } = this.getIncrementalData(
                rawData,
                existingTranslation,
              );

              if (hasUpdates) {
                dataToTranslate = needsTranslation;
                isIncremental = true;
                Logger.info(`检测到新增字段`, `${id} (${locale})`);
              } else {
                return;
              }
            } catch {
              Logger.warn(`读取已有翻译文件失败，执行完整翻译`, `${id} (${locale})`);
            }
          }

          Logger.translate(id, defaultLocale, locale, 'start');

          const translateResult = await translateJSON(
            localeFileName,
            dataToTranslate,
            locale,
            defaultLocale,
          );

          if (translateResult) {
            let finalResult = translateResult;

            // 如果是增量翻译，合并已有翻译
            if (isIncremental) {
              finalResult = merge({}, existingTranslation, translateResult);
              Logger.info(`合并增量翻译完成`, `${id} (${locale})`);
            }

            // 格式化翻译后的系统角色
            if (finalResult.config?.systemRole) {
              finalResult.config.systemRole = await formatPrompt(
                finalResult.config.systemRole,
                locale,
              );
            }

            if (locale === defaultLocale) return;

            // 验证翻译语言是否匹配
            let validationResult = await validateTranslationLanguage(localeFilePath);

            if (!validationResult.valid) {
              Logger.warn(
                '语言验证失败，尝试重新翻译',
                `${localeFileName}: 期望 ${validationResult.expectedLanguage}, 检测到 ${validationResult.detectedLanguage}`,
              );

              // 重新翻译
              Logger.translate(id, defaultLocale, locale, 'start');
              const retryTranslateResult = await translateJSON(
                localeFileName,
                dataToTranslate,
                locale,
                defaultLocale,
              );

              if (retryTranslateResult) {
                let retryFinalResult = retryTranslateResult;

                // 如果是增量翻译，合并已有翻译
                if (isIncremental) {
                  retryFinalResult = merge({}, existingTranslation, retryTranslateResult);
                }

                // 格式化翻译后的系统角色
                if (retryFinalResult.config?.systemRole) {
                  retryFinalResult.config.systemRole = await formatPrompt(
                    retryFinalResult.config.systemRole,
                    locale,
                  );
                }

                // 再次验证
                writeJSON(localeFilePath, retryFinalResult);
                const retryValidationResult = await validateTranslationLanguage(localeFilePath);

                if (retryValidationResult.valid) {
                  Logger.success(
                    '重新翻译验证通过',
                    `${localeFileName}: 期望 ${retryValidationResult.expectedLanguage}, 检测到 ${retryValidationResult.detectedLanguage}`,
                  );
                  Logger.translate(id, defaultLocale, locale, 'success');
                } else {
                  // 两次验证都失败，添加到忽略列表并跳过翻译
                  Logger.error(
                    '重新翻译仍验证失败，添加到忽略列表',
                    `${localeFileName}: 期望 ${retryValidationResult.expectedLanguage}, 检测到 ${retryValidationResult.detectedLanguage}`,
                  );
                  this.addToIgnoreList(relativeFilePath);
                  Logger.translate(id, defaultLocale, locale, 'error');
                }
              } else {
                // 重新翻译失败，添加到忽略列表并跳过翻译
                Logger.error('重新翻译失败，添加到忽略列表', localeFileName);
                this.addToIgnoreList(relativeFilePath);
                Logger.translate(id, defaultLocale, locale, 'error');
              }
            } else {
              Logger.success(
                '语言验证通过',
                `${localeFileName}: 期望 ${validationResult.expectedLanguage}, 检测到 ${validationResult.detectedLanguage}`,
              );
              writeJSON(localeFilePath, finalResult);
              Logger.translate(id, defaultLocale, locale, 'success');
            }
          } else {
            // 翻译失败，添加到忽略列表
            Logger.error('翻译失败，添加到忽略列表', localeFileName);
            this.addToIgnoreList(relativeFilePath);
            Logger.translate(id, defaultLocale, locale, 'error');
          }
        },
        { concurrency: config.concurrency }, // 使用配置中的并发数控制
      );
    }
  };

  /**
   * 执行格式化流程
   */
  run = async () => {
    Logger.start('开始格式化 JSON 内容');

    // 清理空的 JSON 文件
    deleteEmptyJsonFiles(localesDir);
    Logger.info('清理空的 JSON 文件完成');

    // 并行处理所有 Agent 文件
    const validFiles = agents.filter((file) => checkJSON(file));
    Logger.info('待处理文件数量', validFiles.length);

    await pMap(
      validFiles,
      async (file, index) => {
        Logger.progress(index + 1, validFiles.length, `格式化 ${file.name}`);
        await this.formatJSON(file.name);
      },
      { concurrency: config.concurrency }, // 使用配置中的并发数控制
    );

    Logger.success('格式化完成', '', `处理了 ${validFiles.length} 个文件`);
  };
}

/**
 * 格式化 Agent 配置文件
 */
export const formatAgents = async () => {
  Logger.split('格式化 JSON 内容');
  const startTime = Date.now();

  await new AgentFormatter().run();

  const duration = Date.now() - startTime;
  Logger.success('格式化流程完成', '', `总耗时 ${duration}ms`);
};
