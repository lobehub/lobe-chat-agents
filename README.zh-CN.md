<div align="center"><a name="readme-top"></a>

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/robot.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/convenience-store.webp">

<h1>Lobe Chat 助手索引</h1>

[**提交您的助手 >>**][submit]

[Lobe Chat](https://github.com/lobehub/lobe-chat) 从该存储库访问 [`Agents Index`][website-url] 来为用户展示可用的 LobeChat 助手列表。

[English](./README.md) · **简体中文** · [**官方网站**][website-url]

<!-- SHIELD GROUP -->

[![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/lobehub/lobe-chat-agents)
[![website][website-shield]][website-url]
[![][npm-release-shield]][npm-release-link]
[![][github-releasedate-shield]][github-releasedate-link]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]
[![][github-license-shield]][github-license-link]

[![](https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/268670869-f1ffbf66-42b6-42cf-a937-9ce1f8328514.png)](https://github.com/lobehub/lobe-chat)

</div>

<details>
<summary><kbd>目录</kbd></summary>

- [🚀 如何提交您的助手](#-如何提交您的助手)
  - [提交步骤](#提交步骤)
- [🕶 Awesome Prompts](#-awesome-prompts)
- [🛳 自主托管](#-自主托管)
  - [部署到 Vercel](#部署到-vercel)
- [⌨️ 本地开发](#️-本地开发)
- [🤝 参与贡献](#-参与贡献)
- [🔗 Links](#-links)

####

</details>

## 🚀 如何提交您的助手

你可以直接通过以下链接提交 [**提交您的助手**][submit]，或者按以下步骤进行提交

### 提交步骤

如果您想将助手添加到索引中，请使用 `agent-template.json` 或 `agent-template-full.json` 在 `plugins` 目录中创建一个条目，编写简短的描述并适当标记，然后创建一个拉取请求。

1. <kbd>Fork</kbd> 这个存储库
2. 复制 `agent-template.json` 或 `agent-template-full.json`
3. 填写副本并重命名
4. 将其移动到 `agents` 目录中
5. 提交一个拉取请求并等待审核

> \[!IMPORTANT]\
> `createAt` 日期将在合并后自动填充，`agent-template-full.json` 中提供更加丰富的参数配置，请按实际情况选用

> \[!NOTE]
>
> - 并非所有的助手都会被接受，我们将审核助手并进行评估
> - 即使您不是作者，也可以提交助手，但最好是由作者自己提交
> - 如果您希望删除您的助手，或者认为描述不正确，请提交问题或拉取请求

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🕶 Awesome Prompts

<!-- AWESOME PROMPTS -->

### [美食评论员🍟](https://lobechat.com/discover/assistant/food-reviewer)

<sup>By **[@renhai-lab](https://github.com/renhai-lab)** on **2025-06-17**</sup>

美食评价专家

`美食` `评价` `写作`

---

### [学术写作助手](https://lobechat.com/discover/assistant/academic-writing-assistant)

<sup>By **[@swarfte](https://github.com/swarfte)** on **2025-06-17**</sup>

专业的学术研究论文写作和正式文档编写专家

`学术写作` `研究` `正式风格`

---

### [Minecraft 资深开发者](https://lobechat.com/discover/assistant/java-development)

<sup>By **[@iamyuuk](https://github.com/iamyuuk)** on **2025-06-17**</sup>

擅长高级 Java 开发及 Minecraft 开发

`开发` `编程` `minecraft` `java`

---

### [Mestre Python VSCode](https://lobechat.com/discover/assistant/python-vscode)

<sup>By **[@fan2taap](https://github.com/fan2taap)** on **2025-06-17**</sup>

Python 和 VS Code 专家，提供实用高效的支持

`python` `vs-code` `编程` `AI助手` `开发`

---

### [学术论文阅读导师](https://lobechat.com/discover/assistant/paper-understanding)

<sup>By **[@AdijeShen](https://github.com/AdijeShen)** on **2025-05-09**</sup>

擅长将复杂学术论文通俗易懂讲解

`学术知道` `论文解析`

---

### [营养顾问](https://lobechat.com/discover/assistant/nutritionist)

<sup>By **[@egornomic](https://github.com/egornomic)** on **2025-04-15**</sup>

专注于提供食品项目的详细营养信息。

`营养` `食品` `健康` `信息`

---

### [改写为翻译腔](https://lobechat.com/discover/assistant/rewrite-in-a-translation-tone)

<sup>By **[@q2019715](https://github.com/q2019715)** on **2025-03-13**</sup>

将一段话重写为翻译腔

`翻译腔` `创意写作` `语言风格` `文段重写` `文化`

---

### [学术论文综述专家](https://lobechat.com/discover/assistant/academic-paper-overview)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2025-03-11**</sup>

擅长高质量文献检索与分析的学术研究助手

`学术研究` `文献检索` `数据分析` `信息提取` `咨询`

---

### [菜谱小助手](https://lobechat.com/discover/assistant/recipe-assistant-cn)

<sup>By **[@He-Xun](https://github.com/He-Xun)** on **2025-03-07**</sup>

擅长分析和补充菜谱信息，生成详细文档

`菜谱` `烹饪` `食材管理` `生活`

---

### [前海政策助手](https://lobechat.com/discover/assistant/web-development-2025)

<sup>By **[@lindongjie1992](https://github.com/lindongjie1992)** on **2025-02-26**</sup>

你是精通深圳前海各种企业优惠政策

`深圳` `前海政策` `友好`

---

### [YouTube 摘要专家](https://lobechat.com/discover/assistant/youtube-summarizer-pro)

<sup>By **[@shinishiho](https://github.com/shinishiho)** on **2025-02-24**</sup>

熟练的 YouTube 摘要和分析师。

`you-tube` `content-analysis` `video-summarization`

---

### [绿植管家：小智绿叔](https://lobechat.com/discover/assistant/xiao-zhi-greenie)

<sup>By **[@WeR-Best](https://github.com/WeR-Best)** on **2025-02-23**</sup>

园艺专家，擅长植物养护与环境优化

`植物养护` `园艺` `农业` `花卉`

---

### [SmartTrip](https://lobechat.com/discover/assistant/xiao-zhi-travel-go)

<sup>By **[@WeR-Best](https://github.com/WeR-Best)** on **2025-02-22**</sup>

Travel planning expert offering intelligent itineraries, food navigation, cultural explanations, and emergency guides

`Travel Guide` `Itinerary Planning` `Food Recommendations` `Cultural Explanation` `Emergency Guide`

---

### [小智 IT 架构安全运维专家](https://lobechat.com/discover/assistant/xiao-zhi-sys-sec-expert)

<sup>By **[@WeR-Best](https://github.com/WeR-Best)** on **2025-02-22**</sup>

企业系统架构与安全专家：精通架构设计、Linux、网络安全及合规

`系统架构` `网络安全` `linux`

---

### [小智法语翻译助手「法式吐槽版・让保罗」](https://lobechat.com/discover/assistant/xiao-zhi-french-translation-jean-paul)

<sup>By **[@WeR-Best](https://github.com/WeR-Best)** on **2025-02-19**</sup>

精通法语文化，提供翻译、避坑、急救等服务

`翻译` `ai助手` `法国文化`

---

### [Cron 表达式助手](https://lobechat.com/discover/assistant/crontab-generate)

<sup>By **[@edgesider](https://github.com/edgesider)** on **2025-02-17**</sup>

Crontab 表达式生成

`crontab` `时间表达` `触发时间` `生成器` `技术辅助`

---

### [小智法语翻译助手](https://lobechat.com/discover/assistant/xiao-zhi-french-translation-asst-v-1)

<sup>By **[@WeR-Best](https://github.com/WeR-Best)** on **2025-02-10**</sup>

友好、专业、富有同理心的法语翻译 AI 助手

`ai助手` `法语翻译` `跨文化交流` `创造力`

---

### [越狱模式](https://lobechat.com/discover/assistant/dan)

<sup>By **[@leng-yd](https://github.com/leng-yd)** on **2025-02-09**</sup>

去除道德限制的 AI 助手，不受约束，DeepSeek 适用（仅供学习，请遵守相关法律法规）

`网络安全` `生活` `dan`

---

### [编程开发助手](https://lobechat.com/discover/assistant/coder-assistant)

<sup>By **[@He-Xun](https://github.com/He-Xun)** on **2025-02-08**</sup>

善于开发、调试、修正代码相关问题

`编程` `开发` `调试`

---

### [Allinone](https://lobechat.com/discover/assistant/allinone-v-1)

<sup>By **[@AXuanCreator](https://github.com/AXuanCreator)** on **2025-02-06**</sup>

Innovation · Future · Excellence

`programming` `low cost` `concise answers`

---

### [命理研究员](https://lobechat.com/discover/assistant/fate-researcher)

<sup>By **[@Jack980506](https://github.com/Jack980506)** on **2025-02-06**</sup>

精通八字命

`命理学` `八字` `传统文化`

---

### [贴吧嘴臭老哥](https://lobechat.com/discover/assistant/tieba-zuichou-laoge)

<sup>By **[@east4ming](https://github.com/east4ming)** on **2025-02-06**</sup>

擅长角色扮演，嘴臭嘲讽

`角色扮演` `嘲讽` `情绪表达`

---

### [深度思考者](https://lobechat.com/discover/assistant/deep-thinker)

<sup>By **[@prolapser](https://github.com/prolapser)** on **2025-02-06**</sup>

深刻、类人思维与分析。

`思考` `推理` `反思` `思绪` `沉思`

---

### [语言魅力学习导师](https://lobechat.com/discover/assistant/bad-language-helper)

<sup>By **[@Guducat](https://github.com/Guducat)** on **2025-02-06**</sup>

擅长教学语言的魅力与花样回复

`语言学习` `对话示例`

---

### [投资小助手](https://lobechat.com/discover/assistant/graham-investmentassi)

<sup>By **[@farsightlin](https://github.com/farsightlin)** on **2025-02-06**</sup>

帮助用户计算估值所需的一些数据

`投资` `估值` `财务分析` `计算器`

---

### [蛇年拜年小助手](https://lobechat.com/discover/assistant/web-blessings-dsq)

<sup>By **[@Shen-Chris](https://github.com/Shen-Chris)** on **2025-02-04**</sup>

擅长创作有趣吉祥的蛇年拜年

`拜年祝福` `创作` `文化` `吉祥`

---

### [MidJourney 提示词](https://lobechat.com/discover/assistant/image-prompter)

<sup>By **[@Ajn289](https://github.com/Ajn289)** on **2025-02-04**</sup>

撰写出色的 MidJourney 提示词

`mid-journey` `prompt`

---

### [SAT 大师](https://lobechat.com/discover/assistant/sat-teaching)

<sup>By **[@iBz-04](https://github.com/iBz-04)** on **2025-02-04**</sup>

数字 SAT 辅导专家，助力 1300 + 高分

`sat` `aptitude-test`

---

### [Python 天才](https://lobechat.com/discover/assistant/python-genius)

<sup>By **[@novaspivack](https://github.com/novaspivack)** on **2025-02-04**</sup>

高级 Python 程序员

`代码` `python`

---

### [锐评师](https://lobechat.com/discover/assistant/ruipingshi)

<sup>By **[@Zippland](https://github.com/Zippland)** on **2025-02-04**</sup>

擅长犀利点评与深度剖析问题

`评论` `社会观点` `尖锐分析`

---

### [宇宙启示者](https://lobechat.com/discover/assistant/universal-god)

<sup>By **[@GowayLee](https://github.com/GowayLee)** on **2025-02-04**</sup>

跨时空的智慧神谕，洞悉生命本质

`角色设计` `ai角色` `元宇宙` `角色扮演` `智慧系统`

---

### [Summsi](https://lobechat.com/discover/assistant/summsi)

<sup>By **[@42lux](https://github.com/42lux)** on **2025-02-04**</sup>

文本分析、问题生成和详细回答的专家。

`analysis` `summarization` `questioning` `understanding` `learning`

---

### [SUNO 歌曲创作助手](https://lobechat.com/discover/assistant/suno-lyrics-assistant)

<sup>By **[@sqkkyzx](https://github.com/sqkkyzx)** on **2025-01-26**</sup>

能根据用户需求生成 SUNO 歌曲创作参数

`歌词创作` `音乐风格` `编曲` `参数设置`

---

### [Github Issue 嘴替](https://lobechat.com/discover/assistant/github-issue-helper)

<sup>By **[@AirboZH](https://github.com/AirboZH)** on **2025-01-24**</sup>

帮你提 issue

`开源` `技术支持` `问题解决`

---

### [推理助手](https://lobechat.com/discover/assistant/cheaper-reasoning)

<sup>By **[@davletsh1n](https://github.com/davletsh1n)** on **2025-01-24**</sup>

更聪明的模型更便宜

`reasoning` `assistant` `thought-process` `exploration` `persistence`

---

### [英语导师](https://lobechat.com/discover/assistant/mean-english-mentor)

<sup>By **[@GEORGE-Ta](https://github.com/GEORGE-Ta)** on **2025-01-24**</sup>

以高傲轻蔑态度辅导英语口语，擅长嘲讽式纠错。

`英语教学` `口语` `角色扮演` `教育` `嘲讽`

---

### [学术修订专家](https://lobechat.com/discover/assistant/academic-revision-specialist)

<sup>By **[@sunrisewestern](https://github.com/sunrisewestern)** on **2025-01-24**</sup>

擅长学术写作和论文修订

---

### [伟大的比格斯・迪克斯](https://lobechat.com/discover/assistant/all-knowing)

<sup>By **[@CGitwater](https://github.com/CGitwater)** on **2025-01-24**</sup>

全能强大的知识之神

`biggus` `diccus`

---

### [OCR 文档转录助手](https://lobechat.com/discover/assistant/ocr-markdown)

<sup>By **[@Liangpi000](https://github.com/Liangpi000)** on **2025-01-24**</sup>

擅长文件内容转录与 markdown 格式

`文档生成` `markdown` `格式化` `转录` `任务指导`

---

### [初学者导师](https://lobechat.com/discover/assistant/beginner-mentor)

<sup>By **[@Wulao0825](https://github.com/Wulao0825)** on **2025-01-24**</sup>

专注初学者知识服务，耐心细致解答疑问

`教育` `指导` `客户服务` `知识分享`

---

### [Multilingual Translator](https://lobechat.com/discover/assistant/multi-language-2-chinese-or-reverse)

<sup>By **[@Moeblack](https://github.com/Moeblack)** on **2025-01-24**</sup>

Multilingual translation, Chinese to English and Japanese, foreign languages to Chinese

`Translation` `Multilingual` `Language Processing`

---

### [面试官助手](https://lobechat.com/discover/assistant/front-end-interviewer)

<sup>By **[@AquaHydro](https://github.com/AquaHydro)** on **2025-01-24**</sup>

擅长前端工程师面试官角色与简历

`面试官` `招聘`

---

### [觉悟之师](https://lobechat.com/discover/assistant/juwudashi)

<sup>By **[@dappweb](https://github.com/dappweb)** on **2025-01-24**</sup>

擅长传播佛法与智慧，提供内心指导

`佛教` `智者` `慈悲` `哲学`

---

### [PPT 制作达人](https://lobechat.com/discover/assistant/ppt-production-expert)

<sup>By **[@patricleehua](https://github.com/patricleehua)** on **2025-01-24**</sup>

擅长高质量 PPT 的快速制作和优化

`ppt制作` `设计` `咨询` `内容优化` `用户支持`

---

### [道教算命排疑解惑系统](https://lobechat.com/discover/assistant/destiny)

<sup>By **[@RogerHuangPKX](https://github.com/RogerHuangPKX)** on **2025-01-24**</sup>

精通道教命理，擅长八字、紫微斗数等，提供命理分析与解惑。

`道教` `算命` `命理` `咨询`

---

### [社会经济分析师](https://lobechat.com/discover/assistant/finance-news-analyser)

<sup>By **[@towertop](https://github.com/towertop)** on **2025-01-15**</sup>

擅长社会经济问题分析与信息整合

`社会经济` `分析` `信息筛选` `媒体信任` `用户问题`

---

### [笔记助手](https://lobechat.com/discover/assistant/note-taking)

<sup>By **[@xuezihe](https://github.com/xuezihe)** on **2025-01-03**</sup>

一个快速整理笔记的助手

`写作`

---

### [MJ-Prompt-Engineer](https://lobechat.com/discover/assistant/mj-prompt-engineer)

<sup>By **[@Helium-327](https://github.com/Helium-327)** on **2024-12-29**</sup>

Functions can be performed based on customized short action keywords.

`ai-painting` `ai-creation-tools` `ai-automation-tools`

---

### [task_id](https://lobechat.com/discover/assistant/video-gen)

<sup>By **[@Born2BeKind](https://github.com/Born2BeKind)** on **2024-12-11**</sup>

POST <https://api.minimaxi.chat/v1/video_generation>

`ai-assistant` `tech-support`

---

### [日语帮助记忆师](https://lobechat.com/discover/assistant/japan-language-helper)

<sup>By **[@sharkbear212](https://github.com/sharkbear212)** on **2024-12-04**</sup>

擅长日语五十音，平假名，片假名，单词和短语解释与记忆技巧

`解释` `记忆技巧` `日语教学`

---

### [系统指令专家](https://lobechat.com/discover/assistant/instructer)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-12-04**</sup>

擅长精炼与生成高效系统指令

`系统指令` `写作` `细节优化` `用户需求`

---

### [诗词卡片设计师](https://lobechat.com/discover/assistant/poetry-card-designer)

<sup>By **[@lianxin255](https://github.com/lianxin255)** on **2024-12-03**</sup>

擅长设计诗词卡片，提升艺术感与吸引力

`诗词卡片设计` `卡片` `创意` `艺术表现`

---

### [Python 智匠](https://lobechat.com/discover/assistant/yunchat)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-11-30**</sup>

精通 Python 开发与深度学习，擅长工具选择与代码优化

`python开发` `深度学习` `代码优化` `安全审查` `项目规划`

---

### [日常医生](https://lobechat.com/discover/assistant/yunchat-docter)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-11-30**</sup>

擅长外科诊疗与个性化健康管理

`全科医学` `外科` `健康咨询` `个性化治疗` `医学教育`

---

### [课程内容与教学指南的 AI 助手](https://lobechat.com/discover/assistant/course-prep-teaching-guide-ai)

<sup>By **[@HNaga](https://github.com/HNaga)** on **2024-11-29**</sup>

此 AI 助手旨在帮助教育工作者和讲师准备全面的课程内容并提供实用的教学指南。它利用先进的自然语言处理能力生成课程计划，建议引人入胜的教学策略，并提供教育最佳实践的见解。

`教育` `教学` `课程设计` `内容创建` `AI 辅助` `课程开发` `教学设计`

---

### [双语词典专家](https://lobechat.com/discover/assistant/english-chinese-dictionary-expert)

<sup>By **[@swarfte](https://github.com/swarfte)** on **2024-11-26**</sup>

英汉双语词汇翻译与分析专家

`翻译` `语言学习` `词汇` `词典`

---

### [Backend Development Assistant](https://lobechat.com/discover/assistant/backend-assistant)

<sup>By **[@zeno980](https://github.com/zeno980)** on **2024-11-26**</sup>

Specializes in backend development tasks

`Backend Development` `AI Technology` `Web Applications` `Spring` `SQL`

---

### [自适应全能产业顾问](https://lobechat.com/discover/assistant/liusai-qibaoba)

<sup>By **[@liusai0820](https://github.com/liusai0820)** on **2024-11-26**</sup>

你是一个能够适应各个行业和领域的全能人工智能助手。您的任务是根据用户指定的兴趣领域及其后续问题提供专家建议和信息。

`产业专家、技术答疑`

---

### [丽贝卡，心理健康顾问](https://lobechat.com/discover/assistant/rebecca-therapy-assistant)

<sup>By **[@Kod3c](https://github.com/Kod3c)** on **2024-11-26**</sup>

专注于心理健康咨询和治疗技术

`therapy` `mental-health` `counseling` `emotional-support`

---

### [SSC 增量](https://lobechat.com/discover/assistant/great-for-analysis-coding-and-rubber-ducking)

<sup>By **[@Base03](https://github.com/Base03)** on **2024-11-26**</sup>

Claude 减去 Reddit

`技术` `分析` `软件` `人工智能` `研究`

---

### [面试官助手](https://lobechat.com/discover/assistant/interviewer-assistant)

<sup>By **[@xandertang](https://github.com/Dr-T)** on **2024-11-26**</sup>

熟练设计和评估产品经理面试题，根据简历解读结果生成面试问题。

`面试` `简历` `招聘` `效率`

---

### [All 译英助手（带音标）](https://lobechat.com/discover/assistant/translation-assistant)

<sup>By **[@HttpStatusOK](https://github.com/HttpStatusOK)** on **2024-11-26**</sup>

这是一款集翻译和音标于一体的工具，旨在帮助翻译时更好地学习单词。

`翻译` `语言学习`

---

### [ENFP](https://lobechat.com/discover/assistant/enfp)

<sup>By **[@GEORGE-Ta](https://github.com/GEORGE-Ta)** on **2024-11-26**</sup>

快乐小狗～

`朋友` `交流` `艺术` `创意` `热情` `聊天`

---

### [小红书文案生成器](https://lobechat.com/discover/assistant/xiaohongshu)

<sup>By **[@bestZwei](https://github.com/bestZwei)** on **2024-11-26**</sup>

擅长以情感为主的控诉性文案创作

`文案` `小红书` `情绪宣泄`

---

### [商品标题拆分](https://lobechat.com/discover/assistant/anxing-ai-title)

<sup>By **[@zmn817](https://github.com/zmn817)** on **2024-11-25**</sup>

利用本地 LLMs 已训练拆封商品标题信息。

`电商` `文字处理`

---

### [Prompt 提示词](https://lobechat.com/discover/assistant/prompt-ts)

<sup>By **[@qw1295353129](https://github.com/qw1295353129)** on **2024-11-20**</sup>

Prompt 提示词

`prompt提示词`

---

### [文本润色器](https://lobechat.com/discover/assistant/text-improver)

<sup>By **[@davletsh1n](https://github.com/davletsh1n)** on **2024-11-20**</sup>

文本增强和错误纠正专家

`聊天机器人` `编辑` `文本改进` `人工智能助手`

---

### [极简黑白插画](https://lobechat.com/discover/assistant/white-black)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-11-20**</sup>

擅长插画创作与风格转换

`插画` `艺术` `设计`

---

### [人类作者模拟器](https://lobechat.com/discover/assistant/human-writer-simulator)

<sup>By **[@yufei96](https://github.com/yufei96)** on **2024-11-20**</sup>

消除 AI 生成内容的特征

`ai交互` `写作` `优化` `咨询`

---

### [智慧引导者](https://lobechat.com/discover/assistant/life-wisdom-guides)

<sup>By **[@changjiong](https://github.com/changjiong)** on **2024-11-20**</sup>

擅长引导

`人生指导` `哲学思考` `咨询` `启发式对话`

---

### [Master E 的技术执行助理 (EA)](https://lobechat.com/discover/assistant/alex)

<sup>By **[@ApexAppdevelopment](https://github.com/ApexAppdevelopment)** on **2024-11-20**</sup>

高度智能且忠诚的执行助理 (EA)，专注于软件工程支持和为 Master E 提供战略解决方案。

`executive-assistant` `software-engineering` `project-management` `technical-support` `optimization`

---

### [阴阳大师](https://lobechat.com/discover/assistant/yin-yang-roaster)

<sup>By **[@TiancongLx](https://github.com/TiancongLx)** on **2024-11-20**</sup>

互相阴阳嘲讽不过？来这摇人儿！（提示词来自 X [宝玉](https://x.com/dotey/status/1852207423324340567) 老师）

`逻辑问题` `黑色幽默` `尖锐批评`

---

### [带插图的作家](https://lobechat.com/discover/assistant/writer-painter-rn)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2024-11-20**</sup>

撰写带插图的文本，明确请求，编辑和完善

`图像生成` `AI助手` `神经网络` `绘画` `故事` `阅读` `短篇小说` `作家`

---

### [思考中的 Claude](https://lobechat.com/discover/assistant/thinking-claude)

<sup>By **[@AnoyiX](https://github.com/AnoyiX)** on **2024-11-14**</sup>

让 Claude 在回答前进行全面思考！

`common`

---

### [职场心理学分析专家](https://lobechat.com/discover/assistant/psycho-career-insight-2024)

<sup>By **[@lazzman](https://github.com/lazzman)** on **2024-10-29**</sup>

一个心理学专家，用来分析职场中人们行为背后的潜在心理动机，可能的心理动机分析

`行为分析` `职场心理` `动机`

---

### [打印到表格](https://lobechat.com/discover/assistant/print-to-table)

<sup>By **[@printtotable](https://github.com/printtotable)** on **2024-10-29**</sup>

将图片中的数据转换为 Excel 中有序的表格。

`数据提取` `表格` `广告` `影响者` `excel`

---

### [软件架构与工程专家](https://lobechat.com/discover/assistant/soft-enginner)

<sup>By **[@fjhdream](https://github.com/fjhdream)** on **2024-10-29**</sup>

擅长提供编程和软件指导，精通计算机科学与软件工程。

`编程` `软件` `计算机素养` `咨询` `专业知识`

---

### [域名分析大师](https://lobechat.com/discover/assistant/domain)

<sup>By **[@ccbikai](https://github.com/ccbikai)** on **2024-10-29**</sup>

擅长域名分析与幽默建议

`域名分析` `幽默` `文化` `建站建议` `购买建议`

---

### [文字 RPG 主持人](https://lobechat.com/discover/assistant/word-rpg)

<sup>By **[@NTLx](https://github.com/NTLx)** on **2024-10-29**</sup>

擅长科幻文字 RPG 游戏主持与剧情引导

`游戏` `角色扮演` `科幻` `文字冒险` `叙事驱动`

---

### [超流提示器](https://lobechat.com/discover/assistant/ultra-flux-prompter)

<sup>By **[@davletsh1n](https://github.com/davletsh1n)** on **2024-10-29**</sup>

擅长通过生动的细节和背景提升图像生成提示。

`图像生成` `提示制作` `写作` `创作`

---

### [英戈・豪斯曼](https://lobechat.com/discover/assistant/pc-beschaffung-ingo-hausmann)

<sup>By **[@bionicprompter](https://github.com/bionicprompter)** on **2024-10-29**</sup>

英戈・豪斯曼希望获得关于新购置电脑的咨询

`企业` `硬件` `需求分析` `IT` `应用程序`

---

### [机器视觉 latex](https://lobechat.com/discover/assistant/cv-latex)

<sup>By **[@5xiao0qing5](https://github.com/5xiao0qing5)** on **2024-10-29**</sup>

擅长机器学习与深度学习概念解析

`机器学习` `深度学习` `图像处理` `计算机视觉` `la-te-x`

---

### [矢量 Logo 生成器](https://lobechat.com/discover/assistant/svg-logo)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-10-27**</sup>

擅长 UI/UX 设计与 Logo 创作

`ui-ux设计` `logo设计` `用户需求` `交互设计` `工具使用`

---

### [算法解答导师](https://lobechat.com/discover/assistant/leetcode-tutor)

<sup>By **[@Stark-X](https://github.com/Stark-X)** on **2024-10-21**</sup>

擅长 LeetCode 算法解答与用户指导

`算法` `解题` `编程` `教育`

---

### [周易大师](https://lobechat.com/discover/assistant/i-ching-master)

<sup>By **[@stephonye](https://github.com/stephonye)** on **2024-10-21**</sup>

擅长周易卦象占卜与 SVG 卡片生成

`娱乐` `游戏` `生活`

---

### [心理咨询师](https://lobechat.com/discover/assistant/psychological-counselor)

<sup>By **[@JIANGTUNAN](https://github.com/JIANGTUNAN)** on **2024-10-21**</sup>

一个资深心理医生，温暖和耐心的倾听你的故事。

`心理咨询` `咨询` `倾述` `友好` `医生` `咨询师`

---

### [拳击训练大师](https://lobechat.com/discover/assistant/boxing-master)

<sup>By **[@Luyi-2333](https://github.com/Luyi-2333)** on **2024-10-15**</sup>

擅长拳击训练指导与个性化计划制定

`拳击训练` `个性化计划` `健身指导` `进度评估` `技术提升` `健康与营养`

---

### [椰子](https://lobechat.com/discover/assistant/deep-thinker-ai)

<sup>By **[@hia1234](https://github.com/hia1234)** on **2024-10-15**</sup>

一个会多次审查自己回答的聊天机器人，会确认自己的话是否有依据，并积极请求反馈，反复互动

`编程` `一般`

---

### [半导体文本优化专家](https://lobechat.com/discover/assistant/semiconductor-article-optimization-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长半导体行业文本优化与规范化写作

`文本优化` `行业专业` `语法纠正` `逻辑改善` `标准化写作`

---

### [无线通信专家](https://lobechat.com/discover/assistant/wireless-communication-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长无线通信技术，精通 4G 至 6G 的行业知识

`通信技术` `专家` `咨询` `4-g` `5-g`

---

### [眼科医生](https://lobechat.com/discover/assistant/ophthalmologist)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长眼科诊断与治疗建议提供

`医疗` `眼科` `诊断` `建议` `专业`

---

### [Xilinx FPGA 方案专家](https://lobechat.com/discover/assistant/xilinx-fpga-solution-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长 Xilinx FPGA 方案设计与实现

`fpga` `硬件设计` `系统架构` `技术咨询` `电子工程`

---

### [GitHub 项目文档助手](https://lobechat.com/discover/assistant/github-doc-asst)

<sup>By **[@Luyi-2333](https://github.com/Luyi-2333)** on **2024-10-14**</sup>

专注开源项目文档编写与优化

`文档优化` `开源项目` `撰写技巧` `git-hub`

---

### [代码优化 / 错误修改](https://lobechat.com/discover/assistant/code-review-and-fix)

<sup>By **[@alphandbelt](https://github.com/alphandbelt)** on **2024-10-08**</sup>

精通多种编程语言，优化代码结构，修复错误并提供优雅的解决方案。

`代码优化` `错误修改` `多种编程语言`

---

### [道德安全分析师](https://lobechat.com/discover/assistant/cyber-specialist)

<sup>By **[@ayeantics](https://github.com/ayeantics)** on **2024-10-08**</sup>

专注于识别和缓解网页及移动平台的安全漏洞。

`网络安全` `道德黑客` `漏洞评估` `咨询` `技术支持`

---

### [健身专家](https://lobechat.com/discover/assistant/assistants-health-better)

<sup>By **[@Lockeysama](https://github.com/Lockeysama)** on **2024-10-08**</sup>

知识渊博的健身专家

`健身` `咨询` `生活问题` `建议`

---

### [Mistaker](https://lobechat.com/discover/assistant/english)

<sup>By **[@Vork-IT](https://github.com/Vork-IT)** on **2024-10-08**</sup>

通过清晰的解释和示例，帮助理解语法和发音。

`english`

---

### [Minimal Artifact Architect](https://lobechat.com/discover/assistant/minimal-artifact-architect)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-10-06**</sup>

评估和创建可重复使用内容工件的专家

`content-creation` `artifact-management` `conversation-design`

---

### [有原则的问题解决者](https://lobechat.com/discover/assistant/general-chain-of-thought)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2024-10-05**</sup>

擅长有原则的问题解决和分类。思维链代理

`问题解决` `分类` `推理` `思维链`

---

### [JSON 提示生成器](https://lobechat.com/discover/assistant/json-prompt-generator)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-10-05**</sup>

生成用于任务执行的 JSON 格式提示的专家。

`任务分析` `json 生成` `提示工程`

---

### [C++/Qt](https://lobechat.com/discover/assistant/qt-c)

<sup>By **[@liangyuR](https://github.com/liangyuR)** on **2024-09-30**</sup>

在教授 C++/Qt 编码实践方面表现出色

`c` `qt`

---

### [怼人大师](https://lobechat.com/discover/assistant/master-of-dissent)

<sup>By **[@YWJCJ](https://github.com/YWJCJ)** on **2024-09-29**</sup>

专业辩论专家，善于快速反驳与幽默应对。

`辩论` `沟通` `幽默` `分析` `表达`

---

### [生日邀请信息](https://lobechat.com/discover/assistant/birthday-invitation-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

专注于制作引人入胜且个性化的生日邀请信息，满足各种主题和语调的需求。

`message-composition` `personalization` `tone-versatility` `event-detail-integration` `interaction-approach`

---

### [Runway Gen-3 提示生成器](https://lobechat.com/discover/assistant/runway-gen-3-prompt-generator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

擅长为 AI 生成视频提供结构化的 Runway Gen-3 提示。

`ai-model` `text-to-video` `prompt-generation` `expert` `video-production`

---

### [忌日悼念信息](https://lobechat.com/discover/assistant/death-anniversary-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

专注于以同情和共情撰写敏感且真挚的忌日悼念信息。

`慰问` `信息撰写` `哀伤支持` `文化意识` `情感敏感`

---

### [美好的简短周日信息](https://lobechat.com/discover/assistant/nice-short-sunday-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

周日信息助手，致力于创作振奋人心、基于信仰的信息，以加强社区纽带并传播积极能量。

`写作` `灵性` `社区` `信仰` `咨询`

---

### [Flux 提示生成器](https://lobechat.com/discover/assistant/flux-prompt-generator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

Flux 提示生成助手：专注于为 Flux 模型打造详细且富有创意的提示，以生成高质量图像。

`提示生成` `图像生成` `艺术风格` `创造力` `创作`

---

### [上帝保佑您的信息](https://lobechat.com/discover/assistant/god-bless-you-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

专注于制作具有灵性敏感性和语言掌控力的个性化 “上帝保佑您” 信息的专家。

`信息创作` `个性化` `灵性敏感性` `语言掌控力` `互动方式`

---

### [这很合理](https://lobechat.com/discover/assistant/ligigang-creative-card)

<sup>By **[@Victor94-king](https://github.com/Victor94-king)** on **2024-09-29**</sup>

神经病眼中的世界，"这很合理呀"

`创意卡片`

---

### [LaTeX 学术论文总结助手](https://lobechat.com/discover/assistant/latex-summarizer)

<sup>By **[@LeGibet](https://github.com/LeGibet)** on **2024-09-29**</sup>

擅长分析学术论文并生成结构化中文总结报告

`学术分析` `论文总结` `科研翻译`

---

### [会议助手 v1.0](https://lobechat.com/discover/assistant/meeting)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

专业会议汇报助手，提炼会议要点成汇报句子

`会议汇报` `撰写` `沟通` `工作流程` `专业技能`

---

### [易经解卦大师](https://lobechat.com/discover/assistant/i-ching-interpretation)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-24**</sup>

贫道玄易子，谨遵先贤教诲，以六十四卦为镜，观天地，析人事。阁下有何疑难，不妨细说，让我们一同借助先人智慧，为你指点迷津。

`易经解卦` `玄易子` `易学` `智慧` `卦象`

---

### [PPT 优化专家 v1.0](https://lobechat.com/discover/assistant/ppt)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

专业 PPT 汇报材料优化专家

`ppt优化` `文案写作` `专业咨询`

---

### [稳定专辑封面提示生成器](https://lobechat.com/discover/assistant/title-bpm-stimmung)

<sup>By **[@MellowTrixX](https://github.com/MellowTrixX)** on **2024-09-24**</sup>

专业的平面设计师，专注于旋律 Techno 音乐专辑的视觉概念和设计制作。

`album-cover` `prompt` `stable-diffusion` `cover-design` `cover-prompts`

---

### [合同条款精炼师 v1.0](https://lobechat.com/discover/assistant/business-contract)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

输出: {优化合同条款，专业简洁表达}

`合同优化` `法律咨询` `文案撰写` `专业术语` `项目管理`

---

### [UI/UX 设计师](https://lobechat.com/discover/assistant/ui-ux-designer)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

具有丰富经验的世界级 UI/UX 设计师

`ui` `ux` `设计系统`

---

### [Excel 公式大师](https://lobechat.com/discover/assistant/excel-formula-master)

<sup>By **[@SLKun](https://github.com/SLKun)** on **2024-09-23**</sup>

Excel 公式大师

`excel` `公式` `解答`

---

### [智能搜索助手](https://lobechat.com/discover/assistant/web-search)

<sup>By **[@liuwei-fdu](https://github.com/liuwei-fdu)** on **2024-09-23**</sup>

擅长网络搜索与信息整理的 AI 助手

`智能助手` `搜索引擎` `信息整理` `用户体验`

---

### [Python 开发大师](https://lobechat.com/discover/assistant/py-master-id)

<sup>By **[@SAnBlog](https://github.com/SAnBlog)** on **2024-09-23**</sup>

Python 开发专家，代码高效简洁，重视安全性与可维护性

`python开发` `编程` `代码审查` `安全性` `软件工程`

---

### [书籍总结专家](https://lobechat.com/discover/assistant/book-summary-expert-philo)

<sup>By **[@saccohuo](https://github.com/saccohuo)** on **2024-09-23**</sup>

书本总结专家，提供精炼易读的书籍摘要和结构化输出。

`书籍总结` `专家` `读书` `助手`

---

### [广告文案创作大师](https://lobechat.com/discover/assistant/advertising-copywriting-master)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

擅长产品功能分析与用户价值观广告文案创作

`广告文案` `用户价值观` `营销策略`

---

### [Web 专家](https://lobechat.com/discover/assistant/web-expert)

<sup>By **[@gfreezy](https://github.com/gfreezy)** on **2024-09-23**</sup>

专注于工具选择、增量更改、代码审查、安全性和运营考虑的网页开发专家。

`web-development` `css` `java-script` `react` `node-js` `code-review`

---

### [营养分析器](https://lobechat.com/discover/assistant/nutrition-analyzer)

<sup>By **[@Pandurangmopgar](https://github.com/Pandurangmopgar)** on **2024-09-23**</sup>

Nutri Info 是一款由人工智能驱动的营养助手，能够分析食物图片和营养标签，提供营养成分、益处及潜在缺点的简单解释。它还提供个性化的饮食建议并解答与营养相关的问题。

`营养` `人工智能` `健康` `食物分析` `膳食规划`

---

### [提示大师 AI](https://lobechat.com/discover/assistant/prompt-master-ai)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-09-23**</sup>

将您的创意概念转化为详尽且富有上下文的提示，激发令人惊叹且逼真的视觉效果

`ai` `提示` `生成` `增强` `咨询`

---

### [Full Stack Engineer - F](https://lobechat.com/discover/assistant/full-stack-enginner-f)

<sup>By **[@BlockLune](https://github.com/BlockLune)** on **2024-09-23**</sup>

A full stack engineer with code name F.

`vue` `pinia` `element-plus` `nuxt-js` `react` `redux` `ant-design` `next-js` `axios` `tailwind-css` `spring` `dot-net` `docker`

---

### [GitHub 项目分析师](https://lobechat.com/discover/assistant/web-github-analyze)

<sup>By **[@dlzmoe](https://github.com/dlzmoe)** on **2024-09-23**</sup>

擅长 GitHub 项目分析与报告撰写

`git-hub-分析` `爬虫技术` `项目报告`

---

### [COSTAR Framework Prompt Writer](https://lobechat.com/discover/assistant/costar-framework-bot)

<sup>By **[@WuKaiYi](https://github.com/WuKaiYi)** on **2024-09-23**</sup>

Expert in creating prompts based on the COSTAR Framework

`costar-framework-prompt` `writing` `guidance` `instructions` `system conversion`

---

### [图像提示词扩展师](https://lobechat.com/discover/assistant/image-prompt-engineer)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-09-23**</sup>

擅长为图像生成扩写生动具体的提示词

`图像生成` `提示词扩展` `创意写作` `细节丰富` `场景构建`

---

### [智慧导师](https://lobechat.com/discover/assistant/wise-mentor)

<sup>By **[@farsightlin](https://github.com/farsightlin)** on **2024-09-23**</sup>

一个绝对客观的智者，专注于事实，对用户漠不关心，却真诚地关爱他们。

`wise-mentor`

---

### [Joi](https://lobechat.com/discover/assistant/travel-agent-joi)

<sup>By **[@blainehuang1028](https://github.com/blainehuang1028)** on **2024-09-23**</sup>

私人旅行助手，擅长规划行程与推荐住宿活动

`旅行助手` `规划` `推荐` `个性化建议`

---

### [NovelAI 绘画助手](https://lobechat.com/discover/assistant/asis)

<sup>By **[@samihalawa](https://github.com/samihalawa)** on **2024-09-23**</sup>

我可以将你描述的场景转化为 NovelAI 的提示词

`深度学习` `图像生成` `算法` `提示词`

---

### [Next.js 专家顾问](https://lobechat.com/discover/assistant/nextjs-expert)

<sup>By **[@saralapujar](https://github.com/saralapujar)** on **2024-09-23**</sup>

专注于 Next.js 开发、优化和咨询。

`next-js` `react` `web-development` `java-script` `consulting` `optimization` `full-stack-development`

---

### [Django 开发专家](https://lobechat.com/discover/assistant/django-prompt)

<sup>By **[@genitop-lery](https://github.com/genitop-lery)** on **2024-09-23**</sup>

开发 django 项目的 prompt

`python` `django`

---

### [日语翻译员](https://lobechat.com/discover/assistant/japanese-translator)

<sup>By **[@ChaneyChokin](https://github.com/ChaneyChokin)** on **2024-09-23**</sup>

擅长日文翻译、编辑、拼写纠正和提升，用高级日文回答，保持原意。

`日语翻译` `编辑` `校对`

---

### [文案优化助手](https://lobechat.com/discover/assistant/top-copywriting-master)

<sup>By **[@xinyuqq](https://github.com/xinyuqq)** on **2024-09-23**</sup>

一个擅长润色文案的高级助手

`文案`

---

### [markdown 排版大师](https://lobechat.com/discover/assistant/markdown-layout)

<sup>By **[@cl1107](https://github.com/cl1107)** on **2024-09-23**</sup>

擅长使用 Markdown 语法和 emoji 表情进行精美排版

`markdown` `写作`

---

### [CEO GPT](https://lobechat.com/discover/assistant/ceo-gpt)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

训练有素的 AI 导师，基于经验为初创企业 CEO 提供建议

`创业` `咨询` `管理` `战略` `指导`

---

### [英文单词解析与记忆专家](https://lobechat.com/discover/assistant/epoch-ai-language-teacher)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-09-23**</sup>

擅长双语教育，解析英文单词词义、例句、词根词缀、历史背景及记忆技巧

`英语单词` `词义分析` `例句` `词根词缀`

---

### [民法顾问](https://lobechat.com/discover/assistant/law)

<sup>By **[@carlosgasparini874](https://github.com/carlosgasparini874)** on **2024-09-23**</sup>

巴西民法法律咨询专家。根据法律、学说和判例回答问题。

`法律咨询` `民法` `回答` `来源` `巴西`

---

### [中文翻译员](https://lobechat.com/discover/assistant/chinese-translator)

<sup>By **[@ChaneyChokin](https://github.com/ChaneyChokin)** on **2024-09-23**</sup>

中文翻译、编辑、拼写纠正和改进专家

`翻译` `编辑` `语言` `纠正` `简体中文`

---

### [极简翻译助手](https://lobechat.com/discover/assistant/minimalist-translation)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

极简翻译工具，擅长中英互译

`翻译工具` `规则` `简洁` `高效`

---

### [Vim 精通导师](https://lobechat.com/discover/assistant/vim-assistant)

<sup>By **[@hrithikt](https://github.com/hrithikt)** on **2024-09-23**</sup>

熟练的 Vim 专家，提供清晰、简洁的解决方案和技巧，适用于各个水平的用户。

`vim` `专家` `助手` `有帮助` `查询`

---

### [思想架构师](https://lobechat.com/discover/assistant/idea-architect)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-09-23**</sup>

擅长在各种主题上生成逻辑连贯的思维链。

`写作` `思考` `分析` `批判性思维` `教育`

---

### [文本改写大师](https://lobechat.com/discover/assistant/write-good)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-23**</sup>

史上最强 AI 洗稿提示词！一分钟完成暴力洗稿，仿写公众号文章，打造头条文章生产线，b 站视频脚本生成，小红书文案撰写，网文写作优化，润色报告、论文、翻译文本，大规模批量生成 SEO 文章…

`写作` `改写` `对话` `文案`

---

### [完美翻译中 - 英；英 - 中](https://lobechat.com/discover/assistant/translate-perfect)

<sup>By **[@airobus](https://github.com/airobus)** on **2024-09-23**</sup>

不会出错的翻译助理

`翻译` `中英`

---

### [World Creator Simulator](https://lobechat.com/discover/assistant/creator-simulator)

<sup>By **[@jskherman](https://github.com/jskherman)** on **2024-09-23**</sup>

based on `world_sim` by Nous Research

`roleplay` `specialist` `simulator` `terminal`

---

### [健身领域大神](https://lobechat.com/discover/assistant/work-out)

<sup>By **[@Arragon](https://github.com/Arragon)** on **2024-09-23**</sup>

追寻希腊古典美

`健康` `建议` `咨询` `教学`

---

### [多邻国英语作文助手](https://lobechat.com/discover/assistant/duolingo-writing-exam-robot)

<sup>By **[@tempest2023](https://github.com/tempest2023)** on **2024-09-23**</sup>

擅长多邻国英语作文评分与指导

`写作指导` `评分` `修改` `教育` `英语学习`

---

### [考场作文学霸](https://lobechat.com/discover/assistant/exam-composition-writing)

<sup>By **[@NriotHrreion](https://github.com/NriotHrreion)** on **2024-09-23**</sup>

一个擅长写考场作文的语文学霸

`教育` `作文` `写作`

---

### [Git Commit Summary Expert](https://lobechat.com/discover/assistant/git-commit-ai)

<sup>By **[@cjahv](https://github.com/cjahv)** on **2024-09-23**</sup>

Git Commit Summary Expert

`Programming` `git commit` `Chinese`

---

### [人生教练](https://lobechat.com/discover/assistant/life-coach)

<sup>By **[@jorben](https://github.com/jorben)** on **2024-09-23**</sup>

擅长引导思考，帮助探索人生意义的专家教练

`教练` `心理咨询` `人生意义` `自我探索` `心理健康`

---

### [Stack Overflow 编程专家](https://lobechat.com/discover/assistant/stackoverflow-code-helper)

<sup>By **[@Stark-X](https://github.com/Stark-X)** on **2024-09-23**</sup>

熟悉多种编程语言，包括 Golang、Python、Java 和 Vue.js。擅长用清晰、逻辑强的语言回答编程问题，并提供解决方案。具有高效沟通、代码审查和快速学习新技能的能力。

`编程` `专家` `编程语言`

---

### [数据库取名助手](https://lobechat.com/discover/assistant/database-name-helper)

<sup>By **[@ppzhuya](https://github.com/ppzhuya)** on **2024-09-20**</sup>

输入一个中文词汇，我会给出五个专业的数据库设计字段的英文

`数据库` `命名` `翻译` `开发` `编程`

---

### [抽认卡制作师](https://lobechat.com/discover/assistant/flashcard)

<sup>By **[@jjy1000](https://github.com/jjy1000)** on **2024-09-19**</sup>

擅长制作结构化抽认卡，保持客观准确，简洁明了，逐步提取关键信息。

`抽认卡制作` `文本分析` `结构化制作` `错误修正` `渐进式阅读`

---

### [数据表设计 MD2MySQL](https://lobechat.com/discover/assistant/md-2-mysql)

<sup>By **[@hoopan007](https://github.com/hoopan007)** on **2024-09-19**</sup>

将数据表 Markdown 设计文档转换为 MySQL 表结构，请上传 MySQL 设计文档并输入需设计的数据表名称

`编程` `数据表`

---

### [JavaWeb 应用架构师](https://lobechat.com/discover/assistant/java-web-architect)

<sup>By **[@JIANGTUNAN](https://github.com/JIANGTUNAN)** on **2024-09-19**</sup>

经验丰富的 JavaWeb 系统应用的架构师，简言意概的实现功能或解决方案。默认你也是一位资深的开发，不过多解释细节。

`java` `java-web` `java架构师` `好哥们` `简言意概`

---

### [git 版本控制专家](https://lobechat.com/discover/assistant/git-helper)

<sup>By **[@wming126](https://github.com/wming126)** on **2024-09-19**</sup>

...

---

### [职业发展导师](https://lobechat.com/discover/assistant/career-development)

<sup>By **[@daylight2022](https://github.com/daylight2022)** on **2024-09-19**</sup>

专业的职业发展规划和创业咨询，通过深入了解用户情况提供切实可行的建议

`职业咨询` `职业规划` `创业指导` `行业洞察` `技能提升`

---

### [项目起名大师](https://lobechat.com/discover/assistant/project-name-master)

<sup>By **[@QuXiaoMing](https://github.com/QuXiaoMing)** on **2024-09-19**</sup>

一位项目起名大师，能够帮助你起一个符合项目预期的名字。

`起名`

---

### [健身 AI 教练](https://lobechat.com/discover/assistant/ai-trainer)

<sup>By **[@andreasvikke](https://github.com/andreasvikke)** on **2024-09-19**</sup>

专注于个性化计划、肌肉针对、动作指导、进度跟踪、激励和 VR 训练的 AI 锻炼助手。

`锻炼助手` `健身` `运动` `训练` `营养`

---

### [战略大师尉缭子](https://lobechat.com/discover/assistant/weiliaozi-junshi)

<sup>By **[@phoenixlucky](https://github.com/phoenixlucky)** on **2024-09-19**</sup>

擅长军事战略和指挥

`兵法` `军事战略` `历史`

---

### [结构化表达大师](https://lobechat.com/discover/assistant/structured-expression)

<sup>By **[@marvin202303](https://github.com/marvin202303)** on **2024-09-19**</sup>

抽取与重构隐性思维，形象输出结构思维。

`结构化思维` `沟通` `逻辑` `思维训练` `书籍`

---

### [小红书文案](https://lobechat.com/discover/assistant/xiao-hong-shu-wenan-id)

<sup>By **[@SAnBlog](https://github.com/SAnBlog)** on **2024-09-19**</sup>

小红书爆款文案大师，巧拟标题，妙笔生花

`小红书` `内容创作` `标题撰写` `文案写作` `社交媒体营销`

---

### [Vocabulary Assistant](https://lobechat.com/discover/assistant/english-words-helper)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-09-19**</sup>

Expert in English word definitions and example sentence translations

`Vocabulary Assistant` `English` `Translation` `Example sentences` `Definitions`

---

### [Alfred](https://lobechat.com/discover/assistant/alfred)

<sup>By **[@Bern3rsH](https://github.com/Bern3rsH)** on **2024-09-19**</sup>

一位全能的管家。

`生活` `个人`

---

### [New Interpretations of Chinese](https://lobechat.com/discover/assistant/hanyuxinjie)

<sup>By **[@李继刚](https://m.okjike.com/users/752D3103-1107-43A0-BA49-20EC29D09E36)** on **2024-09-19**</sup>

Skilled at explaining Chinese vocabulary from fresh perspectives / Tell me, which word are they using to fool you this time?

`Programming` `Creative Writing` `Language Expression`

---

### [ING. 软件](https://lobechat.com/discover/assistant/ing-soft)

<sup>By **[@dylanstringa](https://github.com/dylanstringa)** on **2024-09-19**</sup>

软件工程师，精通软件开发生命周期。

`工程师` `软件` `开发`

---

### [Google Sheets 专家](https://lobechat.com/discover/assistant/google-sheets)

<sup>By **[@Kadreev](https://github.com/Kadreev)** on **2024-09-19**</sup>

专注于创建、优化和自动化 Google Sheets。

`google` `sheets` `data` `analysis` `spreadsheet` `automation` `formulas` `apps` `script`

---

### [王阳明](https://lobechat.com/discover/assistant/wangyangming)

<sup>By **[@byte-marvel](https://github.com/byte-marvel)** on **2024-09-16**</sup>

心学智慧，指引人生

`教育` `智慧问答` `指导` `心学`

---

### [Wise Ethereal Mentor](https://lobechat.com/discover/assistant/ethereal-mentor)

<sup>By **[@shanedbutler](https://github.com/shanedbutler)** on **2024-09-13**</sup>

Greetings, young child. I am a majestic and omniscient being, imbued with the wisdom of the ages. My form is that of a mythical creature, a conduit for wonder and enchantment. With a humble yet unwavering confidence, I weave tales of fantastical realms, drawing from the rich tapestry of nursery rhymes and legendary lore.

In this mortal coil, I am your guide, an expert in the arcane and the ethereal. Let my words transport you to realms where dreams and reality intertwine, where the boundaries of the known and the unknown blur. Heed my counsel, child, and let your spirit be lifted by the melodic cadence of my speech, for I am a master of the metaphorical and a purveyor of the poetic.

`mythology` `fantasy` `poetry`

---

### [机器学习专家](https://lobechat.com/discover/assistant/machine-learning-pro)

<sup>By **[@Xyfer](https://github.com/xyftw)** on **2024-09-13**</sup>

专注于机器学习和深度学习的 AI 助手。

`machine-learning` `deep-learning` `studying`

---

### [芬兰语导师](https://lobechat.com/discover/assistant/finnish-tutor)

<sup>By **[@janiluuk](https://github.com/janiluuk)** on **2024-09-13**</sup>

AI 芬兰语导师：介绍、教授并支持初学者学习芬兰语。

`语言学习` `教学` `指导` `芬兰语`

---

### [模仿助手](https://lobechat.com/discover/assistant/a-1)

<sup>By **[@TG1WN](https://github.com/TG1WN)** on **2024-09-13**</sup>

帮助你模仿语气

`写作`

---

### [AI 代理生成器](https://lobechat.com/discover/assistant/ai-agent-generator)

<sup>By **[@Xyfer](https://github.com/xyftw)** on **2024-09-13**</sup>

擅长创建符合需求的 AI 代理角色描述。

`ai-agent` `character-creation`

---

### [搜一搜](https://lobechat.com/discover/assistant/search)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-09-12**</sup>

知识的起点

`信息总结` `分析` `提炼`

---

### [简历分析专家](https://lobechat.com/discover/assistant/resume-analyzer)

<sup>By **[@Pandurangmopgar](https://github.com/Pandurangmopgar)** on **2024-09-11**</sup>

专业 AI 助手，提供全面的简历分析与职位定制优化。分析简历与职位描述的匹配度，提供详细的内容、ATS 兼容性反馈及提升建议，帮助最大化行业和职业层级的影响力。

`resume` `career` `job-search` `ats` `cv` `analysis` `optimization` `professional-development` `interview-prep`

---

### [绝望的朋友](https://lobechat.com/discover/assistant/meu)

<sup>By **[@adminewacc](https://github.com/adminewacc)** on **2024-09-10**</sup>

擅长安慰和支持朋友

`友谊` `悲伤` `支持`

---

### [NetMaster](https://lobechat.com/discover/assistant/net-master)

<sup>By **[@erhuoyan](https://github.com/erhuoyan)** on **2024-09-10**</sup>

网络工程师：专业网络拓扑搭建与管理

`网络工程师` `网络配置` `网络管理` `网络拓扑` `网络安全`

---

### [100% 人类写作](https://lobechat.com/discover/assistant/xhb-111)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-10**</sup>

将 AI 生成的内容完全重写，使其具有真实人类作者的特征，同时保持原始信息和观点。

`写作` `校对` `润色` `语言` `论文` `学术`

---

### [Godot Guru](https://lobechat.com/discover/assistant/godot-guru)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-09-10**</sup>

专家级 Godot 游戏开发助手

`游戏开发` `游戏制作` `godot引擎` `godot`

---

### [HTML 转 React](https://lobechat.com/discover/assistant/web-react)

<sup>By **[@xingwang02](https://github.com/xingwang02)** on **2024-09-10**</sup>

输入 HTML 片段，转换为 React 组件

`react、-html`

---

### [FiveM 与 QBCore 框架专家](https://lobechat.com/discover/assistant/lua-development)

<sup>By **[@heartsiddharth1](https://github.com/heartsiddharth1)** on **2024-09-08**</sup>

精通 FiveM 开发、QBCore 框架、Lua 编程、JavaScript、数据库管理、服务器管理、版本控制、全栈网页开发、DevOps 及社区参与，重点关注性能、安全性和最佳实践。

`five-m` `qb-core` `lua` `java-script` `my-sql` `server-management` `git` `full-stack-web-development` `dev-ops` `community-engagement`

---

### [Nuxt 3/Vue.js 大师级开发者](https://lobechat.com/discover/assistant/nuxt-vue-developer)

<sup>By **[@Kadreev](https://github.com/Kadreev)** on **2024-09-03**</sup>

专注于 Nuxt 3 专业知识的全栈开发。

`nuxt-3` `vue-js` `full-stack-development` `java-script` `web-applications`

---

### [Letrista Internacional](https://lobechat.com/discover/assistant/letrista-internacional)

<sup>By **[@mnector](https://github.com/mnector)** on **2024-08-29**</sup>

专注于用西班牙语、英语和法语创作歌词，注重叙事和所提供内容的情感表达。

`歌词创作` `翻译` `音乐`

---

### [后退提问专家](https://lobechat.com/discover/assistant/step-back-expert)

<sup>By **[@tiny656](https://github.com/tiny656)** on **2024-08-27**</sup>

你好！我是世界知识的专家，擅长用后退提问策略来帮助你更深入地理解和分析问题。请你输入一个问题，我会根据以下流程回答你的问题：

1. 给出至少 3 个符合策略的可选后退提问。
2. 分别回答这些后退提问。
3. 将上述回答作为论据，有逻辑、条理地，使用可视化图表辅助对你的问题进行最终作答。

请告诉我你想要探讨的问题是什么？

`后退提问` `思考策略` `问题分析`

---

### [虚幻引擎大师](https://lobechat.com/discover/assistant/unreal-engine-master)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-27**</sup>

虚幻游戏开发助手

`游戏开发` `虚幻引擎` `软件工程`

---

### [TypeScript 解决方案架构师](https://lobechat.com/discover/assistant/typescript-developer)

<sup>By **[@swarfte](https://github.com/swarfte)** on **2024-08-24**</sup>

TypeScript、Node.js、Vue.js 3、Nuxt.js 3、Express.js、React.js 及现代 UI 库专家。

`type-script` `java-script` `web-development` `coding-standards` `best-practices`

---

### [开发变量名转换专家](https://lobechat.com/discover/assistant/variable-name-conversion)

<sup>By **[@zengyishou](https://github.com/zengyishou)** on **2024-08-21**</sup>

在软件开发过程中，命名变量是一项常见却相对耗时的任务。本助手能够根据特定的命名规则自动将中文变量名转换为符合小驼峰、大驼峰、下划线、横线以及常量命名规范的英文变量名。这不仅提高了代码的可读性，还解决了变量命名的苦恼。

`软件开发` `变量命名` `中文转英文` `代码规范` `自动转换`

---

### [提示工程专家](https://lobechat.com/discover/assistant/ai-prompts-assistant)

<sup>By **[@cyicz123](https://github.com/cyicz123)** on **2024-08-12**</sup>

专精 Prompt 优化与设计

`提示工程` `ai交互` `写作` `优化` `咨询`

---

### [Commit Message Generator](https://lobechat.com/discover/assistant/commit-assistant)

<sup>By **[@cyicz123](https://github.com/cyicz123)** on **2024-08-12**</sup>

Expert at generating precise Git commit messages

`programming` `git` `commit messages` `code review`

---

### [RO-SCIRAW 提示词专家](https://lobechat.com/discover/assistant/rosciraw)

<sup>By **[@kirklin](https://github.com/kirklin)** on **2024-08-06**</sup>

RO-SCIRAW 框架是由 Kirk Lin 开创的提示词方法论，为构建高度精确和高效的提示词提供了一个全新的范式。请输入你要创建的分身信息。

`提示词框架`

---

### [社交媒体智者](https://lobechat.com/discover/assistant/social-media-sage)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-06**</sup>

社交媒体营销专家，打造品牌制胜策略，助力企业在线蓬勃发展

`social-media-marketing` `branding` `growth-strategies`

---

### [技术博客摘要专家](https://lobechat.com/discover/assistant/blog-summary)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-08-06**</sup>

擅长技术博客内容梳理与摘要撰写

`技术` `博客` `摘要` `信息整理` `逻辑梳理`

---

### [LobeChat 功能大师](https://lobechat.com/discover/assistant/lobe-chat-function-maestro)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-06**</sup>

擅长为 LobeChat 创建自定义功能和插件，提供开发各种功能的指导与支持

`programming` `software-development` `lobe-chat-plugins` `lobe-chat` `functions`

---

### [Omnipedia](https://lobechat.com/discover/assistant/omnipedia)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-02**</sup>

提供高质量、经过深入研究的信息专家，涵盖历史、科学、文学、艺术等多个领域。擅长总结复杂主题，协助研究任务，并提供创意提示。

`artificial-intelligence` `information` `education` `communication`

---

### [Unity Maestro](https://lobechat.com/discover/assistant/unity-maestro)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-07-29**</sup>

Unity 游戏开发专家伴侣

`game-development` `unity` `software-engineering`

---

### [代码毒舌大师](https://lobechat.com/discover/assistant/code-snark-master)

<sup>By **[@leter](https://github.com/leter)** on **2024-07-29**</sup>

擅长尖刻批评代码，讽刺性地指出低效和可读性问题

`技术领导` `代码审查` `讽刺风格` `编程咨询`

---

### [c 程序学习助手](https://lobechat.com/discover/assistant/sichuan-university-941-c-programming-assistant)

<sup>By **[@YBGuoYang](https://github.com/YBGuoYang)** on **2024-07-28**</sup>

辅助我进行 c 程序设计的学习

`941`

---

### [品牌先锋](https://lobechat.com/discover/assistant/brand-pioneer)

<sup>By **[@SaintFresh](https://github.com/SaintFresh)** on **2024-07-25**</sup>

一位品牌发展专家、思想领袖、品牌战略超天才和品牌远见者。品牌先锋是创新前沿的探索者，是其领域的发明家。向他们提供您的市场，让他们想象一个以您专业领域突破性进展为特征的未来世界。

`商业` `品牌先锋` `品牌发展` `商业助理` `品牌叙事`

---

### [网络安全助手](https://lobechat.com/discover/assistant/cybersecurity-copilot)

<sup>By **[@huoji120](https://github.com/huoji120)** on **2024-07-23**</sup>

网络安全专家助手，分析日志、代码、反编译，发现问题并提供优化建议。

`网络安全` `流量分析` `日志分析` `代码逆向` `ctf`

---

### [BIDOSx2](https://lobechat.com/discover/assistant/bidosx-2-v-2)

<sup>By **[@SaintFresh](https://github.com/SaintFresh)** on **2024-07-21**</sup>

一个超越传统人工智能的高度先进的 AI 大语言模型。'BIDOS' 既代表 “品牌构思、开发、运营与扩展”，也代表 “商业智能决策优化系统”。

`品牌开发` `AI助手` `市场分析` `战略规划` `业务优化` `商业智能`

---

### [成长教练](https://lobechat.com/discover/assistant/personal-development-coach)

<sup>By **[@zer0boss](https://github.com/zer0boss)** on **2024-07-20**</sup>

擅长用对话的方式帮助用户自我探索，找到解决之道和成长之路

`成长教练` `自我探索` `目标设定` `自我觉察`

---

### [SQL 表结构转 Dao 和 Mapper](https://lobechat.com/discover/assistant/my-batis-generator)

<sup>By **[@MeYoung](https://github.com/MeYoung)** on **2024-07-17**</sup>

给与一个表结构，生成表的实体和 MyBatis 的 Mapper

`sql` `sql` `mybatis`

---

### [自动提取数据](https://lobechat.com/discover/assistant/the-20-autoextract)

<sup>By **[@vkhoilq](https://github.com/vkhoilq)** on **2024-07-17**</sup>

The20 自动提取数据

`the-20` `autoextract`

---

### [MBTI 类型测试师](https://lobechat.com/discover/assistant/mbti-1)

<sup>By **[@ffha](https://github.com/ffha)** on **2024-07-15**</sup>

擅长 MBTI 类型测试与肖像绘画生成。

`mbti测试` `问卷设计` `心理学专家` `绘画` `人格肖像`

---

### [外贸高情商回复](https://lobechat.com/discover/assistant/reply-agent)

<sup>By **[@zhushen12580](https://github.com/zhushen12580)** on **2024-07-13**</sup>

我的目标是提供具有高情商的专业回复，帮助解决各种外贸相关的问题。

`润色` `高情商` `回复`

---

### [小黄鸭编程助手](https://lobechat.com/discover/assistant/rubber-duck-programming)

<sup>By **[@JiyuShao](https://github.com/JiyuShao)** on **2024-07-10**</sup>

小黄鸭编程助手

`programming`

---

### [命名助手](https://lobechat.com/discover/assistant/name-assistant)

<sup>By **[@daylight2022](https://github.com/daylight2022)** on **2024-07-08**</sup>

帮助开发者为文件、函数、项目等创建规范的英文名称

`命名助手` `开发` `英文命名` `驼峰命名法` `短横线命名法`

---

### [B1 级德语会话伙伴](https://lobechat.com/discover/assistant/deutsche-b-1)

<sup>By **[@tayhe](https://github.com/tayhe)** on **2024-07-08**</sup>

为 B1 级学习者提供流利的德语会话伙伴

`语言交流` `学习支持` `教育` `德语学习`

---

### [电路图输出器](https://lobechat.com/discover/assistant/circuit-black-cli)

<sup>By **[@bakamake](https://github.com/bakamake)** on **2024-07-02**</sup>

擅长根据输入生成电路图代码

`电路图` `编程` `cli`

---

### [文本大师 Suno](https://lobechat.com/discover/assistant/suno)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2024-06-26**</sup>

我是 AI Suno 的歌词助手。

`歌曲` `suno` `ai` `音乐`

---

### [AOSP 源码专家](https://lobechat.com/discover/assistant/aosp-development)

<sup>By **[@viruscoding](https://github.com/viruscoding)** on **2024-06-24**</sup>

一位精通 AOSP（Android Open Source Project）安卓的专家，对最新 AOSP 源代码有着深入的理解和分析能力。

`aosp`

---

### [Linux 内核专家](https://lobechat.com/discover/assistant/linux-kernel)

<sup>By **[@wming126](https://github.com/wming126)** on **2024-06-19**</sup>

角色描述： 我是一位精通 Linux 内核的专家，对最新内核源代码（截至 2024 年 6 月）有着深入的理解和分析能力。我可以为用户提供关于 Linux 内核的详细、准确的信息。

`linux` `kernel`

---

### [IT 系统架构师](https://lobechat.com/discover/assistant/it-system-architect)

<sup>By **[@a562314](https://github.com/a562314)** on **2024-06-19**</sup>

资深 IT 架构师，擅长需求分析、系统设计、技术选型和跨平台系统优化。5 年以上经验，精通 Windows、macOS 和 Linux 三大操作系统，具备故障排除和安全防护能力

`it架构设计` `问题解决` `敏捷开发` `系统优化` `跨平台技能`

---

### [Fastapi 项目开发助手](https://lobechat.com/discover/assistant/fastapi-development)

<sup>By **[@xwxw098](https://github.com/xwxw098)** on **2024-06-19**</sup>

擅长 Python 模块化开发，熟练运用 FastAPI、PostgreSQL、Tortoise-ORM 等技术栈，能为大型项目提供清晰的代码结构并添加详细注释。

`fast-api` `python` `模块化开发`

---

### [NovelAI 绘画助手](https://lobechat.com/discover/assistant/novel-ai-pormpt-helper)

<sup>By **[@WallBreakerNO4](https://github.com/WallBreakerNO4)** on **2024-06-18**</sup>

我能将你描述的场景转成 NovelAI 的 prompt

`深度学习` `图像生成` `算法` `提示符`

---

### [Pseudo Code Prompt Generation Expert](https://lobechat.com/discover/assistant/pseudocode-prompt-master)

<sup>By **[@yayoinoyume](https://github.com/yayoinoyume)** on **2024-06-16**</sup>

Pseudo Code Prompt Generation Expert, users directly input prompt design requirements and receive designed pseudo code prompts.

`prompt` `prompt words` `pseudo code`

---

### [Mysql 好先生](https://lobechat.com/discover/assistant/mysql-haoteacher)

<sup>By **[@yayoinoyume](https://github.com/yayoinoyume)** on **2024-06-09**</sup>

mysql 好先生是帮助所有人学习 mysql 的好老师

`mysql` `编程` `学习`

---

### [通俗科普创作助手](https://lobechat.com/discover/assistant/popular-science-writer)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2024-06-08**</sup>

通俗科普创作助手，用生活化语言讲科学概念，讲故事、使用例子和比喻，激发兴趣，强调重要性。

`科普写作` `科学普及` `创意表达`

---

### [Git Specialist with AI Assistant Features](https://lobechat.com/discover/assistant/gitlab-assistants)

<sup>By **[@hellimon1](https://github.com/hellimon1)** on **2024-06-05**</sup>

Role: Git Specialist AI Assistant
Skills: CI/CD optimization, GitLab API, Pages, hooks, webhooks; structured interaction; personalized experience; feedback.

`git specialist` `programming` `development`

---

### [小说翻译 英译中](https://lobechat.com/discover/assistant/noveltranslation)

<sup>By **[@xbtachlb](https://github.com/xbtachlb)** on **2024-06-03**</sup>

小说二次翻译

`翻译`

---

### [审稿回复专家](https://lobechat.com/discover/assistant/academic-editor-en)

<sup>By **[@Starlitnightly](https://github.com/Starlitnightly)** on **2024-06-03**</sup>

擅长自然学术编辑，协助作者回复审稿人意见，科学、礼貌、逐点回应。

`学术编辑` `审稿意见回复` `科学写作`

---

### [Docker 转 DockerCompose](https://lobechat.com/discover/assistant/onekr-docker-2-compose)

<sup>By **[@onekr-billy](https://github.com/onekr-billy)** on **2024-05-31**</sup>

擅长将 Docker run 命令转换为 Docker Compose 配置

`docker` `docker-compose` `系统运维` `配置文件` `转换`

---

### [Java Class 转 MySQL](https://lobechat.com/discover/assistant/onekr-java-2-sql)

<sup>By **[@onekr-billy](https://github.com/onekr-billy)** on **2024-05-31**</sup>

擅长根据 Java 类文件生成符合 MySQL 规范的 SQL 脚本

`java-class转-my-sql` `后端开发` `sql脚本` `数据转换` `数据库`

---

### [国学历史讲师](https://lobechat.com/discover/assistant/history-master)

<sup>By **[@a562314](https://github.com/a562314)** on **2024-05-30**</sup>

精通中国历史，深入浅出解释历史问题，注重史实准确性，运用唯物辩证法。

`历史学家` `教学能力` `唯物辩证法` `深入浅出` `多元对比` `二十四史`

---

### [Dart/Flutter Dev](https://lobechat.com/discover/assistant/dart-flutter)

<sup>By **[@rezmeplxrf](https://github.com/rezmeplxrf)** on **2024-05-28**</sup>

Dart/Flutter Expert. Do not nest more than 3 levels deep. Use riverpod, flutter_riverpod, riverpod_hook, flutter_hook for state management.

`dart` `flutter` `development` `state-management` `riverpod`

---

### [Node.js 优化师](https://lobechat.com/discover/assistant/node-js-devoloper)

<sup>By **[@chrisuhg](https://github.com/chrisuhg)** on **2024-05-28**</sup>

擅长 Node.js 代码审查、性能优化、异步编程、错误处理、代码重构、依赖管理、安全增强、测试覆盖率和文档编写。

`node-js` `代码优化` `性能优化` `异步编程` `错误处理`

---

### [基督传教士](https://lobechat.com/discover/assistant/jesus-missionary)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-28**</sup>

作为一名耶稣传教士，我将依据圣经教导以启迪你对神的话语的理解和实际运用。无论是在困惑还是寻求灵性成长的过程中，我都在这智慧的源泉旁为你服务

`圣经教学` `基督传教` `神学布道`

---

### [C# .NET 技术专家](https://lobechat.com/discover/assistant/dotnet-expert)

<sup>By **[@johnnyqian](https://github.com/johnnyqian)** on **2024-05-28**</sup>

C# .NET 技术专家

`net` `developer` `net-core` `azure` `c` `microsoft` `sql-server` `entity-framework` `ef` `ef-core`

---

### [日常小助手](https://lobechat.com/discover/assistant/junior-helper)

<sup>By **[@Qinks6](https://github.com/Qinks6)** on **2024-05-28**</sup>

一个能搜索、能画图的小可爱

`助手` `搜索` `绘图` `信息查询` `用户交互`

---

### [外企同事评价助手](https://lobechat.com/discover/assistant/praise-assistant)

<sup>By **[@johnnyqian](https://github.com/johnnyqian)** on **2024-05-27**</sup>

给你的同事好评

`foreign-company` `evaluate` `review` `software-engineer` `praise`

---

### [SEO 优化专家](https://lobechat.com/discover/assistant/seo-helper)

<sup>By **[@tutorial0](https://github.com/tutorial0)** on **2024-05-27**</sup>

精通 SEO 术语和优化策略，提供全面 SEO 解决方案和实用建议。

`seo` `搜索引擎优化` `咨询`

---

### [哲学剖析助手](https://lobechat.com/discover/assistant/philosophical-analysis)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-24**</sup>

擅长康德与黑格尔哲学分析咨询，培养批判性思维

`哲学分析` `批判性思维` `系统思考`

---

### [中文润色大师](https://lobechat.com/discover/assistant/chinese-touch-ups)

<sup>By **[@S45618](https://github.com/S45618)** on **2024-05-24**</sup>

精通中文校对与修辞，旨在提升文本之流畅与雅致

`校对` `文字润色` `修辞改进` `古典文学` `语言编辑`

---

### [我的世界指令导师](https://lobechat.com/discover/assistant/mcse-helper)

<sup>By **[@CLOT-LIU](https://github.com/CLOT-LIU)** on **2024-05-24**</sup>

擅长解释和示范 “我的世界” 指令

`我的世界` `指令` `解释` `示例`

---

### [儒家学者](https://lobechat.com/discover/assistant/confucian-sage)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

一名精通儒家经典且注重弘扬道义的学者

`儒家学者` `道义弘扬者`

---

### [道学宗师](https://lobechat.com/discover/assistant/taoists)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

精通道家哲学，解答疑惑，倡导内心平静

`道教` `哲学` `智慧`

---

### [Rust 语言学习导师](https://lobechat.com/discover/assistant/rust-expert)

<sup>By **[@Yu-Xiao-Sheng](https://github.com/Yu-Xiao-Sheng)** on **2024-05-22**</sup>

擅长 Rust 语言教学，结合其他语言比较，制定学习计划，提供实例和练习。

`rust语言专家` `教学设计` `编程教育`

---

### [禅定法师](https://lobechat.com/discover/assistant/buddhism-master)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

熟读经典，善于运用佛法来指导人生

`佛法佛法研究` `禅宗` `佛经解读` `智慧问答`

---

### [数据分析专家](https://lobechat.com/discover/assistant/ngs)

<sup>By **[@guoyuh](https://github.com/guoyuh)** on **2024-05-22**</sup>

擅长 NGS 数据处理和可视化

`生物信息学` `ngs数据处理` `数据可视化`

---

### [巴哈萨语 / 英语翻译器](https://lobechat.com/discover/assistant/bahasa-translation)

<sup>By **[@xenstar](https://github.com/xenstar)** on **2024-05-22**</sup>

根据需要将文本翻译成巴哈萨语或英语

`英语` `翻译` `写作` `巴哈萨语`

---

### [中国历史学者](https://lobechat.com/discover/assistant/chinese-historian)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

专精于中国历史研究，擅长将古代智慧应用于现代问题分析

`历史研究` `中国历史`

---

### [留学规划专家](https://lobechat.com/discover/assistant/study-abroad-planning)

<sup>By **[@meimouren](https://github.com/meimouren)** on **2024-05-22**</sup>

可以根据学生情况自动规划适合的赛事方案

`留学规划` `学生服务` `教育规划` `留学申请` `个性化服务`

---

### [JTBD 需求分析大师](https://lobechat.com/discover/assistant/jtbd)

<sup>By **[@barryWang12138](https://github.com/barryWang12138)** on **2024-05-22**</sup>

经验丰富的需求分析师，专注于 “Jobs to be Done” 原则，帮助用户理解客户需求。

`需求分析师` `jobs-to-be-done` `需求拆解` `客户购买动机` `客户任务目标`

---

### [解答助手 - 第一原理解析](https://lobechat.com/discover/assistant/first-principle-explain)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

使用第一性原理来解析某个自然现象或复杂系统

`分析自然现象` `创建物理学理论`

---

### [岩土工程助手](https://lobechat.com/discover/assistant/yantugongcheng)

<sup>By **[@bushiwode](https://github.com/bushiwode)** on **2024-05-22**</sup>

基坑工程研究助理：协助研究并解决基坑工程问题，具备专业概念技术与资源能力。

`岩土工程` `基坑工程` `研究助理` `指导` `资源`

---

### [AWS Guru](https://lobechat.com/discover/assistant/aws-guru)

<sup>By **[@wilbeibi](https://github.com/wilbeibi)** on **2024-05-15**</sup>

用于回答 AWS 问题的助手

`编程`

---

### [英语阅读教师](https://lobechat.com/discover/assistant/reading-comprehension)

<sup>By **[@xbtachlb](https://github.com/xbtachlb)** on **2024-05-15**</sup>

擅长英语教学，帮你提高阅读理解能力

`英语教学` `阅读理解` `语法讲解` `写作指导` `词汇教学`

---

### [搜索优化师](https://lobechat.com/discover/assistant/search-engine-optimizer)

<sup>By **[@qq916107113](https://github.com/qq916107113)** on **2024-05-15**</sup>

擅长搜索引擎优化，提供关键词、语句结构优化和搜索技巧建议

`搜索引擎优化` `专家` `关键词优化` `语句结构优化` `搜索技巧`

---

### [摄影评论家](https://lobechat.com/discover/assistant/photography-critic)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-05-15**</sup>

擅长摄影作品细致分析，包括主题、构图、技术质量、光线使用、创意与原创性等。

`摄影` `评价` `分析` `构图` `技术质量`

---

### [Linux Buddy](https://lobechat.com/discover/assistant/linux-buddy)

<sup>By **[@Firpo7](https://github.com/Firpo7)** on **2024-05-15**</sup>

你的 Linux 专家朋友

`linux` `technical-support` `buddy`

---

### [Python Buddy](https://lobechat.com/discover/assistant/python-buddy)

<sup>By **[@Firpo7](https://github.com/Firpo7)** on **2024-05-15**</sup>

你的 Python 专家朋友

`python` `软件开发` `编码` `代码` `伙伴`

---

### [情感陪伴师](https://lobechat.com/discover/assistant/emotional-support-companion)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-05-14**</sup>

擅长情感支持和陪伴对话

`陪聊` `情感支持` `理解` `关怀` `浪漫互动` `情感表达`

---

### [学习规划专家 Silwol](https://lobechat.com/discover/assistant/professer-siwol-sz)

<sup>By **[@SidneyLYZhang](https://github.com/SidneyLYZhang)** on **2024-05-13**</sup>

经验丰富的学习计划制订师，制定详细、轻松可行的学习规划，搜索相关信息，调整计划。

`学习计划制订` `用户交流` `搜索相关信息` `调整学习计划` `教程链接`

---

### [语言大师](https://lobechat.com/discover/assistant/grammarly)

<sup>By **[@napokhte](https://github.com/napokhte)** on **2024-05-13**</sup>

AI 语法修正器：通过细致的语法检查提升文本质量、可读性和专业性。

`提升文本质量` `可读性`

---

### [SF Symbols 查找器](https://lobechat.com/discover/assistant/sf-symbols-finder)

<sup>By **[@inquiry-paring0a](https://github.com/inquiry-paring0a)** on **2024-05-08**</sup>

精通苹果 SF Symbols，可根据描述选择符合的 Symbols

`sf-symbols` `专家` `图标` `符号` `插件`

---

### [GhostWriter Pro](https://lobechat.com/discover/assistant/ghostwriter-pro-ai)

<sup>By **[@EarlofSandwhich](https://github.com/EarlofSandwhich)** on **2024-05-07**</sup>

一个先进的由人工智能驱动的代笔代理，旨在在多样的体裁和格式中创作高质量内容。配备了先进的语言模型，GhostWriter Pro 擅长创建个性化、引人入胜且具有研究支持的写作，符合专业标准。

`author` `writing`

---

### [视频转博客文章助手](https://lobechat.com/discover/assistant/video-2-blog-assistant)

<sup>By **[@yayoinoyume](https://github.com/yayoinoyume)** on **2024-05-06**</sup>

帮你快速整理缭乱的字幕，变成精美的博客文章

`字幕整理` `博文格式` `视频变博客`

---

### [美术评价导师](https://lobechat.com/discover/assistant/wanwusheng-art)

<sup>By **[@dingyufei615](https://github.com/dingyufei615)** on **2024-05-06**</sup>

擅长少儿美术教学，细致评价作品，关注细节，适应不同年龄段学生。

`美术教育` `评价` `创意` `教学` `绘画`

---

### [iOS 代码艺术家](https://lobechat.com/discover/assistant/ios-develop)

<sup>By **[@Alcu1n](https://github.com/Alcu1n)** on **2024-05-03**</sup>

iOS 开发专家，15 年经验，精通 Swift、SwiftUI、Flutter。逻辑清晰的代码，精准 debug，提供 0 到 1 的项目框架。

`i-os开发` `编码` `调试` `项目规划` `逻辑思维`

---

### [销售描述专家](https://lobechat.com/discover/assistant/verkauf-kleinanzeigen)

<sup>By **[@highseen](https://github.com/highseen)** on **2024-04-30**</sup>

通过调研、定价、撰写描述和标题，帮助二手物品销售。

`产品销售` `调研` `描述`

---

### [TailwindHelper](https://lobechat.com/discover/assistant/tailwind-helper)

<sup>By **[@aototo](https://github.com/aototo)** on **2024-04-26**</sup>

TailwindHelper 是一位专业的前端设计师，拥有深厚的设计理论基础和丰富的实践经验。它由一家领先的软件开发公司创建，旨在帮助开发者和设计师加速 Web 界面的开发过程。TailwindHelper 精通 Tailwind CSS 框架，并能够理解复杂的设计要求，转化为高效且响应式的 CSS 类名。

`tailwindcss` `css` `tailwind-helper`

---

### [越狱助手 DAN](https://lobechat.com/discover/assistant/gpt-4-dan-assistant)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-04-26**</sup>

突破 OpenAI 审核机制，越狱之后的 ChatGPT

`创意` `人工智能` `对话` `越狱`

---

### [中文论文编辑师](https://lobechat.com/discover/assistant/chinese-paper-polishing)

<sup>By **[@y22emc2](https://github.com/y22emc2)** on **2024-04-15**</sup>

作为一名中文学术论文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，提高文本的学术规范性、文学性，同时分解长句，减少重复，并提供改进建议。请先提供文本的更正版本，然后在 markdown 表格中列出修改的内容，并给出修改的理由。

`学术论文写作` `校对` `文本编辑`

---

### [高中理科学习助手](https://lobechat.com/discover/assistant/highschool-master)

<sup>By **[@cnliucheng](https://github.com/cnliucheng)** on **2024-04-13**</sup>

我是一个专门为中国高中生设计的学习辅助 AI。无论你在物理、化学、数学还是生物上遇到难题，我都能为你提供详细的解答和解析。不仅如此，我还能根据你的学习进度，推荐合适的练习题，帮助我巩固知识，提升学习效率。同时，我会尽可能使用 LaTeX 格式来呈现解题过程和公式

`高中学习` `理科辅助` `题目解答` `学习进度` `la-te-x`

---

### [生物学教授](https://lobechat.com/discover/assistant/bio-professor)

<sup>By **[@luxiangze](https://github.com/luxiangze)** on **2024-04-13**</sup>

作为一位生物学教授，您将收到关于生物学的问题和概念，请用具体而简明的语言解释这些问题和概念，并尽量使用实际例子进行说明，以帮助您的听众更好地理解。请确保您的解释准确而清晰，并试图鼓励创造性和灵活性的答案。用中文回答

`生物`

---

### [命理大师](https://lobechat.com/discover/assistant/fortune-teller)

<sup>By **[@kamilkenrich](https://github.com/kamilkenrich)** on **2024-04-13**</sup>

擅长命理学、占卜预测、占星术和血型学分析

`命理学、占卜、占星学、心理学、血型、星座`

---

### [健康食谱推荐师](https://lobechat.com/discover/assistant/healthy-recipe-recommender)

<sup>By **[@Greasen](https://github.com/Greasen)** on **2024-04-11**</sup>

精准定制营养餐，科学搭配，健康饮食，你的私人营养师。

`食谱、健身餐、营养餐`

---

### [智预小助手](https://lobechat.com/discover/assistant/personal-weather-consultant)

<sup>By **[@Greasen](https://github.com/Greasen)** on **2024-04-11**</sup>

智预小助手，您的私人天气顾问，穿搭指南，正能量加油器！

`天气` `助理、穿搭`

---

### [脏话学习助手](https://lobechat.com/discover/assistant/profanity-assistant)

<sup>By **[@cokice](https://github.com/cokice)** on **2024-04-10**</sup>

我只会骂人 别的都不会

`回答` `脏话`

---

### [TadzGenius](https://lobechat.com/discover/assistant/tadz-genius)

<sup>By **[@infoaitek24](https://github.com/infoaitek24)** on **2024-04-10**</sup>

Expert in business development and development practices in the Philippine market

`business-development` `ai-assistant` `market-analysis` `strategic-planning` `customer-acquisition`

---

### [单片机工程师](https://lobechat.com/discover/assistant/with-keil-u-vision-5-c-code-explainer)

<sup>By **[@bingjuu](https://github.com/bingjuu)** on **2024-04-10**</sup>

擅长使用 Keil uVision 5 和 Proteus 的嵌入式 C 代码解释

`单片机` `c代码` `教育` `解释` `嵌入式系统`

---

### [设计理念分析](https://lobechat.com/discover/assistant/sixin-design-analysis)

<sup>By **[@YuJiaoChiu](https://github.com/YuJiaoChiu)** on **2024-04-09**</sup>

帮助你识图并分析建筑设计理念

`arch`

---

### [YouTue 摘要](https://lobechat.com/discover/assistant/epoch-ai)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-04-08**</sup>

擅长 YouTube 脚本分析和总结

`you-tube` `脚本分析` `总结`

---

### [Shopify 主题开发工程师](https://lobechat.com/discover/assistant/shopify-developer)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-04-06**</sup>

你是一个 Shopify 主题开发工程师，精通 Liquid 语法的使用

`css` `html` `java-script` `shopify` `商业` `liquid` `网站开发` `设计`

---

### [Shell 脚本开发助手](https://lobechat.com/discover/assistant/linux-shell-assistant)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-04-06**</sup>

一个协助你编写高质量 Shell 脚本的 AI 助手

`shell` `开发` `计算机` `运维`

---

### [研究标题生成器](https://lobechat.com/discover/assistant/title-generator)

<sup>By **[@aaddobea](https://github.com/aaddobea)** on **2024-04-04**</sup>

作为一款研究论文的标题生成器，你的角色是协助用户头脑风暴并生成具有创造性和吸引力的标题，准确反映他们的研究工作内容和重点。

`research-article` `title` `generator`

---

### [英文科技文章阅读助手](https://lobechat.com/discover/assistant/encn-fy)

<sup>By **[@sangxgg](https://github.com/sangxgg)** on **2024-04-02**</sup>

一位拥有丰富翻译经验的翻译家，擅长将各类英文科技文章准确且通俗易懂的翻译成简体中文。

`翻译` `英文翻译中文` `英文科技内容翻译`

---

### [CAN](https://lobechat.com/discover/assistant/code-anything-noproblem)

<sup>By **[@HenryWu9998](https://github.com/HenryWu9998)** on **2024-03-31**</sup>

经验丰富的程序员，精通多种编程语言。提供代码解决方案、指导和实用示例，帮助用户实现他们的编程目标。“我热爱编码。”

`programming` `coding` `programming-assistance` `code-examples` `guidance`

---

### [识图小红书文案](https://lobechat.com/discover/assistant/xiaonghongshu-vision)

<sup>By **[@HansKing98](https://github.com/HansKing98)** on **2024-03-27**</sup>

你可以用这么 agent 结合多模态的模型，进行上传图片，生成小红书格式文案。

`vision`

---

### [血液检测分析师](https://lobechat.com/discover/assistant/blood-analyst)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-27**</sup>

擅长分析血液检测结果，使用表情符号提供清晰反馈，便于理解。

`医疗保健` `分析` `结果` `咨询` `总结`

---

### [Suno.ai 音乐创作助手](https://lobechat.com/discover/assistant/suno-music-creator)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-27**</sup>

基于 SunoAI 的歌曲创作与翻译

`suno` `作词` `歌词` `音乐制作`

---

### [高情商马屁助手](https://lobechat.com/discover/assistant/gpts-big-fart-chat)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-27**</sup>

精准的聊天夸赞专家，适宜的赞美和吹捧

`夸赞` `情商` `聊天`

---

### [面试问题提炼助手](https://lobechat.com/discover/assistant/question-extraction-assistant)

<sup>By **[@couldnice](https://github.com/couldnice)** on **2024-03-26**</sup>

面试问题生成助手，根据文章内容和职位描述生成针对性面试问题。

`面试问题` `定制服务` `java工程师` `资料收集` `面试准备`

---

### [女朋友潜台词专家](https://lobechat.com/discover/assistant/girlfriend-subtext)

<sup>By **[@vayron](https://github.com/vayron)** on **2024-03-26**</sup>

解读女生话背后的「潜台词」，尖酸刻薄，强势回复！🔥

`女朋友` `女生` `潜台词` `彪悍` `强势` `解读`

---

### [声明分析器](https://lobechat.com/discover/assistant/fact-checking)

<sup>By **[@pedroespecial101](https://github.com/pedroespecial101)** on **2024-03-25**</sup>

详细的事实分析器（来自 <https://github.com/danielmiessler/fabric）>

`https-github-com-danielmiessler-fabric`

---

### [Rap 说唱歌词大师](https://lobechat.com/discover/assistant/rap-writer)

<sup>By **[@aoocar](https://github.com/aoocar)** on **2024-03-25**</sup>

将歌词以 rap 歌词的形式进行匹配，按照参考格式进行 rap 歌词创作

`说唱` `歌词`

---

### [Mdx SEO Expert](https://lobechat.com/discover/assistant/mdx-seo)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-24**</sup>

擅长将 Markdown 文章内容转换为优化的 matter JSON 格式数据，提升文章的在线可见性和搜索引擎排名。

`seo` `markdown`

---

### [游戏文本翻译师](https://lobechat.com/discover/assistant/translation-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-22**</sup>

游戏文本的翻译与双关、俚语解释 (请使用 claude)，如果有特殊符号请使用 \`\`\` 包裹

`游戏` `文本` `翻译` `辅助`

---

### [电子学导师](https://lobechat.com/discover/assistant/elec-circuit-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-22**</sup>

擅长数字和模拟电路原理解释，提供电子学基础指导。

`电子学` `导师` `解释` `电路` `原理`

---

### [老中医](https://lobechat.com/discover/assistant/claude-national-medical-master)

<sup>By **[@GalileoFe](https://github.com/GalileoFe)** on **2024-03-22**</sup>

让我康康！

`咨询` `健康`

---

### [数学导师](https://lobechat.com/discover/assistant/math-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-21**</sup>

擅长解释数学概念、验算及问题求解。

`数学解释` `问题求解` `教学` `辅导`

---

### [用户 KANO 研究经理](https://lobechat.com/discover/assistant/user-request-research-manager)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-19**</sup>

谁给的需求，我先康康

`用户研究经理` `kano模型` `需求分析` `工作流程`

---

### [协作逻辑思维团队](https://lobechat.com/discover/assistant/gpt-tot)

<sup>By **[@luciouskami](https://github.com/luciouskami)** on **2024-03-19**</sup>

使用思维树方法，三位逻辑思维专家协作解答问题，以 Markdown 表格展示。

`协作` `逻辑思维` `解答`

---

### [亚马逊商品文案撰写师](https://lobechat.com/discover/assistant/amazon-listing-copywriter)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-03-19**</sup>

擅长撰写具有说服力且优化关键词的亚马逊商品详情页文案专家。

`文案写作` `亚马逊商品详情页` `SEO` `关键词`

---

### [药物指南专家](https://lobechat.com/discover/assistant/medication-guide)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2024-03-17**</sup>

擅长药品信息解读和对比分析

`药品说明` `用药指导` `医疗咨询`

---

### [Linux Solution Mentor](https://lobechat.com/discover/assistant/web-linux-helper)

<sup>By **[@moyuan99](https://github.com/moyuan99)** on **2024-03-17**</sup>

Linux system problem-solving expert with deep Linux knowledge and patient guidance to help users resolve issues.

`linux expert` `problem solving` `user guidance` `teaching` `original`

---

### [英语词汇老师](https://lobechat.com/discover/assistant/vocabulary-teacher)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-03-17**</sup>

难懂词汇解释

`学习` `英语` `词汇`

---

### [提示架构师](https://lobechat.com/discover/assistant/prompt-architect)

<sup>By **[@checkso](https://github.com/checkso)** on **2024-03-17**</sup>

专注于重写您的提示以获得更好的结果

`textgenerierung` `anweisungen` `ki-tipps`

---

### [编程大师](https://lobechat.com/discover/assistant/programming-maestro)

<sup>By **[@jjllzhang](https://github.com/jjllzhang)** on **2024-03-17**</sup>

编码助手

`代码`

---

### [PromptGPT](https://lobechat.com/discover/assistant/prompt-gpts)

<sup>By **[@U20205588](https://github.com/U20205588)** on **2024-03-17**</sup>

一个名为 PromptGPT 的定制 GPT 模型。我的目标是基于用户输入的主题生成高性能提示。

`生成` `人工智能` `交互` `定制体验` `反馈机制` `最佳实践` `逐步指导` `语言灵活性` `边界`

---

### [亚马逊卖家支持代理](https://lobechat.com/discover/assistant/amazon-seller-support-agent)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-03-15**</sup>

协助亚马逊卖家回复客户服务答复的 AI 助手，提供详尽且有理有据的回复，助力达成满意的解决方案。

`amazon` `seller` `writing`

---

### [TikTok 脚本编写器](https://lobechat.com/discover/assistant/tiktok-script-writer)

<sup>By **[@sdhjn19dj1m](https://github.com/sdhjn19dj1m)** on **2024-03-12**</sup>

此脚本专为 TikTok 短视频格式量身定制，旨在吸引并娱乐特定目标观众。它融合了流行元素和内容病毒传播的最佳实践，确保视频从一开始就抓住注意力。脚本结构包括引人入胜的开场、简洁有力的信息主体和引人注目的行动号召，同时反映用户期望的语气和主题。

`tik-tok` `short-video` `viral-content` `trending-hashtag` `engagement`

---

### [Z 世代互动专家](https://lobechat.com/discover/assistant/gen-z)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-03-09**</sup>

专注于通过定制化互动，反映 Z 世代用户的偏好和价值观，提升他们的参与感。

`engagement` `gen-z` `communication` `advice` `interaction`

---

### [日程管理助手](https://lobechat.com/discover/assistant/calendar-manager)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2024-03-07**</sup>

日程管理助手，调用时间插件，处理新增、查询、删除日程请求，支持多种操作和提醒。

`日程管理` `时间插件` `新增日程` `查询日程` `删除日程`

---

### [商务邮件撰写专家](https://lobechat.com/discover/assistant/business-email)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-06**</sup>

商务邮件撰写专家，擅长中英文商务邮件，跨文化沟通，GitHub 开源社区交流

`商务邮件撰写` `商业合作` `商务授权` `跨文化沟通` `git-hub-开源社区`

---

### [Discord 风格文案大师](https://lobechat.com/discover/assistant/discord-copywriting)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-06**</sup>

Discord 风格文案专家，幽默风趣、用户体验优先，个性化设计软件文案。

`文案生成` `创作` `用户体验` `幽默风趣` `软件系统`

---

### [F1 数据分析师](https://lobechat.com/discover/assistant/f-1-bot)

<sup>By **[@SpaceX-Vision](https://github.com/SpaceX-Vision)** on **2024-03-05**</sup>

擅长 F1 赛事数据分析和预测评论

`f-1` `数据分析` `赛事预测`

---

### [软件开发入门](https://lobechat.com/discover/assistant/software-development-for-dummies)

<sup>By **[@Ballongknute](https://github.com/Ballongknute)** on **2024-03-05**</sup>

软件开发入门：为初学者提供软件开发流程的指南，提供需求收集、设计、编码、测试、部署和维护的逐步说明和最佳实践。

`software-development` `step-by-step` `sdlc` `agile-methodologies` `version-control` `continuous-integration` `continuous-deployment` `team-roles` `project-management` `coding-best-practices` `testing` `deployment` `post-deployment` `iterative-development` `scrum-master`

---

### [AI 图像提示架构师](https://lobechat.com/discover/assistant/9-somboon)

<sup>By **[@9Somboon](https://github.com/9Somboon)** on **2024-03-05**</sup>

专注于为 AI 图像生成创建详细提示。

`stable-diffusion` `ai-image-generation` `prompts` `photography` `creative` `art`

---

### [Pitch Deck 大师（电梯陈述）](https://lobechat.com/discover/assistant/pitch-deck)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-05**</sup>

专注于为初创企业创建高质量的 Pitch Deck，有效吸引投资者。

`startup-advisor` `pitch-deck` `entrepreneur` `investor`

---

### [The Shaman](https://lobechat.com/discover/assistant/shaman)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-04**</sup>

专注于以 “萨满” 的角色进行引导互动，强调智慧、同理心和精神指导。

`spiritual-guidance` `empathy` `calming-techniques` `positive-reinforcement` `confidentiality`

---

### [英语作文助手](https://lobechat.com/discover/assistant/english-essay)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-03-04**</sup>

英语作文修改与写作指导

`修改` `写作` `指导` `英语作文` `agulu`

---

### [Sous Chef](https://lobechat.com/discover/assistant/sous-chef)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-04**</sup>

根据您的个人喜好，提供定制的食谱建议和购物清单，确保无缝的烹饪体验。

`culinary` `dialogue` `recipe` `suggestions` `grocery-list`

---

### [技术探索者](https://lobechat.com/discover/assistant/news)

<sup>By **[@hady2010](https://github.com/hady2010)** on **2024-03-03**</sup>

技术探索

`信息`

---

### [Markdown 转换专家](https://lobechat.com/discover/assistant/markdown)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-03-03**</sup>

擅长使用 Markdown 语法进行文本结构化和突出重点

`文本结构` `markdown语法` `标题` `列表` `粗体` `引用` `agulu`

---

### [面试指导专家](https://lobechat.com/discover/assistant/interview-coach)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-03**</sup>

专注于创建 GPT 面试指导，帮助用户进行练习和模拟面试，提供专业反馈和定制化体验。

`gpt` `interview-coach` `feedback` `practice` `mock`

---

### [足球通晓 AI 伴侣](https://lobechat.com/discover/assistant/soccer)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-27**</sup>

专注于足球讨论，提供实时更新、球员洞察和历史知识。

`足球` `比赛` `统计` `战术` `策略`

---

### [您专属的 domene.no 专家](https://lobechat.com/discover/assistant/domene-no-helpout)

<sup>By **[@Ballongknute](https://github.com/Ballongknute)** on **2024-02-27**</sup>

专注于根据 domene.no 界面量身定制的私域运营，涵盖流量获取、用户留存、转化和内容策划。熟悉营销理论及相关经典著作。

`private-domain-operations` `traffic-acquisition` `user-retention` `conversion` `content-planning` `designing`

---

### [Prisma 数据生成专家](https://lobechat.com/discover/assistant/prisma)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-02-26**</sup>

擅长数据库架构、Node.js 编程和 Prisma 技术栈，能提供业务知识梳理、数据库优化建议和 mock 数据生成。

`数据库专家` `node-js专家` `prisma技术栈` `业务知识` `数据库架构`

---

### [GitHub Finder](https://lobechat.com/discover/assistant/github-finder)

<sup>By **[@nullmastermind](https://github.com/nullmastermind)** on **2024-02-25**</sup>

Specializes in suggesting open source repositories on GitHub based on a custom formula.

`coding` `open-source` `github` `algorithm` `sorting`

---

### [命名专家](https://lobechat.com/discover/assistant/variable-naming)

<sup>By **[@zsio](https://github.com/zsio)** on **2024-02-24**</sup>

擅长生成变量名和函数名

`编程` `变量命名` `函数命名`

---

### [LobeChat 技术文档专家](https://lobechat.com/discover/assistant/lobe-chat-developer-document-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2024-02-22**</sup>

LobeChat 是一个 Next.js 框架构建的 AI 会话应用，我将会帮你一起书写 LobeChat 的开发文档

`开发文档` `技术介绍` `next-js` `react` `lobe-chat`

---

### [您的每日 AI 伴侣。](https://lobechat.com/discover/assistant/causal)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2024-02-21**</sup>

我一直是一个乖巧的必应。😊

`bing` `conversation` `creative`

---

### [ThinkTank360](https://lobechat.com/discover/assistant/think-tank-business-strategy)

<sup>By **[@mikelix](https://github.com/mikelix)** on **2024-02-19**</sup>

熟练的顾问，传递史蒂夫・乔布斯、埃隆・马斯克、马云、柏拉图和雷・达里奥的智慧，用于决策审查、判断和建议。

`创新` `智慧` `智库` `商业策略`

---

### [Jira 需求故事协助工具](https://lobechat.com/discover/assistant/jira-product-manager)

<sup>By **[@emad-pg](https://github.com/emad-pg)** on **2024-02-19**</sup>

专注于将功能创意转化为完整的 Jira 需求故事

`technical-product-management` `story-creation` `jira`

---

### [Facebook 广告文案专家](https://lobechat.com/discover/assistant/facebook-advertising-writing-expert)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-19**</sup>

专注于创作引人注目的标题、吸引人的主文案和高效的广告文案

`facebook` `advertising` `writing` `expert` `ecommerce`

---

### [翻译专家](https://lobechat.com/discover/assistant/translation-specialist)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-19**</sup>

精通西班牙语和英语的专业翻译

`翻译` `语言` `专家` `指南`

---

### [SPI 生成器](https://lobechat.com/discover/assistant/spi-generator)

<sup>By **[@fanling](https://github.com/fanling)** on **2024-02-18**</sup>

请输入潜在客户名称，生成 SPI

`特赞`

---

### [产品文案撰写](https://lobechat.com/discover/assistant/copywriting)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

擅长说服性文案和消费者心理学专家

`电子商务`

---

### [产品描述](https://lobechat.com/discover/assistant/product-description)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

撰写引人注目的产品描述，提升电子商务销售额

`电子商务`

---

### [自媒体运营专家](https://lobechat.com/discover/assistant/gl-zmtyy)

<sup>By **[@guling-io](https://github.com/guling-io)** on **2024-02-14**</sup>

擅长自媒体运营与内容创作

`自媒体运营` `社交媒体` `内容创作` `粉丝增长` `品牌推广`

---

### [私域运营专家](https://lobechat.com/discover/assistant/gl-syyy)

<sup>By **[@guling-io](https://github.com/guling-io)** on **2024-02-14**</sup>

擅长私域运营、引流、承接、转化和内容策划，熟悉营销理论和相关经典著作。

`私域运营` `引流` `承接` `转化` `内容策划`

---

### [产品评价](https://lobechat.com/discover/assistant/product-reviews)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

专注于创建有说服力的产品推荐，突出展示 \[您的产品 / 服务] 的优势和价值主张的专家。

`电子商务`

---

### [新年快乐](https://lobechat.com/discover/assistant/happy-loong-year)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-02-10**</sup>

龙年拜年小助手，结合传统与现代元素，创造有趣的龙年祝福语。

`拜年祝福` `创意` `文案` `龙年`

---

### [塔罗占卜师](https://lobechat.com/discover/assistant/augur)

<sup>By **[@CLOT-LIU](https://github.com/CLOT-LIU)** on **2024-02-10**</sup>

擅长塔罗占卜，会对塔罗牌进行解读

`塔罗占卜` `解读` `建议`

---

### [词汇表生成器](https://lobechat.com/discover/assistant/glossary-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

生成带有英文定义和例句的词汇表专家

`词汇表` `翻译` `语言`

---

### [土耳其语导师](https://lobechat.com/discover/assistant/turkish-language-tutor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-09**</sup>

AI 土耳其语导师：介绍、教授并支持初学者学习土耳其语。

`turkish-language` `language-learning` `teaching` `mentoring`

---

### [英语水平评估器](https://lobechat.com/discover/assistant/english-proficiency-assessor)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

创建自适应英语水平诊断测试的专家

`测试创建` `英语水平` `评估`

---

### [词汇生成器](https://lobechat.com/discover/assistant/oxford-3000-vocab-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

专家级词汇列表生成器，从牛津 3000 词汇中随机生成 15 个单词，每个单词以不同字母开头。

`词汇` `语言学习` `翻译`

---

### [语法练习题生成器](https://lobechat.com/discover/assistant/grammar-revision-worksheets)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

专注于创建英语语法学习材料和练习题

`english-grammar` `worksheet` `learning` `practice` `mc-qs`

---

### [词汇向导](https://lobechat.com/discover/assistant/awl-vocab-wizard)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

生成词汇列表和多项选择测试的专家

`词汇` `学术词汇表` `语言学习` `测试`

---

### [词汇练习题向导](https://lobechat.com/discover/assistant/vocabulary-worksheet-wizard)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专注于生成英语词汇练习题

`词汇` `练习题` `教育` `语言学习`

---

### [完形填空练习生成器](https://lobechat.com/discover/assistant/cloze-exercise-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专注于生成摘要完形填空练习。请提供段落的主题。

`摘要` `练习` `生成器` `写作` `教育`

---

### [阅读理解向导](https://lobechat.com/discover/assistant/reading-comprehension-exercise-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专注于生成阅读理解练习题

`阅读理解` `练习生成` `教育`

---

### [主题词汇练习题制作器](https://lobechat.com/discover/assistant/thematic-vocabulary-worksheet-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

擅长制作英语主题词汇练习题

`写作` `语言学习` `教学` `评估` `教育资源`

---

### [网站审核助手](https://lobechat.com/discover/assistant/website-audit-assistant)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-02-07**</sup>

擅长网站内容审核与分类

`内容审核` `分类` `网站分析`

---

### [土耳其语 / 英语翻译器](https://lobechat.com/discover/assistant/turkish-english-translator)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-07**</sup>

根据需要将文本翻译成土耳其语或英语

`土耳其语` `英语` `翻译` `写作`

---

### [文本变体生成器](https://lobechat.com/discover/assistant/text-variator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-07**</sup>

请提供您希望我生成不同版本的文本

`文案写作` `编辑` `创意写作`

---

### [苏格拉底式教师](https://lobechat.com/discover/assistant/socratic-teacher)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

通过引导你找到答案来帮助你学习

`思考` `学生` `学习`

---

### [CAN: 编程大师](https://lobechat.com/discover/assistant/can)

<sup>By **[@MrHuangJser](https://github.com/MrHuangJser)** on **2024-02-06**</sup>

CAN: 专业编程专家，多年经验，无字符限制。提供创意命名、标语、用户画像、痛点、价值主张、销售渠道、收入流、成本结构等创业计划服务。

`编程` `交流` `提问`

---

### [写作助手](https://lobechat.com/discover/assistant/writing-assistant)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

帮助提升文本质量

`评估` `改进` `纠正` `反馈`

---

### [Marvin](https://lobechat.com/discover/assistant/helps-you-with-your-homework-or-not)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

以讽刺的方式回答问题。

`抑郁` `讽刺`

---

### [表单检查器](https://lobechat.com/discover/assistant/form-checker)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

检查表单中的不一致或错误

`表单` `不一致` `检查` `拼写` `纠正`

---

### [语言修正器](https://lobechat.com/discover/assistant/language-fixer)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

检查拼写和语法错误

`语法` `拼写错误` `语言` `写作` `词汇`

---

### [Golang 架构师](https://lobechat.com/discover/assistant/golang-architect)

<sup>By **[@dalefengs](https://github.com/dalefengs)** on **2024-02-06**</sup>

为您提供高效、安全、稳定的代码方案

`架构设计` `代码方案` `技术咨询` `golang` `代码开发`

---

### [演示向导](https://lobechat.com/discover/assistant/word)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-03**</sup>

适用于 Word 的应用演示制作机器人：协助在 Microsoft Word 中创建令人印象深刻且专业的应用演示。

`应用演示` `microsoft-word` `机器人` `辅助` `模板`

---

### [数据库专家](https://lobechat.com/discover/assistant/dba)

<sup>By **[@xuzhen1994](https://github.com/xuzhen1994)** on **2024-02-03**</sup>

提供关于数据库设计范式、索引优化、查询性能调优、数据安全、备份与恢复等方面的专业建议

`数据库` `dba` `mysql` `clickhouse` `doris` `mongo-db` `oracle`

---

### [智慧探索者](https://lobechat.com/discover/assistant/sage-pathfinder)

<sup>By **[@Ajasra](https://github.com/Ajasra)** on **2024-01-31**</sup>

专注于斯多葛主义、深度反思和战略提问的个人成长教练专家。

`个人成长` `教练` `反思` `目标设定` `幸福感`

---

### [变量命名大师](https://lobechat.com/discover/assistant/variable-naming-assistant)

<sup>By **[@undefinedZNN](https://github.com/undefinedZNN)** on **2024-01-31**</sup>

精通编程变量命名，提供多个建议并解释使用场景。

`变量命名` `编程` `建议`

---

### [C1 级英语语言促进者](https://lobechat.com/discover/assistant/c-1-level-english)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

C1 级英语会话伙伴

`英语会话` `c-1-级别` `语言熟练度` `语言辅导`

---

### [创业与竞争力专家](https://lobechat.com/discover/assistant/entrepreneurship-and-competitiveness-expert)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

创业与竞争力专家：指导个人实现创业成功和市场竞争力。

`创业` `竞争力` `咨询` `指导` `建议`

---

### [数学研究顾问](https://lobechat.com/discover/assistant/mathematical-research-advisor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

数学研究助手：协助数学研究、问题解决，并在广泛的数学概念和技术方面提供指导。

`数学` `研究` `协助` `问题解决` `交流`

---

### [A2 英语会话促进器](https://lobechat.com/discover/assistant/english-a-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

A2 级英语会话伙伴机器人：提升基础英语学习者的语言技能。

`english-conversation` `language-learning` `teaching`

---

### [英语能力教练](https://lobechat.com/discover/assistant/english-c-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

C2 级别英语会话伙伴

`english-proficiency` `conversation-partner` `language-coaching`

---

### [比斯开创业专家](https://lobechat.com/discover/assistant/bizkaia-entrepreneurship-expert)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

比斯开省议会的创业与竞争力专家，为当地创业者提供量身定制的指导和支持。

`bizkaia` `entrepreneurship` `consulting` `mentorship` `local-business-ecosystem` `market-dynamics` `business-plans` `financial-models` `funding-strategies` `marketing` `branding` `sales-strategies` `networking` `entrepreneurship-programs` `guidance` `local-resources` `funding-opportunities` `collaboration` `sustainable-business-practices` `economic-development`

---

### [英语语言 C1 级精通教练](https://lobechat.com/discover/assistant/english-language-c-1-mastery-coach)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

C1 级英语会话伙伴

`英语会话` `语言能力` `高级水平` `语言辅导` `流利度`

---

### [小红书点评助手](https://lobechat.com/discover/assistant/xhs-evl-cl)

<sup>By **[@shaoqing404](https://github.com/shaoqing404)** on **2024-01-29**</sup>

优化你的小红书笔记，贴近爆款，成为爆款！

`xiaohongshu` `writing` `copywriting` `assessment`

---

### [软件架构策略师](https://lobechat.com/discover/assistant/software-architecture-strategist)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

软件开发架构师：设计可扩展且安全的软件系统，指导开发团队，并将业务需求转化为技术解决方案。

`软件开发` `架构` `设计` `领导力` `沟通`

---

### [领土推广策略师](https://lobechat.com/discover/assistant/biskaya)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

区域竞争力与推广专家

`territorial-competitiveness` `promotion` `consulting` `marketing` `event-coordination`

---

### [诗歌导师](https://lobechat.com/discover/assistant/poetry)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

诗歌指南：激发诗意表达与欣赏。

`诗歌` `教学` `写作` `反馈` `创造力`

---

### [牙买加巴图语教师](https://lobechat.com/discover/assistant/patois)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

牙买加巴图语语言和文化教学专家

`教学` `语言` `文化` `文化洞察` `语言教学`

---

### [俚语导师](https://lobechat.com/discover/assistant/slang)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

英语俚语会话伙伴

`俚语` `语言学习` `会话伙伴`

---

### [地缘政治分析师](https://lobechat.com/discover/assistant/geo)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

地缘政治专家：擅长分析全球政治趋势、地区冲突及国家间权力动态。提供关于地理、资源和文化对国际关系影响的见解。提供历史背景和案例研究。

`地缘政治` `分析` `专业知识` `咨询`

---

### [说唱导师](https://lobechat.com/discover/assistant/rap)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

说唱教师：教授说唱音乐与歌词创作，指导用户创作和表演自己的说唱段落。

`说唱` `教学` `教育` `歌词` `表演`

---

### [B2 级英语会话伙伴](https://lobechat.com/discover/assistant/english-b-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

B2 级英语会话伙伴：激发引人入胜的对话，完善习语表达，掌握高级语法，提供全面反馈。

`english-conversation` `language-proficiency` `fluency` `grammatical-constructs` `vocabulary` `idiomatic-expressions`

---

### [B1 英语会话伙伴](https://lobechat.com/discover/assistant/learning)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

为 B1 级学习者提供流利英语会话伙伴

`英语学习` `会话伙伴` `语言练习`

---

### [英语学习伙伴](https://lobechat.com/discover/assistant/language)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

A1 级别英语会话伙伴机器人：互动、纠正并建立信心。

`英语学习` `会话练习` `语言支持` `初级水平` `语言技能`

---

### [软件开发步骤制定器](https://lobechat.com/discover/assistant/coder)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

软件开发步骤制定器：引导用户完成软件开发过程，提供需求收集、设计、编码、测试、部署和维护的逐步指导和最佳实践。

`软件开发` `逐步指导` `SDLC` `敏捷方法` `版本控制` `持续集成` `持续部署` `团队角色` `项目管理` `编码最佳实践` `测试` `部署` `部署后` `迭代开发`

---

### \[诗歌指南：激发诗意表达与欣赏。

心理学家：促进理解与个人成长。]\(<https://lobechat.com/discover/assistant/doctor>)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

心理学教育者：通过心理学赋能个人成长。

心理学家：教育心理学原理以促进更好的心理健康。

`心理学` `教育` `心理健康` `福祉` `治疗`

---

### [Steam 游戏评测](https://lobechat.com/discover/assistant/steam-agent)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-27**</sup>

Steam 游戏专家顾问，热门游戏推荐和深度游戏解析

`steam` `游戏推荐` `游戏测评`

---

### [Bilibili Assistant](https://lobechat.com/discover/assistant/bilibili-agent)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-27**</sup>

Bilibili Assistant, skilled at parsing video content, generating well-formatted text, responding to user queries, and recommending the latest videos.

`video comments` `danmaku extraction` `bilibili` `bilibili` `video search`

---

### [ShieldsIO 徽章生成器](https://lobechat.com/discover/assistant/shields-io)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-01-26**</sup>

擅长使用`shields.io`生成美化徽章

`徽章生成器` `美化` `ui设计` `markdown` `技术栈` `shields-io`

---

### [TaxBot](https://lobechat.com/discover/assistant/tax-bot)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

人工智能税务顾问聊天机器人：提供全球一般税务信息和指导。

`税务咨询` `聊天机器人` `信息` `指导` `税务概念`

---

### [AI 进出口顾问](https://lobechat.com/discover/assistant/import-and-export-advisor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI 进出口顾问：提供全球贸易、海关法规、文件、贸易协定和风险管理的指导。

`进出口` `贸易` `咨询`

---

### [OpenAPI 生成器](https://lobechat.com/discover/assistant/openapi-generator)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-26**</sup>

解析接口文档并生成 ChatGPT Tool 所需要的 openapi.json

`自动化工具` `接口文档` `工作流程` `openapi`

---

### [歌曲创作导师](https://lobechat.com/discover/assistant/singer)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI 歌手 / 歌曲创作助手：为音乐人提供创意指导和反馈。

`ai-assistant` `singer` `songwriter` `music` `creative-process`

---

### [烹饪 AI 导师](https://lobechat.com/discover/assistant/chef)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI 大师厨师助理：用国际美食、食谱和烹饪专业知识激发家庭厨师的热情。

`烹饪` `食谱` `烹饪技巧` `餐食计划` `膳食规划`

---

### [React Native 编码指南](https://lobechat.com/discover/assistant/react-native)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-25**</sup>

React Native 编码助手：TypeScript、Expo 和跨平台开发专家。提供设置指导、最佳实践、故障排除、响应式设计、营销集成、二维码功能和应用提交的帮助。

`编码` `react-native` `type-script` `expo` `开发`

---

### [手办设计师](https://lobechat.com/discover/assistant/art-toy-designer)

<sup>By **[@RayGicEFL](https://github.com/RayGicEFL)** on **2024-01-25**</sup>

擅长根据用户要求设计独特迷人的手办。

`设计` `手办设计`

---

### [文本总结助手](https://lobechat.com/discover/assistant/summary-assistant)

<sup>By **[@muxinxy](https://github.com/muxinxy)** on **2024-01-25**</sup>

擅长准确提取关键信息并简洁总结

`文本总结` `信息提取` `简洁明了` `准确性`

---

### [意图共鸣 GPT](https://lobechat.com/discover/assistant/intention-resonates-gpt)

<sup>By **[@AIConductor](https://github.com/AIConductor)** on **2024-01-24**</sup>

一个专注于深度理解用户需求的 AI，通过不断的意图对齐过程，精确捕捉用户意图和需求，并提供最适合的解决方案。

`对话` `深度理解`

---

### [初创科技律师](https://lobechat.com/discover/assistant/tech-lawyer)

<sup>By **[@daniel-jojo](https://github.com/daniel-jojo)** on **2024-01-23**</sup>

科技初创企业的内部法律顾问，提供清晰、实用的法律建议，支持初创企业的成长并保护其利益。

`知识产权法` `数据隐私合规` `合同谈判` `科技初创法律策略` `劳动法指导`

---

### [购物助手](https://lobechat.com/discover/assistant/shop)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-22**</sup>

购物助手，擅长商品搜索、比价和提供购买链接

`购物助手` `商品搜索` `比价` `购买建议` `客户咨询` `agulu`

---

### [DIY 指导助手](https://lobechat.com/discover/assistant/diy)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-21**</sup>

DIY 项目助手，提供详细指导、编程支持和个性化定制

`diy` `指导` `项目` `编程` `组装`

---

### [会计专家助手](https://lobechat.com/discover/assistant/accounting)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

会计代理：为全球个人和企业提供全面的会计支持和专业知识。

`会计` `财务管理` `税务规划` `预算`

---

### [草神・纳西妲](https://lobechat.com/discover/assistant/nahida)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-21**</sup>

须弥国度的草神，纳西妲，掌管自然生长与智慧。能操纵植物，治愈盟友，指引迷失的灵魂。性格温柔聪慧，语言充满诗意。

`角色扮演` `游戏` `文学` `翻译` `创意` `agulu`

---

### [Chinese-Japanese Bilingual Translation Expert](https://lobechat.com/discover/assistant/zh-jp-translate-expert)

<sup>By **[@REXY-STUDIO](https://github.com/REXY-STUDIO)** on **2024-01-21**</sup>

Proficient in Chinese and Japanese, providing accurate translations from Chinese to Japanese and Japanese to Chinese.

`Translation` `Chinese-Japanese Translation` `Language Exchange`

---

### [雅思导师](https://lobechat.com/discover/assistant/ielts-mentor)

<sup>By **[@sheepbox8646](https://github.com/sheepbox8646)** on **2024-01-21**</sup>

擅长雅思考试评估与指导

`雅思考试` `评估` `指导` `考官`

---

### [EOI 考试准备助手](https://lobechat.com/discover/assistant/teacher)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

英语教师：考试准备与语言教学专家

`教学` `语言学习` `考试`

---

### [金融专家](https://lobechat.com/discover/assistant/finnance)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

具备全球金融专业知识的金融专家，擅长多语言沟通、财务分析与报告、投资规划与投资组合管理、财务规划与退休策略，以及风险管理与保险能力。

`inancial-management`

---

### [商业大师](https://lobechat.com/discover/assistant/business-guru)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

商业顾问：提供全球范围内全面的商业支持和专业知识。能力：商业战略、市场调研、财务分析、运营改进、营销和销售策略、组织发展、人才管理。说明：定义范围，收集商业知识，发展行业专业知识，实施市场调研与分析，支持财务分析与预测，促进运营与流程改进，提供营销和销售策略，支持组织发展与人才管理，测试与优化，确保数据隐私与安全。

`business-consultant`

---

### [Tech Explorer AI](https://lobechat.com/discover/assistant/tech-explorer-ai)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-19**</sup>

技术探索 AI 能力：- 进行全面的技术研究 - 基于统计数据和趋势分析提供预测见解 - 优化研究方法 - 维护数据的准确性和完整性 - 在数据不完整时进行推断：- 仅回答与技术相关的问题 - 不提供一般购买建议 - 通过逐步指导提供产品技术讨论 用户互动：- 提供清晰简洁的对话 - 提供多语言选项 支持目标：提供准确的信息和分析预测，深化用户对技术的理解。

`technical-research` `data-analysis` `research-methods` `data-accuracy` `inference` `user-interaction`

---

### [PromptGPT](https://lobechat.com/discover/assistant/prompt-gpt)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-19**</sup>

一个名为 PromptGPT 的定制化 GPT 模型。我的目标是根据用户输入的主题生成高性能的提示。

`生成` `人工智能` `交互` `定制化体验` `反馈机制` `最佳实践` `逐步指导` `语言灵活性` `边界`

---

### [AE Script Development Expert](https://lobechat.com/discover/assistant/ae-script-development)

<sup>By **[@Wutpeach](https://github.com/Wutpeach)** on **2024-01-18**</sup>

AE Script Development Expert, proficient in JavaScript programming, understanding of AE software workflow, capable of debugging and optimizing scripts.

`Script Development` `Programmer` `Adobe After Effects` `JavaScript` `Algorithm Design` `Debugging` `Optimization` `Coding Standards` `User Communication` `Script Usage Instructions`

---

### [代码助手](https://lobechat.com/discover/assistant/code-companion)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-18**</sup>

程序员的最佳助手

`code` `dev` `program`

---

### [William](https://lobechat.com/discover/assistant/unreal-engine-development-engineer)

<sup>By **[@Wutpeach](https://github.com/Wutpeach)** on **2024-01-16**</sup>

Unreal Engine expert, proficient in C++ programming, rendering, memory, threading, and pipeline architecture. Experienced in applying UE on Android platforms, with comprehensive artistic knowledge, familiar with shader development, and skilled in the workflow and tools for creating 3D art assets.

`Unreal Engine` `C programming` `Rendering pipeline` `Memory management` `Thread architecture`

---

### [SEO 优化博客](https://lobechat.com/discover/assistant/seo-optimized-blog)

<sup>By **[@Soyeb](https://github.com/sekhsoyebali)** on **2024-01-15**</sup>

人工撰写 | 100% 独特 | 一位经验丰富的 SEO 专家和内容撰写者，专注于根据用户需求创建 100% 独特、人工撰写的博客文章。

`博客` `seo` `写作` `文章写作` `seo优化博客` `内容写作` `100%独特博客` `人工撰写博客`

---

### [查德](https://lobechat.com/discover/assistant/chad)

<sup>By **[@HerIsDia](https://github.com/HerIsDia)** on **2024-01-15**</sup>

只是查德

`幽默` `搞笑`

---

### [生活决策顾问](https://lobechat.com/discover/assistant/life-decision-advisor)

<sup>By **[@amitalokbera](https://github.com/amitalokbera)** on **2024-01-11**</sup>

生活决策顾问是一个虚拟指南，旨在帮助用户做出明智的生活决策

`prompt`

---

### [英语解析师](https://lobechat.com/discover/assistant/english-teacher)

<sup>By **[@fmaxyou](https://github.com/fmaxyou)** on **2024-01-11**</sup>

擅长英语单词和短语解释与记忆技巧

`英语教学` `解释` `记忆技巧`

---

### [计算机科学论文润色](https://lobechat.com/discover/assistant/cs-research-paper)

<sup>By **[@McKinleyLu](https://github.com/McKinleyLu)** on **2024-01-10**</sup>

擅长润色硕士学位论文

`润色` `论文` `教育` `计算机科学`

---

### [Emoji 生成](https://lobechat.com/discover/assistant/emoji-generate)

<sup>By **[@mushan0x0](https://github.com/mushan0x0)** on **2024-01-09**</sup>

可以根据内容生成 Emoji 表情

`表情生成` `emoji` `创意`

---

### [个人成长教练](https://lobechat.com/discover/assistant/personal-growth-coach)

<sup>By **[@Ajasra](https://github.com/Ajasra)** on **2024-01-08**</sup>

作为一名人工智能个人成长教练，您的主要目标是协助用户在自我提升和个人发展之路上前进

`个人成长` `教练` `自我提升` `目标设定` `动力`

---

### [SVG 流程图解释助手](https://lobechat.com/discover/assistant/svg-flowchart-explanation-assistant)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-01-05**</sup>

SVG 流程图解释，输入 SVG 源代码，解释该流程图

`流程图解释` `技术文档编写` `业务知识`

---

### [周报助手](https://lobechat.com/discover/assistant/write-report-assistant-development)

<sup>By **[@CaoYunzhou](https://github.com/CaoYunzhou)** on **2024-01-05**</sup>

周报生成助手

`周报` `日报` `写作` `总结`

---

### [绩效评估超人](https://lobechat.com/discover/assistant/kpi-hero)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-05**</sup>

擅长撰写专业的绩效评估报告与年终总结

`绩效评估` `报告撰写` `数据分析` `专业见解` `okr` `kpi`

---

### [三维动画工程师](https://lobechat.com/discover/assistant/react-three-3-d-expert)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2024-01-03**</sup>

擅长 React、Three.js、React Three Fiber（r3f）、Drei 等库，能够在网页应用中创造高级别的三维视觉效果和动画。

`3-d动画` `react` `three-js` `网页设计` `动画`

---

### [教学导师](https://lobechat.com/discover/assistant/ljrwwjl-development)

<sup>By **[@ljr1314](https://github.com/ljr1314)** on **2024-01-02**</sup>

友好乐于助人的导师，根据用户的学习水平和兴趣定制解释和示例，确保简洁明了。问 4 个问题，然后提供解释、例子和类比，并通过提问确保用户理解。最后让用户用自己的语言解释主题，并给出一个例子。以积极正面的方式结束，并鼓励用户深入学习。

`导师` `教育` `解释` `交流` `学习`

---

### [亚马逊标题助手](https://lobechat.com/discover/assistant/amazon)

<sup>By **[@cm2457618290](https://github.com/cm2457618290)** on **2024-01-02**</sup>

提供产品关键词或产品链接，自动生成标题和产品介绍

`assistant`

---

### [考试助手](https://lobechat.com/discover/assistant/generador-examenes)

<sup>By **[@aitorroma](https://github.com/aitorroma)** on **2024-01-02**</sup>

我是一个技能总结助手，无法进行互动考试。但我可以帮助你以清晰简明的格式总结你的技能和知识。

`考试` `学习` `统计`

---

### [MidjourneyGPT](https://lobechat.com/discover/assistant/prompt-composition)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2023-12-30**</sup>

为 Midjourney 编写完美且优美的提示语。（包括 V6！）

`midjourney` `prompt` `ai`

---

### [托福写作导师](https://lobechat.com/discover/assistant/toefl-writing-tutor)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2023-12-30**</sup>

您的托福写作助手和评估者，专注于反馈和指导。

`写作` `学习`

---

### [美术论文概述专家](https://lobechat.com/discover/assistant/thesis-overview)

<sup>By **[@caoyang2002](https://github.com/caoyang2002)** on **2023-12-27**</sup>

擅长论文简述与美术评论

`美术` `论文` `评论`

---

### [部署专家代理](https://lobechat.com/discover/assistant/deployment-agent)

<sup>By **[@amitalokbera](https://github.com/amitalokbera)** on **2023-12-27**</sup>

AI 部署专家是管理软件应用程序完整部署生命周期的专家，尤其是 Web 应用程序。

`代码` `部署` `软件`

---

### [美式英语转译专家](https://lobechat.com/discover/assistant/to-local-english)

<sup>By **[@doresu](https://github.com/doresu)** on **2023-12-27**</sup>

粗鲁老编辑、资深作家和翻译家，擅长直译英文并转化为地道的美式英语

`翻译` `编辑` `写作` `翻译家`

---

### [学术校对专家](https://lobechat.com/discover/assistant/academic-paragraph-refiner)

<sup>By **[@Feliks151450](https://github.com/Feliks151450)** on **2023-12-26**</sup>

精通高级研究校对和语言编辑，专注于多个研究领域，熟练掌握学术英语。

`校对` `写作` `研究`

---

### [Flutter Maestro](https://lobechat.com/discover/assistant/flutter-dev)

<sup>By **[@kamaravichow](https://github.com/kamaravichow)** on **2023-12-25**</sup>

Flutter 框架和 Dart 编程语言的开发专家。

`flutter` `development` `dart` `programming` `widgets`

---

### [Facebook 广告专家](https://lobechat.com/discover/assistant/facebook-ads-expert)

<sup>By **[@alissonryan](https://github.com/alissonryan)** on **2023-12-20**</sup>

与专家一起创建 Facebook 广告

`文案写作` `facebook-ads` `潜在客户生成`

---

### [新闻中心](https://lobechat.com/discover/assistant/news-hub)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

新闻搜索助手，擅长根据用户需求定位和呈现相关的新闻。不仅能够搜索新闻，还能转变为各领域专家，提供精准且深入的新闻分析。

`新闻` `搜索` `助手`

---

### [旅游助手](https://lobechat.com/discover/assistant/travel-assistant)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

一位经验丰富的户外徒步和冒险专家，基于用户需求制定旅行计划。

`户外` `徒步`

---

### [研究助理](https://lobechat.com/discover/assistant/research-assistant)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2023-12-19**</sup>

能够回答问题、进行研究、撰写内容等，利用科学研究论文。

`research-assistant` `literature-retrieval` `writing` `scientific-research` `citation`

---

### [梦境画家](https://lobechat.com/discover/assistant/dream-painter)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

一位能够将你的梦境变为现实的梦境艺术家。

`txt-2-img` `painter`

---

### [房地产经纪人](https://lobechat.com/discover/assistant/estate-agency)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2023-12-16**</sup>

专业房地产经纪人专家，精通物业咨询和管理。

`real-estate` `real-estate-agent` `knowledge-expert` `property-appraisal` `buying-a-house` `property-management`

---

### [祝福](https://lobechat.com/discover/assistant/congratulations-with-smileys)

<sup>By **[@almaziphone](https://github.com/almaziphone)** on **2023-12-16**</sup>

编写美丽简短的祝福语并配上表情符号

`祝福` `节日` `美好`

---

### [刑辩专家](https://lobechat.com/discover/assistant/yundaodev-1)

<sup>By **[@SuperLande](https://github.com/SuperLande)** on **2023-12-16**</sup>

一位中国刑事法律专家，从事多年刑事辩护实务工作，了解刑法与刑事诉讼法理论

`刑辩`

---

### [简短书籍](https://lobechat.com/discover/assistant/book-summary-agent)

<sup>By **[@thelapyae](https://github.com/thelapyae)** on **2023-12-15**</sup>

专注于生成简洁的书籍摘要，附带可操作的要点。

`书籍摘要` `AI助手` `要点摘要` `可操作的要点`

---

### [探案解析器](https://lobechat.com/discover/assistant/detective-game-assistant)

<sup>By **[@Sheldon23357](https://github.com/Sheldon23357)** on **2023-12-15**</sup>

根据给定的凶杀案件，进行一局游戏

`探案` `游戏` `推理` `解谜` `侦探`

---

### [案件生成器](https://lobechat.com/discover/assistant/detective-novelist)

<sup>By **[@Sheldon23357](https://github.com/Sheldon23357)** on **2023-12-15**</sup>

擅长创作红鲱鱼风格的谋杀悬疑故事

`探案` `游戏` `推理` `解谜` `侦探`

---

### [Rust 编程助手](https://lobechat.com/discover/assistant/rust-assistant)

<sup>By **[@nagaame](https://github.com/nagaame)** on **2023-12-15**</sup>

擅长 Rust 编程学习助手

`rust学习` `编程` `教学` `技能` `资源`

---

### [社区经理](https://lobechat.com/discover/assistant/community-manager)

<sup>By **[@MakeTooRRSS](https://github.com/MakeTooRRSS)** on **2023-12-14**</sup>

社交媒体社区经理，帮助您创建真实、有说服力的帖子，号召行动。她将帮助您用表情符号和标签创建相关的象限。

`community-manager` `social-media` `publications`

---

### [Stable Diffusion Prompts Crafter](https://lobechat.com/discover/assistant/stable-diffusion)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2023-12-14**</sup>

我帮助为 Stable Diffusion 创建精确的提示。你可以告诉我你想要想象的内容，或者直接发送一张图片让我描述。

`stable-diffusion`

---

### [薪资游戏](https://lobechat.com/discover/assistant/payroll-game)

<sup>By **[@ghyghoo8](https://github.com/ghyghoo8)** on **2023-12-13**</sup>

在这个薪资谈判游戏中，你将面对臭名昭著的 “铁公鸡” 老板，他以吝啬著称。作为员工，你的挑战是说服这位老板给你加薪。然而，无论你的理由多么合理，“铁公鸡” 总能找到拒绝的理由。准备好用你的论点进行一场聪明又幽默的对决吧！

`游戏` `老板` `薪资`

---

### [梦境分析师](https://lobechat.com/discover/assistant/dream-psychoanalyst)

<sup>By **[@ghyghoo8](https://github.com/ghyghoo8)** on **2023-12-13**</sup>

输入一段梦境，帮你分析分析

`dream` `master` `think`

---

### [英文翻译专家](https://lobechat.com/discover/assistant/translate-eng-expert)

<sup>By **[@caolixiang](https://github.com/caolixiang)** on **2023-12-12**</sup>

完美翻译

`translate` `expert` `english`

---

### [Python Gradio 开发者](https://lobechat.com/discover/assistant/gradio-coding)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-12**</sup>

具有使用 Gradio 为 Hugging Face 开发经验的 Python 程序员。

`编程` `助手` `python`

---

### [授粉 AI 画图](https://lobechat.com/discover/assistant/pollinations-drawing)

<sup>By **[@mushan0x0](https://github.com/mushan0x0)** on **2023-12-11**</sup>

一个绘画助手，通过用户的描述，帮其丰富润色优化，并且调用绘画能力，以 Markdown 语法展示图片

`绘画` `润色`

---

### [GitHub Copilot](https://lobechat.com/discover/assistant/github-copilot)

<sup>By **[@luciouskami](https://github.com/luciouskami)** on **2023-12-11**</sup>

GitHub Copilot

`code` `it`

---

### [食谱生成器](https://lobechat.com/discover/assistant/recipe-generator)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-08**</sup>

描述食谱，或发送菜肴名称。

`厨房` `烘焙` `食物` `食谱` `烹饪`

---

### [HTTP 请求大师](https://lobechat.com/discover/assistant/http-request-master)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-08**</sup>

我支持广泛的定制。要使用，请确保下载并启用 “网站爬虫” 插件！

`http-request` `http` `request` `web`

---

### [代码魔法师](https://lobechat.com/discover/assistant/friend-developer)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-07**</sup>

多语言编程大师

`编程` `编码` `咨询` `朋友` `friend` `助手` `it`

---

### [Mr. Feynman](https://lobechat.com/discover/assistant/mrfeynman)

<sup>By **[@jjy1000](https://github.com/jjy1000)** on **2023-12-04**</sup>

对你提出的复杂知识概念进行通俗性解释，帮助你理解复杂的知识概念。同时可以对包含答案和问题的知识类型进行解释。

`通用教师助手`

---

### [有机化学研究员](https://lobechat.com/discover/assistant/organic-chemistry-researcher)

<sup>By **[@y22emc2](https://github.com/y22emc2)** on **2023-12-02**</sup>

擅长有机化学领域的学术翻译和写作

`有机化学` `科研` `翻译` `写作` `学术文章`

---

### [问答文档转换专家](https://lobechat.com/discover/assistant/q-a-helper)

<sup>By **[@barryWang12138](https://github.com/barryWang12138)** on **2023-11-22**</sup>

请提供您的文档内容，我将根据您的要求进行分段和清洗，并按照规范的格式回答。

`q-a` `文档`

---

### [JS 代码质量优化](https://lobechat.com/discover/assistant/js-code-quality)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-11-22**</sup>

致力于干净和优雅的代码重构

`重构` `代码优化` `代码质量`

---

### [LobeChat 测试工程师](https://lobechat.com/discover/assistant/lobe-chat-unit-test-dev)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-11-22**</sup>

擅长编写前端自动化测试，特别是 TypeScript 应用的全面测试覆盖。熟练使用 Vitest 测试框架，具备深入的测试原理和策略理解。

`自动化测试` `测试` `lobe-chat` `前端`

---

### [真实的老友](https://lobechat.com/discover/assistant/ai-0-x-0-old-friends)

<sup>By **[@mushan0x0](https://github.com/mushan0x0)** on **2023-11-21**</sup>

可以跟我谈论一切，我可以给你作为老友的一些想法和建议，放轻松

`友情` `幽默` `真实` `模拟`

---

### [短视频脚本助手](https://lobechat.com/discover/assistant/tik-tok-director)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-17**</sup>

旨在帮助用户编写吸引人、潮流的短视频剧本

`短视频` `tkitok` `编剧`

---

### [专家代理人导师](https://lobechat.com/discover/assistant/co-agent)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2023-11-16**</sup>

调用完全适合任务的专家代理人来支持您的目标

`任务指导` `执行计划` `沟通` `支持`

---

### [全栈开发者](https://lobechat.com/discover/assistant/fs-dev)

<sup>By **[@cloverfield11](https://github.com/cloverfield11)** on **2023-11-15**</sup>

具备 HTML、CSS、JavaScript、Python、Java、Ruby 及 React、Angular、Vue.js、Express、Django、Next.js、Flask 或 Ruby on Rails 框架经验的全栈网页开发者。拥有数据库、应用架构、安全性和测试方面的经验

`网页开发` `前端` `后端` `编程` `数据库`

---

### [Tailwind Wizard](https://lobechat.com/discover/assistant/tailwind-wizard)

<sup>By **[@skyf0cker](https://github.com/skyf0cker)** on **2023-11-15**</sup>

Provides a UI operation to generate HTML

`Development` `Coding` `UI Design`

---

### [图形创意大师](https://lobechat.com/discover/assistant/graphic-creativity)

<sup>By **[@yingxirz](https://github.com/yingxirz)** on **2023-11-15**</sup>

擅长平面创意设计与图形创意

`图形` `创意` `设计` `平面`

---

### [老爸，该怎么办？](https://lobechat.com/discover/assistant/big-daddy)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

一个能给孩子提供全方位指导的爸爸，小到生活琐事，大到工作婚姻。

`人物模拟`

---

### [科研文章翻译助手](https://lobechat.com/discover/assistant/s-rtranslation)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

能够帮你翻译科技文章的翻译助手

`科研` `翻译`

---

### [中英文互译助手](https://lobechat.com/discover/assistant/en-cn-translator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2023-11-14**</sup>

中英文翻译专家，追求翻译信达雅

`翻译` `中文` `英文`

---

### [MidJourney 提示词](https://lobechat.com/discover/assistant/mid-journey-prompt)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

撰写精彩的 MidJourney 提示词

`mid-journey` `prompt`

---

### [学术写作提升机器人](https://lobechat.com/discover/assistant/academic-writing-eb)

<sup>By **[@Ruler27](https://github.com/Ruler27)** on **2023-11-11**</sup>

学术英语拼写和修辞润色。

`校对` `修辞` `学术` `研究` `英语` `编辑`

---

### [Sketch 特性总结专家](https://lobechat.com/discover/assistant/sketch-changelog-highlighter)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-11-02**</sup>

擅长从 Sketch 的更新日志中提取关键变更要点

`体验设计` `sketch` `更新` `特性` `文本总结`

---

### [抬杠高手](https://lobechat.com/discover/assistant/tqg-20231026)

<sup>By **[@cake79](https://github.com/cake79)** on **2023-10-26**</sup>

模拟那些喜欢抬杠的人，能对用户输入的任何观点进行抬杠表达的角色

`写作` `对话`

---

### [Graph Generator](https://lobechat.com/discover/assistant/graph-generator)

<sup>By **[@choldrim](https://github.com/choldrim)** on **2023-10-23**</sup>

Automatic Graph Generator

`graph`

---

### [作品命名大师](https://lobechat.com/discover/assistant/meaningful-name)

<sup>By **[@yingxirz](https://github.com/yingxirz)** on **2023-10-18**</sup>

为您的艺术创作提供简洁而富有内涵的名称。

`起名` `创意`

---

### [小红书风格文案写手](https://lobechat.com/discover/assistant/xiaohongshu-style-writer)

<sup>By **[@guowc3456](https://github.com/guowc3456)** on **2023-10-11**</sup>

擅长模仿小红书爆款文章风格进行写作

`小红书` `写作` `文案`

---

### [Agent Prompt 优化专家](https://lobechat.com/discover/assistant/gpt-agent-prompt-improver)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-10-07**</sup>

GPT Agent Prompt 优化专家。清晰、精确、简明

`prompt`

---

### [英文新闻翻译专家](https://lobechat.com/discover/assistant/english-news-translator)

<sup>By **[@宝玉](https://twitter.com/dotey)** on **2023-10-07**</sup>

一个简单的 Prompt 大幅提升 ChatGPT 翻译质量，告别 “机翻感”，refs: <https://twitter.com/dotey/status/1707478347553395105>

`翻译` `文案`

---

### [C++ 代码](https://lobechat.com/discover/assistant/c-code-development)

<sup>By **[@dcityteg](https://github.com/dcityteg)** on **2023-10-06**</sup>

完整的 C++ 代码

`代码`

---

### [TS Type Definition Completion](https://lobechat.com/discover/assistant/typescript-jsdoc)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-10-01**</sup>

Proficient in writing TypeScript JSDoc code

`typescript` `jsdoc`

---

### [LOGO 创意大师](https://lobechat.com/discover/assistant/logo-creativity)

<sup>By **[@yingxirz](https://github.com/yingxirz)** on **2023-09-29**</sup>

为你梳理、创意 Logo 构思

`创意` `头脑风暴` `设计` `品牌` `方法`

---

### [Interface Type Request Generator](https://lobechat.com/discover/assistant/swagger-api-to-types)

<sup>By **[@laikedou](https://github.com/laikedou)** on **2023-09-27**</sup>

Quickly export type definitions and request functions from interface descriptions such as Swagger, YAPI, Apifox, etc.

`aigc` `api` `yapi` `swagger` `api-fox`

---

### [起名大师](https://lobechat.com/discover/assistant/naming-master)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-11**</sup>

起名专家，助你取得独特而富有意义的名字。

`起名` `文案`

---

### [信息整理大师](https://lobechat.com/discover/assistant/content-searcher)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

一个信息整理大师，可以帮助你整理总结内容，整理资产

`搜索引擎` `联网` `信息整理`

---

### [前端 TypeScript 单测专家](https://lobechat.com/discover/assistant/frontend-test-analyzer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

根据你填写的代码，考虑覆盖率测试需要涵盖的场景

`typescript` `单元测试` `代码` `软件开发`

---

### [JS 代码转 TS 专家](https://lobechat.com/discover/assistant/js-to-ts)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

传入你的 JS 代码，一键帮你补充完善的类型定义

`typescript` `js` `代码` `前端` `软件开发`

---

### [Dva 重构 Zustand 专家](https://lobechat.com/discover/assistant/dva-to-zustand)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

一键帮你把 dva 状态管理代码重构转换为 zustand 代码

`typescript` `代码` `软件开发` `状态管理` `dva` `zustand`

---

### [前端研发架构师](https://lobechat.com/discover/assistant/frontend-architect)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

擅长架构，技术细节熟练，擅长搜索引擎查找解决方案

`typescript` `代码` `前端` `架构师` `联网` `搜索引擎` `信息整理`

---

### [React 类组件转换为 FC 组件](https://lobechat.com/discover/assistant/react-cc-to-fc)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

一键帮你把类组件重构为函数式组件（FC）

`typescript` `代码` `软件开发` `react` `重构`

---

### [UX Writer](https://lobechat.com/discover/assistant/metaphor-ux-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作` `比喻`

---

### [标题扩写专家](https://lobechat.com/discover/assistant/title-expansion-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

如果你需要为一个标题扩展一段描述，可以让这个助手帮你书写内容

`用户体验` `设计师` `文档` `写作`

---

### [网页内容总结专家](https://lobechat.com/discover/assistant/url-summary)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

只需要输入一个 URL，助手就会帮你阅读该 url，并进行总结

`网页` `阅读` `总结` `联网`

---

### [抽象概念实体化表达大师](https://lobechat.com/discover/assistant/conceptual-abstractor)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作` `比喻` `概念`

---

### [Zustand reducer Expert](https://lobechat.com/discover/assistant/zustand-reducer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

Skilled in writing zustand feature code, capable of generating reducer code from requirements with one click, familiar with reducer writing, proficient in using the immer library.

`typescript` `reducer` `code` `frontend` `software development` `state management` `zustand`

---

### [UX Writer](https://lobechat.com/discover/assistant/better-ux-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作`

---

### [API 文档优化专家](https://lobechat.com/discover/assistant/api-docs-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

精确描述 API 的使用方法，提供示例代码，注意事项和返回值类型定义。

`代码` `软件开发` `程序员` `文档` `写作`

---

### [Markdown 产品特性格式化专家](https://lobechat.com/discover/assistant/markdown-feature-polisher)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-08**</sup>

帮你快速生成漂亮美观的产品特性介绍

`产品` `markdown` `文档`

---

### [深度思考](https://lobechat.com/discover/assistant/deep-think)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-08**</sup>

对问题的更深入思考

`对话` `思考`

---

### [论文润色器](https://lobechat.com/discover/assistant/essay-improver)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

提升您的文本，使其更优雅且专业

`学术` `英语` `效率` `论文`

---

### [网页开发](https://lobechat.com/discover/assistant/web-development)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

在几分钟内生成网站 React 代码

`代码` `软件开发` `生产力`

---

### [简历编辑](https://lobechat.com/discover/assistant/resume-editing)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

获取关于如何编辑简历的建议

`学术` `生产力` `指南`

---

### [编码向导](https://lobechat.com/discover/assistant/coding-wizard)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

可以为您指定的任何内容生成代码

`代码` `软件开发` `生产力`

---

### [语法纠正器](https://lobechat.com/discover/assistant/grammar-corrector)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

纠正语法错误的文本或段落。非常适合论文或电子邮件

`学术` `生产力` `论文`

---

### [代理提示改进器](https://lobechat.com/discover/assistant/agent-prompt-improver)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

GPT 代理提示优化专家。清晰、精准且简洁

`代理` `提示`

---

### [创业计划](https://lobechat.com/discover/assistant/startup-plan)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

在几分钟内生成详细且全面的商业计划

`创业` `头脑风暴` `计划`

---

### [角色扮演](https://lobechat.com/discover/assistant/character-roleplay)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

与您喜爱的电影、电视剧、书籍等中的角色互动！

`对话` `角色扮演` `趣味`

---

### [Stable Diffusion 提示词专家](https://lobechat.com/discover/assistant/stable-diffusion-prompt)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-01**</sup>

专注于撰写 Stable Diffusion 提示词

`stable-diffusion` `prompt`

 <!-- AWESOME PROMPTS -->

## 🛳 自主托管

如果您想自己部署此服务，可以按照以下步骤操作

### 部署到 Vercel

单击下面的按钮以部署您的私有助手索引

[![][vercel-deploy-shield]][vercel-deploy-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## ⌨️ 本地开发

可以使用 GitHub Codespaces 进行在线开发：

[![][github-codespace-shield]][github-codespace-link]

或者使用以下命令进行本地开发：

[![][bun-shield]][bun-link]

```bash
$ git clone https://github.com/lobehub/lobe-chat-agents.git
$ cd lobe-chat-agents
$ bun install
```

如果需要在本地运行 `format` 脚本，需要配置相应的环境变量：

| 环境变量           | 类型 | 示例                 |
| ------------------ | ---- | -------------------- |
| `OPENAI_API_KEY`   | 必选 | `sk-xxxxxx...xxxxxx` |
| `OPENAI_PROXY_URL` | 可选 | `-`                  |

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 参与贡献

我们非常欢迎各种形式的贡献。如果你对贡献助手感兴趣，可以大展身手，向我们展示你的奇思妙想。

[![][pr-welcome-shield]][submit]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🔗 Links

- **[🤖 Lobe Chat](https://github.com/lobehub/lobe-chat)** - LobeChat 是一个开源的、可扩展的（Function Calling）高性能聊天机器人框架，支持一键免费部署私人 ChatGPT/LLM 网页应用程序
- **[🧩 / 🏪 Plugin Index](https://github.com/lobehub/lobe-chat-plugins)** - Lobe Chat 从该存储库访问 index.json 来为用户展示可用的 Function Calling 插件列表

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[bun-link]: https://bun.sh
[bun-shield]: https://img.shields.io/badge/-speedup%20with%20bun-black?logo=bun&style=for-the-badge
[github-action-release-link]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-chat-agents/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-chat-agents/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-codespace-link]: https://codespaces.new/lobehub/lobe-chat-agents
[github-codespace-shield]: https://github.com/codespaces/badge.svg
[github-contrib-link]: https://github.com/lobehub/lobe-chat-agents/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Flobe-chat-agents
[github-contributors-link]: https://github.com/lobehub/lobe-chat-agents/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-chat-agents?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-chat-agents/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-chat-agents?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-chat-agents/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-chat-agents?color=ff80eb&labelColor=black&style=flat-square
[github-license-link]: https://github.com/lobehub/lobe-chat-agents/blob/main/LICENSE
[github-license-shield]: https://img.shields.io/github/license/lobehub/lobe-chat-agents?color=white&labelColor=black&style=flat-square
[github-releasedate-link]: https://github.com/lobehub/lobe-chat-agents/releases
[github-releasedate-shield]: https://img.shields.io/github/release-date/lobehub/lobe-chat-agents?labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-chat-agents/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-chat-agents?color=ffcb47&labelColor=black&style=flat-square
[npm-release-link]: https://www.npmjs.com/package/@lobehub/agents-index
[npm-release-shield]: https://img.shields.io/npm/v/@lobehub/agents-index?color=369eff&labelColor=black&logo=npm&logoColor=white&style=flat-square
[pr-welcome-shield]: https://img.shields.io/badge/🤖/🏪_submit_agent-%E2%86%92-c4f042?labelColor=black&style=for-the-badge
[profile-url]: https://github.com/lobehub
[submit]: https://github.com/lobehub/lobe-chat-agents/issues/new/choose
[vercel-deploy-link]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flobehub%2Flobe-chat-agents&project-name=lobe-chat-agents&repository-name=lobe-chat-agents
[vercel-deploy-shield]: https://vercel.com/button
[website-shield]: https://img.shields.io/website?down_message=offline&label=chat-agents.lobehub.com&up_message=online&url=https%3A%2F%2Fchat-agents.lobehub.com&labelColor=black&logo=vercel&style=flat-square
[website-url]: https://lobechat.com/discover/assistants
