import { consola } from 'consola';
import { colors } from 'consola/utils';

/**
 * 统一日志工具类
 * 提供结构化的日志功能和美化的输出
 */
export const Logger = {
  /**
   * 调试日志
   * @param message 调试信息
   * @param data 调试数据
   */
  debug(message: string, data?: any) {
    if (data !== undefined) {
      consola.debug(colors.magenta('🐛'), message, data);
    } else {
      consola.debug(colors.magenta('🐛'), message);
    }
  },

  /**
   * 错误日志
   * @param message 错误信息
   * @param error 错误对象或详情
   */
  error(message: string, error?: any) {
    if (error) {
      if (error instanceof Error) {
        consola.error(colors.red('✗'), message, colors.gray(error.message));
      } else {
        consola.error(colors.red('✗'), message, colors.gray(String(error)));
      }
    } else {
      consola.error(colors.red('✗'), message);
    }
  },

  /**
   * 文件操作日志
   * @param operation 操作类型
   * @param filePath 文件路径
   * @param status 操作状态
   */
  file(
    operation: 'read' | 'write' | 'delete' | 'create',
    filePath: string,
    status: 'start' | 'success' | 'error' = 'success',
  ) {
    const icons = {
      create: '📄',
      delete: '🗑️',
      read: '📖',
      write: '📝',
    };

    const statusColors = {
      error: colors.red,
      start: colors.blue,
      success: colors.green,
    };

    const message = `${icons[operation]} ${operation.charAt(0).toUpperCase() + operation.slice(1)} file`;
    const coloredPath = colors.gray(filePath);

    switch (status) {
      case 'start': {
        consola.start(statusColors[status](message), coloredPath);
        break;
      }
      case 'success': {
        consola.success(statusColors[status](message), coloredPath);
        break;
      }
      case 'error': {
        consola.error(statusColors[status](message), coloredPath);
        break;
      }
    }
  },

  /**
   * 信息日志
   * @param message 信息内容
   * @param data 相关数据
   */
  info(message: string, data?: any) {
    if (data !== undefined) {
      consola.info(colors.cyan('ℹ'), message, colors.gray(String(data)));
    } else {
      consola.info(colors.cyan('ℹ'), message);
    }
  },

  /**
   * 进度日志
   * @param current 当前进度
   * @param total 总数
   * @param action 操作名称
   */
  progress(current: number, total: number, action: string) {
    const percentage = Math.round((current / total) * 100);
    const progressBar =
      '█'.repeat(Math.floor(percentage / 5)) + '░'.repeat(20 - Math.floor(percentage / 5));
    consola.info(
      colors.cyan(`[${progressBar}]`),
      colors.yellow(`${percentage}%`),
      colors.gray(`(${current}/${total})`),
      action,
    );
  },

  /**
   * 打印分隔线
   * @param title 分隔线标题
   * @param char 分隔符字符
   */
  split(title: string, char: string = '=') {
    consola.log('');
    const line = char.repeat(Math.max(0, 50 - title.length));
    consola.log(colors.gray(`${line} ${title} ${line}`));
  },

  /**
   * 开始操作日志
   * @param action 操作名称
   * @param target 目标对象
   * @param details 详细信息
   */
  start(action: string, target?: string, details?: string) {
    if (target && details) {
      consola.start(colors.blue('⚡'), action, colors.yellow(target), colors.gray(`(${details})`));
    } else if (target) {
      consola.start(colors.blue('⚡'), action, colors.yellow(target));
    } else {
      consola.start(colors.blue('⚡'), action);
    }
  },

  /**
   * 统计信息日志
   * @param stats 统计数据
   */
  stats(stats: Record<string, number | string>) {
    consola.log('');
    consola.log(colors.cyan('📊 统计信息:'));
    Object.entries(stats).forEach(([key, value]) => {
      const coloredValue =
        typeof value === 'number' ? colors.yellow(String(value)) : colors.gray(String(value));
      consola.log(`  ${colors.gray('•')} ${key}: ${coloredValue}`);
    });
  },

  /**
   * 成功操作日志
   * @param action 操作名称
   * @param target 目标对象
   * @param details 详细信息
   */
  success(action: string, target?: string, details?: string) {
    if (target && details) {
      consola.success(
        colors.green('✓'),
        action,
        colors.yellow(target),
        colors.gray(`(${details})`),
      );
    } else if (target) {
      consola.success(colors.green('✓'), action, colors.yellow(target));
    } else {
      consola.success(colors.green('✓'), action);
    }
  },

  /**
   * 翻译过程日志
   * @param id Agent ID
   * @param fromLang 源语言
   * @param toLang 目标语言
   * @param status 状态
   */
  translate(
    id: string,
    fromLang: string,
    toLang: string,
    status: 'start' | 'success' | 'skip' | 'error' = 'success',
  ) {
    const statusIcons = {
      error: '❌',
      skip: '⏭️',
      start: '🔄',
      success: '✅',
    };

    const message = `${statusIcons[status]} ${colors.yellow(id)} ${colors.gray('翻译')} ${colors.cyan(`[${fromLang}]`)} → ${colors.cyan(`[${toLang}]`)}`;

    switch (status) {
      case 'start': {
        consola.start(message);
        break;
      }
      case 'success': {
        consola.success(message);
        break;
      }
      case 'skip': {
        consola.info(message);
        break;
      }
      case 'error': {
        consola.error(message);
        break;
      }
    }
  },

  /**
   * 警告日志
   * @param message 警告信息
   * @param reason 警告原因
   */
  warn(message: string, reason?: string) {
    if (reason) {
      consola.warn(colors.yellow('⚠'), message, colors.gray(`- ${reason}`));
    } else {
      consola.warn(colors.yellow('⚠'), message);
    }
  },
};

/**
 * 导出便捷的日志函数
 */
export const { split, start, success, info, warn, error, debug, file, stats, translate, progress } =
  Logger;
