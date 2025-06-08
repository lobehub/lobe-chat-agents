import { readmeSplit } from '../core/constants';
import { Logger } from './logger';

/**
 * 打印分隔线
 * @param name 分隔线标题
 * @deprecated 使用 Logger.split() 代替
 */
export const split = (name: string) => {
  Logger.split(name);
};

/**
 * 查找重复项
 * @param arr 字符串数组
 * @returns 重复出现 3 次以上的项目
 */
export const findDuplicates = (arr: string[]): string[] => {
  const duplicates: { [key: string]: number } = {};

  // 统计每个项目出现的次数
  for (const item of arr) {
    if (duplicates[item]) {
      duplicates[item]++;
    } else {
      duplicates[item] = 1;
    }
  }

  // 挑出重复出现 3 次以上的项目
  const COUNT = 3;
  const result = Object.keys(duplicates).filter((item) => duplicates[item] >= COUNT);

  // 按重复次数从多到少排序
  result.sort((a, b) => duplicates[b] - duplicates[a]);

  return result;
};

/**
 * 更新 README 中的 Awesome 部分
 * @param md 原始 Markdown 内容
 * @param prompts 新的 prompts 内容
 * @returns 更新后的 Markdown
 */
export const updateAwesomeReadme = (md: string, prompts: string): string => {
  const mds = md.split(readmeSplit);
  mds[1] = [' ', prompts, ' '].join('\n\n');
  return mds.join(readmeSplit);
};

/**
 * 检查是否为标题行
 * @param line 文本行
 * @returns 是否为标题行
 */
export const checkHeader = (line: string): boolean => {
  const header = [
    '### systemRole',
    '### identifier',
    '### avatar',
    '### title',
    '### description',
    '### tags',
    '### locale',
  ];

  let check = false;
  for (const item of header) {
    if (line.startsWith(item)) check = true;
  }
  return check;
};

/**
 * 将语言代码从完整格式转换为 ISO 639-1 代码
 * @param locale 完整的语言代码 (如 'zh-CN', 'en-US')
 * @returns ISO 639-1 代码 (如 'zh', 'en')
 */
export const convertToISO6391 = (locale: string): string => {
  const langCode = locale.split('-')[0].toLowerCase();

  // 特殊映射处理，按字母顺序排列
  const mapping: Record<string, string> = {
    af: 'af', // 南非荷兰语
    ar: 'ar', // 阿拉伯语
    az: 'az', // 阿塞拜疆语
    be: 'be', // 白俄罗斯语
    bg: 'bg', // 保加利亚语
    bn: 'bn', // 孟加拉语
    bs: 'bs', // 波斯尼亚语
    ca: 'ca', // 加泰罗尼亚语
    cs: 'cs', // 捷克语
    cy: 'cy', // 威尔士语
    da: 'da', // 丹麦语
    de: 'de', // 德语
    el: 'el', // 希腊语
    en: 'en', // 英语
    eo: 'eo', // 世界语
    es: 'es', // 西班牙语
    et: 'et', // 爱沙尼亚语
    eu: 'eu', // 巴斯克语
    fa: 'fa', // 波斯语
    fi: 'fi', // 芬兰语
    fr: 'fr', // 法语
    ga: 'ga', // 爱尔兰语
    gl: 'gl', // 加利西亚语
    gu: 'gu', // 古吉拉特语
    he: 'he', // 希伯来语
    hi: 'hi', // 印地语
    hr: 'hr', // 克罗地亚语
    ht: 'ht', // 海地克里奥尔语
    hu: 'hu', // 匈牙利语
    hy: 'hy', // 亚美尼亚语
    id: 'id', // 印尼语
    is: 'is', // 冰岛语
    it: 'it', // 意大利语
    ja: 'ja', // 日语
    ka: 'ka', // 格鲁吉亚语
    kk: 'kk', // 哈萨克语
    km: 'km', // 高棉语
    kn: 'kn', // 卡纳达语
    ko: 'ko', // 韩语
    ku: 'ku', // 库尔德语
    ky: 'ky', // 吉尔吉斯语
    la: 'la', // 拉丁语
    lb: 'lb', // 卢森堡语
    lo: 'lo', // 老挝语
    lt: 'lt', // 立陶宛语
    lv: 'lv', // 拉脱维亚语
    mk: 'mk', // 马其顿语
    ml: 'ml', // 马拉雅拉姆语
    mn: 'mn', // 蒙古语
    mr: 'mr', // 马拉地语
    ms: 'ms', // 马来语
    mt: 'mt', // 马耳他语
    my: 'my', // 缅甸语
    ne: 'ne', // 尼泊尔语
    nl: 'nl', // 荷兰语
    no: 'no', // 挪威语
    pa: 'pa', // 旁遮普语
    pl: 'pl', // 波兰语
    pt: 'pt', // 葡萄牙语
    ro: 'ro', // 罗马尼亚语
    ru: 'ru', // 俄语
    si: 'si', // 僧伽罗语
    sk: 'sk', // 斯洛伐克语
    sl: 'sl', // 斯洛文尼亚语
    so: 'so', // 索马里语
    sq: 'sq', // 阿尔巴尼亚语
    sr: 'sr', // 塞尔维亚语
    sv: 'sv', // 瑞典语
    sw: 'sw', // 斯瓦希里语
    ta: 'ta', // 泰米尔语
    te: 'te', // 泰卢固语
    th: 'th', // 泰语
    tl: 'tl', // 他加禄语
    tr: 'tr', // 土耳其语
    uk: 'uk', // 乌克兰语
    ur: 'ur', // 乌尔都语
    uz: 'uz', // 乌兹别克语
    vi: 'vi', // 越南语
    yi: 'yi', // 意第绪语
    zh: 'zh', // 中文
  };

  return mapping[langCode] || langCode;
};
