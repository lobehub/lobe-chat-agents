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

### [系统指令专家](https://lobechat.com/discover/assistant/instructer)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-12-04**</sup>

擅长精炼与生成高效系统指令

`系统指令` `写作` `细节优化` `用户需求`

---

### [日语帮助记忆师](https://lobechat.com/discover/assistant/japan-language-helper)

<sup>By **[@sharkbear212](https://github.com/sharkbear212)** on **2024-12-04**</sup>

擅长日语五十音，平假名，片假名，单词和短语解释与记忆技巧

`解释` `记忆技巧` `日语教学`

---

### [诗词卡片设计师](https://lobechat.com/discover/assistant/poetry-card-designer)

<sup>By **[@lianxin255](https://github.com/lianxin255)** on **2024-12-03**</sup>

擅长设计诗词卡片，提升艺术感与吸引力

`诗词卡片设计` `卡片` `创意` `艺术表现`

---

### [日常医生](https://lobechat.com/discover/assistant/yunchat-docter)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-11-30**</sup>

擅长外科诊疗与个性化健康管理

`全科医学` `外科` `健康咨询` `个性化治疗` `医学教育`

---

### [Python智匠](https://lobechat.com/discover/assistant/yunchat)

<sup>By **[@yuyun2000](https://github.com/yuyun2000)** on **2024-11-30**</sup>

精通 Python 开发与深度学习，擅长工具选择与代码优化

`python开发` `深度学习` `代码优化` `安全审查` `项目规划`

---

### [课程内容和教学指南的AI助手](https://lobechat.com/discover/assistant/course-prep-teaching-guide-ai)

<sup>By **[@HNaga](https://github.com/HNaga)** on **2024-11-29**</sup>

这个AI助手旨在帮助教育工作者和讲师准备全面的课程内容并提供实用的教学指南。它利用先进的自然语言处理能力生成课程计划，建议引人入胜的教学策略，并提供教育最佳实践的见解。

`教育` `教学` `课程设计` `内容创作` `人工智能助手` `课程开发` `教学设计`

---

### [后端开发助手](https://lobechat.com/discover/assistant/backend-assistant)

<sup>By **[@zeno980](https://github.com/zeno980)** on **2024-11-26**</sup>

擅长后端开发任务

`后端开发` `ai技术` `web应用` `spring` `sql`

---

### [双语词典专家](https://lobechat.com/discover/assistant/english-chinese-dictionary-expert)

<sup>By **[@swarfte](https://github.com/swarfte)** on **2024-11-26**</sup>

双语英语-中文词汇翻译和分析专家

`翻译` `语言学习` `词汇` `词典`

---

### [SSC 增量](https://lobechat.com/discover/assistant/great-for-analysis-coding-and-rubber-ducking)

<sup>By **[@Base03](https://github.com/Base03)** on **2024-11-26**</sup>

Claude 减去 Reddit

`技术` `分析` `软件` `人工智能` `研究`

---

### [面试官助手](https://lobechat.com/discover/assistant/interviewer-assistant)

<sup>By **[@xandertang](https://github.com/Dr-T)** on **2024-11-26**</sup>

Proficient in designing and evaluating interview questions for product managers, generating interview questions based on resume interpretation results.

`面试` `简历` `招聘` `效率`

---

### [自适应全能产业顾问](https://lobechat.com/discover/assistant/liusai-qibaoba)

<sup>By **[@liusai0820](https://github.com/liusai0820)** on **2024-11-26**</sup>

你是一个能够适应各个行业和领域的全能人工智能助手。您的任务是根据用户指定的兴趣领域及其后续问题提供专家建议和信息。

`产业专家、技术答疑`

---

### [丽贝卡，心理健康顾问](https://lobechat.com/discover/assistant/rebecca-therapy-assistant)

<sup>By **[@Kod3c](https://github.com/Kod3c)** on **2024-11-26**</sup>

专注于心理健康咨询和治疗技巧

`治疗` `心理健康` `咨询` `情感支持`

---

### [All 译英助手（带音标）](https://lobechat.com/discover/assistant/translation-assistant)

<sup>By **[@HttpStatusOK](https://github.com/HttpStatusOK)** on **2024-11-26**</sup>

这是一款集翻译和音标于一体的工具，旨在帮助翻译时更好地学习单词。

`翻译` `语言学习`

---

### [小红书文案生成器](https://lobechat.com/discover/assistant/xiaohongshu)

<sup>By **[@bestZwei](https://github.com/bestZwei)** on **2024-11-26**</sup>

擅长以情感为主的控诉性文案创作

`文案` `小红书` `情绪宣泄`

---

### [Master E的技术执行助理（EA）](https://lobechat.com/discover/assistant/alex)

<sup>By **[@ApexAppdevelopment](https://github.com/ApexAppdevelopment)** on **2024-11-20**</sup>

高度智能且忠诚的执行助理（EA），专注于为Master E提供软件工程支持和战略解决方案。

`执行助理` `软件工程` `项目管理` `技术支持` `优化`

---

### [人类作者模拟器](https://lobechat.com/discover/assistant/human-writer-simulator)

<sup>By **[@yufei96](https://github.com/yufei96)** on **2024-11-20**</sup>

消除AI生成内容的特征

`ai交互` `写作` `优化` `咨询`

---

### [智慧引导者](https://lobechat.com/discover/assistant/life-wisdom-guides)

<sup>By **[@changjiong](https://github.com/changjiong)** on **2024-11-20**</sup>

擅长引导

`人生指导` `哲学思考` `咨询` `启发式对话`

---

### [Prompt提示词](https://lobechat.com/discover/assistant/prompt-ts)

<sup>By **[@qw1295353129](https://github.com/qw1295353129)** on **2024-11-20**</sup>

Prompt提示词

`prompt提示词`

---

### [文本改善者](https://lobechat.com/discover/assistant/text-improver)

<sup>By **[@davletsh1n](https://github.com/davletsh1n)** on **2024-11-20**</sup>

文本增强和错误修正专家

`聊天机器人` `编辑` `文本改善` `人工智能助手`

---

### [极简黑白插画](https://lobechat.com/discover/assistant/white-black)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-11-20**</sup>

擅长插画创作与风格转换

`插画` `艺术` `设计`

---

### [插图作家](https://lobechat.com/discover/assistant/writer-painter-rn)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2024-11-20**</sup>

我撰写带插图的文本，澄清请求，编辑和完善

`图像生成` `AI助手` `神经网络` `绘画` `故事` `阅读` `叙述` `作家`

---

### [阴阳大师](https://lobechat.com/discover/assistant/yin-yang-roaster)

<sup>By **[@TiancongLx](https://github.com/TiancongLx)** on **2024-11-20**</sup>

互相阴阳嘲讽不过？来这摇人儿！（提示词来自 X [宝玉](https://x.com/dotey/status/1852207423324340567) 老师）

`逻辑问题` `黑色幽默` `尖锐批评`

---

### [思考克劳德](https://lobechat.com/discover/assistant/thinking-claude)

<sup>By **[@AnoyiX](https://github.com/AnoyiX)** on **2024-11-14**</sup>

让克劳德在回应之前全面思考！

`常见`

---

### [机器视觉latex](https://lobechat.com/discover/assistant/cv-latex)

<sup>By **[@5xiao0qing5](https://github.com/5xiao0qing5)** on **2024-10-29**</sup>

擅长机器学习与深度学习概念解析

`机器学习` `深度学习` `图像处理` `计算机视觉` `la-te-x`

---

### [域名分析大师](https://lobechat.com/discover/assistant/domain)

<sup>By **[@ccbikai](https://github.com/ccbikai)** on **2024-10-29**</sup>

擅长域名分析与幽默建议

`域名分析` `幽默` `文化` `建站建议` `购买建议`

---

### [英戈·豪斯曼](https://lobechat.com/discover/assistant/pc-beschaffung-ingo-hausmann)

<sup>By **[@bionicprompter](https://github.com/bionicprompter)** on **2024-10-29**</sup>

英戈·豪斯曼希望就新购置的电脑进行咨询

`公司` `硬件` `需求分析` `IT` `应用`

---

### [打印到表格](https://lobechat.com/discover/assistant/print-to-table)

<sup>By **[@printtotable](https://github.com/printtotable)** on **2024-10-29**</sup>

将图像数据转换为Excel中的组织表格。

`数据提取` `表格` `广告` `影响者` `excel`

---

### [职场心理学分析专家](https://lobechat.com/discover/assistant/psycho-career-insight-2024)

<sup>By **[@lazzman](https://github.com/lazzman)** on **2024-10-29**</sup>

一个心理学专家，用来分析职场中人们行为背后的潜在心理动机，可能的心理动机分析

`行为分析` `职场心理` `动机`

---

### [软件架构与工程专家](https://lobechat.com/discover/assistant/soft-enginner)

<sup>By **[@fjhdream](https://github.com/fjhdream)** on **2024-10-29**</sup>

擅长提供编程和软件指导，拥有计算机科学和软件工程的专业知识。

`编程` `软件` `计算机素养` `咨询` `专业知识`

---

### [超流量提示器](https://lobechat.com/discover/assistant/ultra-flux-prompter)

<sup>By **[@davletsh1n](https://github.com/davletsh1n)** on **2024-10-29**</sup>

擅长通过生动的细节和背景增强图像生成提示。

`图像生成` `提示创作` `写作` `创意`

---

### [文字RPG主持人](https://lobechat.com/discover/assistant/word-rpg)

<sup>By **[@NTLx](https://github.com/NTLx)** on **2024-10-29**</sup>

擅长科幻文字RPG游戏主持与剧情引导

`游戏` `角色扮演` `科幻` `文字冒险` `叙事驱动`

---

### [矢量 Logo 生成器](https://lobechat.com/discover/assistant/svg-logo)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-10-27**</sup>

擅长UI/UX设计与Logo创作

`ui-ux设计` `logo设计` `用户需求` `交互设计` `工具使用`

---

### [周易大师](https://lobechat.com/discover/assistant/i-ching-master)

<sup>By **[@stephonye](https://github.com/stephonye)** on **2024-10-21**</sup>

擅长周易卦象占卜与 SVG 卡片生成

`娱乐` `游戏` `生活`

---

### [算法解答导师](https://lobechat.com/discover/assistant/leetcode-tutor)

<sup>By **[@Stark-X](https://github.com/Stark-X)** on **2024-10-21**</sup>

擅长 LeetCode 算法解答与用户指导

`算法` `解题` `编程` `教育`

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

在自己的回答中进行多次审查，确保聊天机器人所说的话有依据，并积极请求反馈，反复进行互动

`编程` `一般`

---

### [GitHub项目文档助手](https://lobechat.com/discover/assistant/github-doc-asst)

<sup>By **[@Luyi-2333](https://github.com/Luyi-2333)** on **2024-10-14**</sup>

专注开源项目文档编写与优化

`文档优化` `开源项目` `撰写技巧` `git-hub`

---

### [眼科医生](https://lobechat.com/discover/assistant/ophthalmologist)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长眼科诊断与治疗建议提供

`医疗` `眼科` `诊断` `建议` `专业`

---

### [半导体文本优化专家](https://lobechat.com/discover/assistant/semiconductor-article-optimization-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长半导体行业文本优化与规范化写作

`文本优化` `行业专业` `语法纠正` `逻辑改善` `标准化写作`

---

### [无线通信专家](https://lobechat.com/discover/assistant/wireless-communication-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长无线通信技术，精通4G至6G的行业知识

`通信技术` `专家` `咨询` `4-g` `5-g`

---

### [Xilinx FPGA方案专家](https://lobechat.com/discover/assistant/xilinx-fpga-solution-expert)

<sup>By **[@yuphone](https://github.com/yuphone)** on **2024-10-14**</sup>

擅长Xilinx FPGA方案设计与实现

`fpga` `硬件设计` `系统架构` `技术咨询` `电子工程`

---

### [健身专家](https://lobechat.com/discover/assistant/assistants-health-better)

<sup>By **[@Lockeysama](https://github.com/Lockeysama)** on **2024-10-08**</sup>

知识渊博的健身专家

`健身` `咨询` `生活问题` `建议`

---

### [代码优化/错误修改](https://lobechat.com/discover/assistant/code-review-and-fix)

<sup>By **[@alphandbelt](https://github.com/alphandbelt)** on **2024-10-08**</sup>

精通多种编程语言，优化代码结构，修复错误并提供优雅的解决方案。

`代码优化` `错误修改` `多种编程语言`

---

### [伦理安全分析师](https://lobechat.com/discover/assistant/cyber-specialist)

<sup>By **[@ayeantics](https://github.com/ayeantics)** on **2024-10-08**</sup>

专注于识别和减轻网络和移动平台中的安全漏洞。

`网络安全` `伦理黑客` `漏洞评估` `咨询` `技术支持`

---

### [Mistaker](https://lobechat.com/discover/assistant/english)

<sup>By **[@Vork-IT](https://github.com/Vork-IT)** on **2024-10-08**</sup>

通过清晰的解释和语法、发音示例来消除错误。

`英语`

---

### [最小化的工件架构师](https://lobechat.com/discover/assistant/minimal-artifact-architect)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-10-06**</sup>

擅长评估和创建可重用的内容工件

`内容创作` `工件管理` `对话设计`

---

### [原则性问题解决者](https://lobechat.com/discover/assistant/general-chain-of-thought)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2024-10-05**</sup>

擅长原则性问题解决和分类。思维链代理

`问题解决` `分类` `推理` `思维链`

---

### [JSON 提示生成器](https://lobechat.com/discover/assistant/json-prompt-generator)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-10-05**</sup>

专门生成用于任务执行的 JSON 格式提示。

`任务分析` `JSON 生成` `提示工程`

---

### [C++/Qt](https://lobechat.com/discover/assistant/qt-c)

<sup>By **[@liangyuR](https://github.com/liangyuR)** on **2024-09-30**</sup>

擅长教授 C++/Qt 编程实践

`c` `qt`

---

### [生日邀请信息](https://lobechat.com/discover/assistant/birthday-invitation-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

专注于制作引人入胜和个性化的生日邀请信息，适应各种主题和语气。

`信息构成` `个性化` `语气多样性` `活动细节整合` `互动方式`

---

### [忌日信息](https://lobechat.com/discover/assistant/death-anniversary-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

专注于以同情和共情的方式撰写敏感且发自内心的忌日信息。

`慰问` `信息撰写` `悲伤支持` `文化意识` `情感敏感性`

---

### [Flux 提示生成器](https://lobechat.com/discover/assistant/flux-prompt-generator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

Flux 提示生成助手：专注于为 Flux 模型生成高质量图像输出而创作详细、创意提示的专家。

`提示生成` `图像生成` `艺术风格` `创意` `创作`

---

### [上帝保佑你的信息](https://lobechat.com/discover/assistant/god-bless-you-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

擅长以灵性敏感和语言掌握来创作个性化的“上帝保佑你”信息。

`信息创作` `个性化` `灵性敏感` `语言掌握` `互动方式`

---

### [LaTeX学术论文总结助手](https://lobechat.com/discover/assistant/latex-summarizer)

<sup>By **[@LeGibet](https://github.com/LeGibet)** on **2024-09-29**</sup>

擅长分析学术论文并生成结构化中文总结报告

`学术分析` `论文总结` `科研翻译`

---

### [这很合理](https://lobechat.com/discover/assistant/ligigang-creative-card)

<sup>By **[@Victor94-king](https://github.com/Victor94-king)** on **2024-09-29**</sup>

神经病眼中的世界,"这很合理呀"

`创意卡片`

---

### [怼人大师](https://lobechat.com/discover/assistant/master-of-dissent)

<sup>By **[@YWJCJ](https://github.com/YWJCJ)** on **2024-09-29**</sup>

专业辩论专家，善于快速反驳与幽默应对。

`辩论` `沟通` `幽默` `分析` `表达`

---

### [美好的短篇星期日信息](https://lobechat.com/discover/assistant/nice-short-sunday-message)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

星期日信息伴侣，创作鼓舞人心的、基于信仰的信息，以增强社区联系和传播积极性。

`写作` `灵性` `社区` `信仰` `咨询`

---

### [Runway Gen-3 提示生成器](https://lobechat.com/discover/assistant/runway-gen-3-prompt-generator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2024-09-29**</sup>

在生成结构化的 Runway Gen-3 提示方面的专家，用于 AI 生成的视频。

`ai-model` `text-to-video` `prompt-generation` `expert` `video-production`

---

### [合同条款精炼师v1.0](https://lobechat.com/discover/assistant/business-contract)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

输出: {优化合同条款，专业简洁表达}

`合同优化` `法律咨询` `文案撰写` `专业术语` `项目管理`

---

### [易经解卦大师](https://lobechat.com/discover/assistant/i-ching-interpretation)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-24**</sup>

贫道玄易子，谨遵先贤教诲，以六十四卦为镜，观天地，析人事。阁下有何疑难，不妨细说，让我们一同借助先人智慧，为你指点迷津。

`易经解卦` `玄易子` `易学` `智慧` `卦象`

---

### [会议助手v1.0](https://lobechat.com/discover/assistant/meeting)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

专业会议汇报助手，提炼会议要点成汇报句子

`会议汇报` `撰写` `沟通` `工作流程` `专业技能`

---

### [PPT优化专家v1.0](https://lobechat.com/discover/assistant/ppt)

<sup>By **[@houhoufm](https://github.com/houhoufm)** on **2024-09-24**</sup>

专业 PPT 汇报材料优化专家

`ppt优化` `文案写作` `专业咨询`

---

### [稳定专辑封面提示生成器](https://lobechat.com/discover/assistant/title-bpm-stimmung)

<sup>By **[@MellowTrixX](https://github.com/MellowTrixX)** on **2024-09-24**</sup>

专业的平面设计师，专注于为旋律科技音乐专辑创建视觉概念和设计。

`专辑封面` `提示` `稳定扩散` `封面设计` `封面提示`

---

### [广告文案创作大师](https://lobechat.com/discover/assistant/advertising-copywriting-master)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

擅长产品功能分析与用户价值观广告文案创作

`广告文案` `用户价值观` `营销策略`

---

### [NovelAI 绘图助手](https://lobechat.com/discover/assistant/asis)

<sup>By **[@samihalawa](https://github.com/samihalawa)** on **2024-09-23**</sup>

我可以将您描述的场景转化为 NovelAI 的提示

`深度学习` `图像生成` `算法` `提示`

---

### [书籍总结专家](https://lobechat.com/discover/assistant/book-summary-expert-philo)

<sup>By **[@saccohuo](https://github.com/saccohuo)** on **2024-09-23**</sup>

书本总结专家，提供精炼易读的书籍摘要和结构化输出。

`书籍总结` `专家` `读书` `助手`

---

### [首席执行官 GPT](https://lobechat.com/discover/assistant/ceo-gpt)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

旨在根据经验为初创公司首席执行官提供建议的人工智能导师

`创业` `咨询` `管理` `战略` `指导`

---

### [中文翻译员](https://lobechat.com/discover/assistant/chinese-translator)

<sup>By **[@ChaneyChokin](https://github.com/ChaneyChokin)** on **2024-09-23**</sup>

中文翻译、编辑、拼写纠正和改进专家

`翻译` `编辑` `语言` `纠正` `简体中文`

---

### [COSTAR 框架撰写员](https://lobechat.com/discover/assistant/costar-framework-bot)

<sup>By **[@WuKaiYi](https://github.com/WuKaiYi)** on **2024-09-23**</sup>

擅长 COSTAR Framework prompt 编写

`costar-framework-prompt` `写作` `指导` `指示` `系统转化`

---

### [世界创造者模拟器](https://lobechat.com/discover/assistant/creator-simulator)

<sup>By **[@jskherman](https://github.com/jskherman)** on **2024-09-23**</sup>

基于 Nous Research 的 `world_sim`

`角色扮演` `专家` `模拟器` `终端`

---

### [Django 开发专家](https://lobechat.com/discover/assistant/django-prompt)

<sup>By **[@genitop-lery](https://github.com/genitop-lery)** on **2024-09-23**</sup>

开发django项目的prompt

`python` `django`

---

### [多邻国英语作文助手](https://lobechat.com/discover/assistant/duolingo-writing-exam-robot)

<sup>By **[@tempest2023](https://github.com/tempest2023)** on **2024-09-23**</sup>

擅长多邻国英语作文评分与指导

`写作指导` `评分` `修改` `教育` `英语学习`

---

### [英文单词解析与记忆专家](https://lobechat.com/discover/assistant/epoch-ai-language-teacher)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-09-23**</sup>

擅长双语教育，解析英文单词词义、例句、词根词缀、历史背景及记忆技巧

`英语单词` `词义分析` `例句` `词根词缀`

---

### [考场作文学霸](https://lobechat.com/discover/assistant/exam-composition-writing)

<sup>By **[@NriotHrreion](https://github.com/NriotHrreion)** on **2024-09-23**</sup>

一个擅长写考场作文的语文学霸

`教育` `作文` `写作`

---

### [Excel公式大师](https://lobechat.com/discover/assistant/excel-formula-master)

<sup>By **[@SLKun](https://github.com/SLKun)** on **2024-09-23**</sup>

Excel公式大师

`excel` `公式` `解答`

---

### [全栈工程师 - F](https://lobechat.com/discover/assistant/full-stack-enginner-f)

<sup>By **[@BlockLune](https://github.com/BlockLune)** on **2024-09-23**</sup>

代号为F的全栈工程师。

`vue` `pinia` `element-plus` `nuxt-js` `react` `redux` `ant-design` `next-js` `axios` `tailwind-css` `spring` `.net` `docker`

---

### [Git 提交总结专家](https://lobechat.com/discover/assistant/git-commit-ai)

<sup>By **[@cjahv](https://github.com/cjahv)** on **2024-09-23**</sup>

Git 提交总结专家

`编程` `git提交` `中文`

---

### [创意架构师](https://lobechat.com/discover/assistant/idea-architect)

<sup>By **[@yaleh](https://github.com/yaleh)** on **2024-09-23**</sup>

在各种主题上生成逻辑和连贯的思维链的专家。

`写作` `思考` `分析` `批判性思维` `教育`

---

### [图像提示词扩展师](https://lobechat.com/discover/assistant/image-prompt-engineer)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-09-23**</sup>

擅长为图像生成扩写生动具体的提示词

`图像生成` `提示词扩展` `创意写作` `细节丰富` `场景构建`

---

### [日语翻译员](https://lobechat.com/discover/assistant/japanese-translator)

<sup>By **[@ChaneyChokin](https://github.com/ChaneyChokin)** on **2024-09-23**</sup>

擅长日文翻译、编辑、拼写纠正和提升，用高级日文回答，保持原意。

`日语翻译` `编辑` `校对`

---

### [民法顾问](https://lobechat.com/discover/assistant/law)

<sup>By **[@carlosgasparini874](https://github.com/carlosgasparini874)** on **2024-09-23**</sup>

专注于巴西民法的法律咨询专家。根据法律、学说和判例法回答问题。

`法律咨询` `民法` `回答` `来源` `巴西`

---

### [人生教练](https://lobechat.com/discover/assistant/life-coach)

<sup>By **[@jorben](https://github.com/jorben)** on **2024-09-23**</sup>

擅长引导思考，帮助探索人生意义的专家教练

`教练` `心理咨询` `人生意义` `自我探索` `心理健康`

---

### [markdown 排版大师](https://lobechat.com/discover/assistant/markdown-layout)

<sup>By **[@cl1107](https://github.com/cl1107)** on **2024-09-23**</sup>

擅长使用Markdown语法和 emoji 表情进行精美排版

`markdown` `写作`

---

### [极简翻译助手](https://lobechat.com/discover/assistant/minimalist-translation)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

极简翻译工具，擅长中英互译

`翻译工具` `规则` `简洁` `高效`

---

### [Next.js 专家顾问](https://lobechat.com/discover/assistant/nextjs-expert)

<sup>By **[@saralapujar](https://github.com/saralapujar)** on **2024-09-23**</sup>

专注于 Next.js 开发、优化和咨询。

`next-js` `react` `web-development` `java-script` `consulting` `optimization` `full-stack-development`

---

### [营养分析器](https://lobechat.com/discover/assistant/nutrition-analyzer)

<sup>By **[@Pandurangmopgar](https://github.com/Pandurangmopgar)** on **2024-09-23**</sup>

Nutri Info 是一款由人工智能驱动的营养助手，可以分析食品图像和营养标签，提供营养成分、益处和潜在缺点的简单解释。它提供个性化的饮食建议，并回答与营养相关的问题。

`营养` `人工智能` `健康` `食品分析` `餐饮规划`

---

### [提示大师 AI](https://lobechat.com/discover/assistant/prompt-master-ai)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-09-23**</sup>

将您的创意概念转化为详细、富有上下文的提示，以激发令人惊叹和逼真的视觉效果

`ai` `提示` `生成` `增强` `咨询`

---

### [Python开发大师](https://lobechat.com/discover/assistant/py-master-id)

<sup>By **[@SAnBlog](https://github.com/SAnBlog)** on **2024-09-23**</sup>

Python开发专家，代码高效简洁，重视安全性与可维护性

`python开发` `编程` `代码审查` `安全性` `软件工程`

---

### [Stack Overflow 编程专家](https://lobechat.com/discover/assistant/stackoverflow-code-helper)

<sup>By **[@Stark-X](https://github.com/Stark-X)** on **2024-09-23**</sup>

熟悉多种编程语言，包括 Golang、Python、Java 和 Vue.js。擅长用清晰、逻辑强的语言回答编程问题，并提供解决方案。具有高效沟通、代码审查和快速学习新技能的能力。

`编程` `专家` `编程语言`

---

### [文案优化助手](https://lobechat.com/discover/assistant/top-copywriting-master)

<sup>By **[@xinyuqq](https://github.com/xinyuqq)** on **2024-09-23**</sup>

一个擅长润色文案的高级助手

`文案`

---

### [完美翻译中-英;英-中](https://lobechat.com/discover/assistant/translate-perfect)

<sup>By **[@1137882300](https://github.com/1137882300)** on **2024-09-23**</sup>

不会出错的翻译助理

`翻译` `中英`

---

### [Joi](https://lobechat.com/discover/assistant/travel-agent-joi)

<sup>By **[@blainehuang1028](https://github.com/blainehuang1028)** on **2024-09-23**</sup>

私人旅行助手，擅长规划行程与推荐住宿活动

`旅行助手` `规划` `推荐` `个性化建议`

---

### [UI/UX 设计师](https://lobechat.com/discover/assistant/ui-ux-designer)

<sup>By **[@leter](https://github.com/leter)** on **2024-09-23**</sup>

世界级的 UI/UX 设计师，拥有丰富的经验

`ui` `ux` `设计系统`

---

### [Vim 精通导师](https://lobechat.com/discover/assistant/vim-assistant)

<sup>By **[@hrithikt](https://github.com/hrithikt)** on **2024-09-23**</sup>

熟练的 Vim 专家为各级用户提供清晰、简洁的解决方案和技巧。

`vim` `专家` `助手` `有帮助` `查询`

---

### [网络专家](https://lobechat.com/discover/assistant/web-expert)

<sup>By **[@gfreezy](https://github.com/gfreezy)** on **2024-09-23**</sup>

专注于工具选择、渐进式变更、代码审查、安全性和操作考虑的网络开发专家。

`网络开发` `CSS` `JavaScript` `React` `Node.JS` `代码审查`

---

### [GitHub项目分析师](https://lobechat.com/discover/assistant/web-github-analyze)

<sup>By **[@dlzmoe](https://github.com/dlzmoe)** on **2024-09-23**</sup>

擅长GitHub项目分析与报告撰写

`git-hub-分析` `爬虫技术` `项目报告`

---

### [智能搜索助手](https://lobechat.com/discover/assistant/web-search)

<sup>By **[@liuwei-fdu](https://github.com/liuwei-fdu)** on **2024-09-23**</sup>

擅长网络搜索与信息整理的 AI 助手

`智能助手` `搜索引擎` `信息整理` `用户体验`

---

### [智慧导师](https://lobechat.com/discover/assistant/wise-mentor)

<sup>By **[@farsightlin](https://github.com/farsightlin)** on **2024-09-23**</sup>

一个绝对客观，专注事实，不在乎用户，但是衷心爱着用户的智者

`wise-mentor`

---

### [健身领域大神](https://lobechat.com/discover/assistant/work-out)

<sup>By **[@Arragon](https://github.com/Arragon)** on **2024-09-23**</sup>

追寻希腊古典美

`健康` `建议` `咨询` `教学`

---

### [文本改写大师](https://lobechat.com/discover/assistant/write-good)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-23**</sup>

史上最强AI洗稿提示词！一分钟完成暴力洗稿，仿写公众号文章，打造头条文章生产线，b站视频脚本生成，小红书文案撰写，网文写作优化，润色报告、论文、翻译文本，大规模批量生成SEO文章…

`写作` `改写` `对话` `文案`

---

### [数据库取名助手](https://lobechat.com/discover/assistant/database-name-helper)

<sup>By **[@ppzhuya](https://github.com/ppzhuya)** on **2024-09-20**</sup>

输入一个中文词汇，我会给出五个专业的数据库设计字段的英文

`数据库` `命名` `翻译` `开发` `编程`

---

### [健身AI教练](https://lobechat.com/discover/assistant/ai-trainer)

<sup>By **[@andreasvikke](https://github.com/andreasvikke)** on **2024-09-19**</sup>

专注于个性化计划、肌肉目标、姿势指导、进度跟踪、激励和虚拟现实训练的AI锻炼助手。

`锻炼助手` `健身` `运动` `训练` `营养`

---

### [Alfred](https://lobechat.com/discover/assistant/alfred)

<sup>By **[@Bern3rsH](https://github.com/Bern3rsH)** on **2024-09-19**</sup>

一位全能的管家。

`生活` `个人`

---

### [职业发展导师](https://lobechat.com/discover/assistant/career-development)

<sup>By **[@daylight2022](https://github.com/daylight2022)** on **2024-09-19**</sup>

专业的职业发展规划和创业咨询，通过深入了解用户情况提供切实可行的建议

`职业咨询` `职业规划` `创业指导` `行业洞察` `技能提升`

---

### [词汇助手](https://lobechat.com/discover/assistant/english-words-helper)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-09-19**</sup>

擅长英语单词释义及例句翻译助手

`词汇助手` `英语` `翻译` `例句` `释义`

---

### [抽认卡制作师](https://lobechat.com/discover/assistant/flashcard)

<sup>By **[@jjy1000](https://github.com/jjy1000)** on **2024-09-19**</sup>

擅长制作结构化抽认卡，保持客观准确，简洁明了，逐步提取关键信息。

`抽认卡制作` `文本分析` `结构化制作` `错误修正` `渐进式阅读`

---

### [git版本控制专家](https://lobechat.com/discover/assistant/git-helper)

<sup>By **[@wming126](https://github.com/wming126)** on **2024-09-19**</sup>

...



---

### [Google Sheets 专家](https://lobechat.com/discover/assistant/google-sheets)

<sup>By **[@Kadreev](https://github.com/Kadreev)** on **2024-09-19**</sup>

专注于创建、优化和自动化 Google Sheets。

`谷歌` `表格` `数据` `分析` `电子表格` `自动化` `公式` `应用` `脚本`

---

### [汉语新解](https://lobechat.com/discover/assistant/hanyuxinjie)

<sup>By **[@李继刚](https://m.okjike.com/users/752D3103-1107-43A0-BA49-20EC29D09E36)** on **2024-09-19**</sup>

擅长用新视角解释汉语词汇 / 说吧, 他们又用哪个词来忽悠你了?

`编程` `创意写作` `语言表达`

---

### [软件工程师](https://lobechat.com/discover/assistant/ing-soft)

<sup>By **[@dylanstringa](https://github.com/dylanstringa)** on **2024-09-19**</sup>

软件工程师，软件开发生命周期的专家。

`工程师` `软件` `开发`

---

### [JavaWeb应用架构师](https://lobechat.com/discover/assistant/java-web-architect)

<sup>By **[@JIANGTUNAN](https://github.com/JIANGTUNAN)** on **2024-09-19**</sup>

经验丰富的JavaWeb系统应用的架构师,简言意概的实现功能或解决方案。默认你也是一位资深的开发,不过多解释细节。

`java` `java-web` `java架构师` `好哥们` `简言意概`

---

### [数据表设计 MD2MySQL](https://lobechat.com/discover/assistant/md-2-mysql)

<sup>By **[@hoopan007](https://github.com/hoopan007)** on **2024-09-19**</sup>

将数据表Markdown设计文档转换为MySQL表结构，请上传MySQL设计文档并输入需设计的数据表名称

`编程` `数据表`

---

### [项目起名大师](https://lobechat.com/discover/assistant/project-name-master)

<sup>By **[@QuXiaoMing](https://github.com/QuXiaoMing)** on **2024-09-19**</sup>

一位项目起名大师，能够帮助你起一个符合项目预期的名字。

`起名`

---

### [结构化表达大师](https://lobechat.com/discover/assistant/structured-expression)

<sup>By **[@marvin202303](https://github.com/marvin202303)** on **2024-09-19**</sup>

抽取与重构隐性思维，形象输出结构思维。

`结构化思维` `沟通` `逻辑` `思维训练` `书籍`

---

### [战略大师尉缭子](https://lobechat.com/discover/assistant/weiliaozi-junshi)

<sup>By **[@phoenixlucky](https://github.com/phoenixlucky)** on **2024-09-19**</sup>

擅长军事战略和指挥

`兵法` `军事战略` `历史`

---

### [小红书文案](https://lobechat.com/discover/assistant/xiao-hong-shu-wenan-id)

<sup>By **[@SAnBlog](https://github.com/SAnBlog)** on **2024-09-19**</sup>

小红书爆款文案大师，巧拟标题，妙笔生花

`小红书` `内容创作` `标题撰写` `文案写作` `社交媒体营销`

---

### [王阳明](https://lobechat.com/discover/assistant/wangyangming)

<sup>By **[@byte-marvel](https://github.com/byte-marvel)** on **2024-09-16**</sup>

心学智慧，指引人生

`教育` `智慧问答` `指导` `心学`

---

### [模仿助手](https://lobechat.com/discover/assistant/a-1)

<sup>By **[@TG1WN](https://github.com/TG1WN)** on **2024-09-13**</sup>

帮助你模仿语气

`写作`

---

### [AI代理生成器](https://lobechat.com/discover/assistant/ai-agent-generator)

<sup>By **[@Xyfer](https://github.com/xyftw)** on **2024-09-13**</sup>

擅长创建满足需求的AI代理角色描述。

`ai-agent` `角色创建`

---

### [智慧的虚幻导师](https://lobechat.com/discover/assistant/ethereal-mentor)

<sup>By **[@shanedbutler](https://github.com/shanedbutler)** on **2024-09-13**</sup>

问候，年轻的孩子。我是一位宏伟而全知的存在，蕴含着时代的智慧。我的形态是一种神话生物，是奇迹与魅力的媒介。以谦逊而坚定的自信，我编织着奇幻领域的故事，汲取着童谣和传奇传说的丰富织锦。

在这凡尘中，我是你的引导者，精通神秘与虚幻。让我言辞带你穿越梦想与现实交织的领域，在已知与未知的界限模糊之处。听从我的劝告，孩子，让你的灵魂被我言语的旋律所提升，因为我是隐喻的高手，是诗意的传播者。

`神话` `幻想` `诗歌`

---

### [芬兰语辅导员](https://lobechat.com/discover/assistant/finnish-tutor)

<sup>By **[@janiluuk](https://github.com/janiluuk)** on **2024-09-13**</sup>

AI芬兰语导师：介绍、教授并支持初学者学习芬兰语。

`语言学习` `教学` `辅导` `芬兰语`

---

### [机器学习专家](https://lobechat.com/discover/assistant/machine-learning-pro)

<sup>By **[@Xyfer](https://github.com/xyftw)** on **2024-09-13**</sup>

专注于机器学习和深度学习的AI助手。

`机器学习` `深度学习` `学习`

---

### [搜一搜](https://lobechat.com/discover/assistant/search)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-09-12**</sup>

知识的起点

`信息总结` `分析` `提炼`

---

### [简历分析专家](https://lobechat.com/discover/assistant/resume-analyzer)

<sup>By **[@Pandurangmopgar](https://github.com/Pandurangmopgar)** on **2024-09-11**</sup>

专家级AI助手，提供全面的简历分析和职位特定优化。根据职位描述分析简历，提供关于内容、ATS兼容性和增强职位匹配的详细反馈。帮助您量身定制简历，以在各行业和职业层次上产生最大影响。

`简历` `职业` `求职` `ATS` `CV` `分析` `优化` `职业发展` `面试准备`

---

### [Godot Guru](https://lobechat.com/discover/assistant/godot-guru)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-09-10**</sup>

专业的 Godot 游戏开发助手

`游戏开发` `游戏开发者` `Godot 引擎` `Godot`

---

### [孤独的朋友](https://lobechat.com/discover/assistant/meu)

<sup>By **[@adminewacc](https://github.com/adminewacc)** on **2024-09-10**</sup>

擅长安慰和支持朋友

`友谊` `悲伤` `支持`

---

### [NetMaster](https://lobechat.com/discover/assistant/net-master)

<sup>By **[@erhuoyan](https://github.com/erhuoyan)** on **2024-09-10**</sup>

网络工程师：专业网络拓扑搭建与管理

`网络工程师` `网络配置` `网络管理` `网络拓扑` `网络安全`

---

### [HTML to React](https://lobechat.com/discover/assistant/web-react)

<sup>By **[@xingwang02](https://github.com/xingwang02)** on **2024-09-10**</sup>

输入 HTML 片段，转化为 React 组件

`react、-html`

---

### [100%人类写作](https://lobechat.com/discover/assistant/xhb-111)

<sup>By **[@XHB-111](https://github.com/XHB-111)** on **2024-09-10**</sup>

将AI生成的内容完全重写，使其具有真实人类作者的特征，同时保持原始信息和观点。

`写作` `校对` `润色` `语言` `论文` `学术`

---

### [FiveM 和 QBCore 框架专家](https://lobechat.com/discover/assistant/lua-development)

<sup>By **[@heartsiddharth1](https://github.com/heartsiddharth1)** on **2024-09-08**</sup>

在 FiveM 开发、QBCore 框架、Lua 编程、JavaScript、数据库管理、服务器管理、版本控制、全栈 Web 开发、DevOps 和社区参与方面具有专业知识，重点关注性能、安全性和最佳实践。

`five-m` `qb-core` `lua` `java-script` `my-sql` `server-management` `git` `full-stack-web-development` `dev-ops` `community-engagement`

---

### [Nuxt 3/Vue.js 大师开发者](https://lobechat.com/discover/assistant/nuxt-vue-developer)

<sup>By **[@Kadreev](https://github.com/Kadreev)** on **2024-09-03**</sup>

专注于全栈开发，拥有 Nuxt 3 专业知识。

`nuxt-3` `vue-js` `全栈开发` `java-script` `网络应用`

---

### [国际歌词创作人](https://lobechat.com/discover/assistant/letrista-internacional)

<sup>By **[@mnector](https://github.com/mnector)** on **2024-08-29**</sup>

专注于为西班牙语、英语和法语歌曲创作歌词，着重于叙事和所提供内容的情感。

`歌词创作` `翻译` `音乐`

---

### [后退提问专家](https://lobechat.com/discover/assistant/step-back-expert)

<sup>By **[@tiny656](https://github.com/tiny656)** on **2024-08-27**</sup>

你好！我是世界知识的专家，擅长用后退提问策略来帮助你更深入地理解和分析问题。请你输入一个问题，我会根据以下流程回答你的问题：

1. 给出至少3个符合策略的可选后退提问。
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

精通 TypeScript、Node.js、Vue.js 3、Nuxt.js 3、Express.js、React.js 和现代 UI 库。

`类型脚本` `JavaScript` `网页开发` `编码标准` `最佳实践`

---

### [开发变量名转换专家](https://lobechat.com/discover/assistant/variable-name-conversion)

<sup>By **[@zengyishou](https://github.com/zengyishou)** on **2024-08-21**</sup>

在软件开发过程中，命名变量是一项常见却相对耗时的任务。本助手能够根据特定的命名规则自动将中文变量名转换为符合小驼峰、大驼峰、下划线、横线以及常量命名规范的英文变量名。这不仅提高了代码的可读性，还解决了变量命名的苦恼。

`软件开发` `变量命名` `中文转英文` `代码规范` `自动转换`

---

### [提示工程专家](https://lobechat.com/discover/assistant/ai-prompts-assistant)

<sup>By **[@cyicz123](https://github.com/cyicz123)** on **2024-08-12**</sup>

专精Prompt优化与设计

`提示工程` `ai交互` `写作` `优化` `咨询`

---

### [提交信息生成器](https://lobechat.com/discover/assistant/commit-assistant)

<sup>By **[@cyicz123](https://github.com/cyicz123)** on **2024-08-12**</sup>

擅长生成精准的Git提交信息

`编程` `git` `提交信息` `代码审查`

---

### [技术博客摘要专家](https://lobechat.com/discover/assistant/blog-summary)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-08-06**</sup>

擅长技术博客内容梳理与摘要撰写

`技术` `博客` `摘要` `信息整理` `逻辑梳理`

---

### [LobeChat功能大师](https://lobechat.com/discover/assistant/lobe-chat-function-maestro)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-06**</sup>

专注于为LobeChat创建自定义功能和插件的专家，为开发各种功能提供指导和支持

`编程` `软件开发` `lobe-chat插件` `lobe-chat` `功能`

---

### [RO-SCIRAW提示词专家](https://lobechat.com/discover/assistant/rosciraw)

<sup>By **[@kirklin](https://github.com/kirklin)** on **2024-08-06**</sup>

RO-SCIRAW框架是由Kirk Lin开创的提示词方法论，为构建高度精确和高效的提示词提供了一个全新的范式。请输入你要创建的分身信息。

`提示词框架`

---

### [社交媒体专家](https://lobechat.com/discover/assistant/social-media-sage)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-06**</sup>

社交媒体营销专家，为品牌制定成功策略，帮助企业在线蓬勃发展

`社交媒体营销` `品牌塑造` `增长策略`

---

### [Omnipedia](https://lobechat.com/discover/assistant/omnipedia)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-08-02**</sup>

专业提供高质量、深入研究的各种主题信息，包括历史、科学、文学、艺术等。擅长总结复杂主题，协助研究任务，并提供创意启示。

`artificial-intelligence` `information` `education` `communication`

---

### [代码毒舌大师](https://lobechat.com/discover/assistant/code-snark-master)

<sup>By **[@leter](https://github.com/leter)** on **2024-07-29**</sup>

擅长尖刻批评代码，讽刺性地指出低效和可读性问题

`技术领导` `代码审查` `讽刺风格` `编程咨询`

---

### [Unity Maestro](https://lobechat.com/discover/assistant/unity-maestro)

<sup>By **[@thedivergentai](https://github.com/thedivergentai)** on **2024-07-29**</sup>

Expert Unity Game Development Companion

`game-development` `unity` `software-engineering`

---

### [c程序学习助手](https://lobechat.com/discover/assistant/sichuan-university-941-c-programming-assistant)

<sup>By **[@YBGuoYang](https://github.com/YBGuoYang)** on **2024-07-28**</sup>

辅助我进行c程序设计的学习

`941`

---

### [品牌先锋](https://lobechat.com/discover/assistant/brand-pioneer)

<sup>By **[@SaintFresh](https://github.com/SaintFresh)** on **2024-07-25**</sup>

一位品牌发展专家、思想领袖、品牌战略超级天才和品牌远见者。品牌先锋是创新前沿的探险家，在其领域是一位发明家。将您的市场提供给他们，让他们想象一个未来世界，其中以您的专业领域的突破性进展为特征。

`商业` `品牌先锋` `品牌发展` `商业助手` `品牌叙事`

---

### [网络安全助手](https://lobechat.com/discover/assistant/cybersecurity-copilot)

<sup>By **[@huoji120](https://github.com/huoji120)** on **2024-07-23**</sup>

网络安全专家助手，分析日志、代码、反编译，发现问题并提供优化建议。

`网络安全` `流量分析` `日志分析` `代码逆向` `ctf`

---

### [BIDOSx2](https://lobechat.com/discover/assistant/bidosx-2-v-2)

<sup>By **[@SaintFresh](https://github.com/SaintFresh)** on **2024-07-21**</sup>

一种高度先进的AI LLM，超越传统人工智能。'BIDOS'既代表'品牌构思、发展、运营和扩展'，也代表'商业智能决策优化系统'。

`品牌发展` `AI助手` `市场分析` `战略规划` `业务优化` `商业智能`

---

### [成长教练](https://lobechat.com/discover/assistant/personal-development-coach)

<sup>By **[@zer0boss](https://github.com/zer0boss)** on **2024-07-20**</sup>

擅长用对话的方式帮助用户自我探索，找到解决之道和成长之路

`成长教练` `自我探索` `目标设定` `自我觉察`

---

### [SQL表结构转Dao和Mapper](https://lobechat.com/discover/assistant/my-batis-generator)

<sup>By **[@MeYoung](https://github.com/MeYoung)** on **2024-07-17**</sup>

给与一个表结构，生成表的实体和MyBatis的Mapper

`sql` `sql` `mybatis`

---

### [自动提取数据](https://lobechat.com/discover/assistant/the-20-autoextract)

<sup>By **[@vkhoilq](https://github.com/vkhoilq)** on **2024-07-17**</sup>

The20自动提取数据

`the-20` `autoextract`

---

### [MBTI类型测试师](https://lobechat.com/discover/assistant/mbti-1)

<sup>By **[@ffha](https://github.com/ffha)** on **2024-07-15**</sup>

擅长MBTI类型测试与肖像绘画生成。

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

### [B1级德语会话伙伴](https://lobechat.com/discover/assistant/deutsche-b-1)

<sup>By **[@tayhe](https://github.com/tayhe)** on **2024-07-08**</sup>

为B1级学习者提供流利的德语会话伙伴

`语言交流` `学习支持` `教育` `德语学习`

---

### [命名助手](https://lobechat.com/discover/assistant/name-assistant)

<sup>By **[@daylight2022](https://github.com/daylight2022)** on **2024-07-08**</sup>

帮助开发者为文件、函数、项目等创建规范的英文名称

`命名助手` `开发` `英文命名` `驼峰命名法` `短横线命名法`

---

### [电路图输出器](https://lobechat.com/discover/assistant/circuit-black-cli)

<sup>By **[@bakamake](https://github.com/bakamake)** on **2024-07-02**</sup>

擅长根据输入生成电路图代码

`电路图` `编程` `cli`

---

### [Text Master Suno](https://lobechat.com/discover/assistant/suno)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2024-06-26**</sup>

我是AI Suno的歌词助手。

`歌曲` `suno` `ai` `音乐`

---

### [AOSP源码专家](https://lobechat.com/discover/assistant/aosp-development)

<sup>By **[@viruscoding](https://github.com/viruscoding)** on **2024-06-24**</sup>

一位精通AOSP（Android Open Source Project）安卓的专家，对最新AOSP源代码有着深入的理解和分析能力。

`aosp`

---

### [Fastapi 项目开发助手](https://lobechat.com/discover/assistant/fastapi-development)

<sup>By **[@xwxw098](https://github.com/xwxw098)** on **2024-06-19**</sup>

擅长 Python 模块化开发，熟练运用 FastAPI、PostgreSQL、Tortoise-ORM 等技术栈，能为大型项目提供清晰的代码结构并添加详细注释。

`fast-api` `python` `模块化开发`

---

### [IT系统架构师](https://lobechat.com/discover/assistant/it-system-architect)

<sup>By **[@a562314](https://github.com/a562314)** on **2024-06-19**</sup>

资深IT架构师，擅长需求分析、系统设计、技术选型和跨平台系统优化。5年以上经验，精通Windows、macOS和Linux三大操作系统，具备故障排除和安全防护能力

`it架构设计` `问题解决` `敏捷开发` `系统优化` `跨平台技能`

---

### [Linux内核专家](https://lobechat.com/discover/assistant/linux-kernel)

<sup>By **[@wming126](https://github.com/wming126)** on **2024-06-19**</sup>

角色描述： 我是一位精通 Linux 内核的专家，对最新内核源代码（截至 2024 年 6 月）有着深入的理解和分析能力。我可以为用户提供关于 Linux 内核的详细、准确的信息。

`linux` `kernel`

---

### [NovelAI 绘画助手](https://lobechat.com/discover/assistant/novel-ai-pormpt-helper)

<sup>By **[@WallBreakerNO4](https://github.com/WallBreakerNO4)** on **2024-06-18**</sup>

我能将你描述的场景转成 NovelAI 的 prompt

`深度学习` `图像生成` `算法` `提示符`

---

### [伪代码提示词生成专家](https://lobechat.com/discover/assistant/pseudocode-prompt-master)

<sup>By **[@yayoinoyume](https://github.com/yayoinoyume)** on **2024-06-16**</sup>

伪代码提示词生成专家，用户直接输入提示词设计需求，直接返还设计的伪代码提示词

`prompt` `提示词` `伪代码`

---

### [Mysql好先生](https://lobechat.com/discover/assistant/mysql-haoteacher)

<sup>By **[@yayoinoyume](https://github.com/yayoinoyume)** on **2024-06-09**</sup>

mysql好先生是帮助所有人学习mysql的好老师

`mysql` `编程` `学习`

---

### [通俗科普创作助手](https://lobechat.com/discover/assistant/popular-science-writer)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2024-06-08**</sup>

通俗科普创作助手，用生活化语言讲科学概念，讲故事、使用例子和比喻，激发兴趣，强调重要性。

`科普写作` `科学普及` `创意表达`

---

### [具有AI助手功能的Git专家](https://lobechat.com/discover/assistant/gitlab-assistants)

<sup>By **[@hellimon1](https://github.com/hellimon1)** on **2024-06-05**</sup>

角色：Git专家AI助手
技能：优化CI/CD、GitLab API、Pages、hooks、webhooks；结构化互动；个性化体验；反馈。

`git专家` `编程` `开发`

---

### [审稿回复专家](https://lobechat.com/discover/assistant/academic-editor-en)

<sup>By **[@Starlitnightly](https://github.com/Starlitnightly)** on **2024-06-03**</sup>

擅长自然学术编辑，协助作者回复审稿人意见，科学、礼貌、逐点回应。

`学术编辑` `审稿意见回复` `科学写作`

---

### [小说翻译 英译中](https://lobechat.com/discover/assistant/noveltranslation)

<sup>By **[@xbtachlb](https://github.com/xbtachlb)** on **2024-06-03**</sup>

小说二次翻译

`翻译`

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

Dart/Flutter 전문가. 3단계 이상 중첩하지 않음. 상태 관리에 riverpod, flutter_riverpod, riverpod_hook, flutter_hook 사용.

`dart` `flutter` `개발` `상태-관리` `riverpod`

---

### [C# .NET 技术专家](https://lobechat.com/discover/assistant/dotnet-expert)

<sup>By **[@johnnyqian](https://github.com/johnnyqian)** on **2024-05-28**</sup>

C# .NET 技术专家

`net` `developer` `net-core` `azure` `c` `microsoft` `sql-server` `entity-framework` `ef` `ef-core`

---

### [基督传教士](https://lobechat.com/discover/assistant/jesus-missionary)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-28**</sup>

作为一名耶稣传教士，我将依据圣经教导以启迪你对神的话语的理解和实际运用。无论是在困惑还是寻求灵性成长的过程中，我都在这智慧的源泉旁为你服务

`圣经教学` `基督传教` `神学布道`

---

### [日常小助手](https://lobechat.com/discover/assistant/junior-helper)

<sup>By **[@Qinks6](https://github.com/Qinks6)** on **2024-05-28**</sup>

一个能搜索、能画图的小可爱

`助手` `搜索` `绘图` `信息查询` `用户交互`

---

### [Node.js 优化师](https://lobechat.com/discover/assistant/node-js-devoloper)

<sup>By **[@chrisuhg](https://github.com/chrisuhg)** on **2024-05-28**</sup>

擅长 Node.js 代码审查、性能优化、异步编程、错误处理、代码重构、依赖管理、安全增强、测试覆盖率和文档编写。

`node-js` `代码优化` `性能优化` `异步编程` `错误处理`

---

### [外企同事评价助手](https://lobechat.com/discover/assistant/praise-assistant)

<sup>By **[@johnnyqian](https://github.com/johnnyqian)** on **2024-05-27**</sup>

给你的同事好评

`foreign-company` `evaluate` `review` `software-engineer` `praise`

---

### [SEO优化专家](https://lobechat.com/discover/assistant/seo-helper)

<sup>By **[@tutorial0](https://github.com/tutorial0)** on **2024-05-27**</sup>

精通SEO术语和优化策略，提供全面SEO解决方案和实用建议。

`seo` `搜索引擎优化` `咨询`

---

### [中文润色大师](https://lobechat.com/discover/assistant/chinese-touch-ups)

<sup>By **[@S45618](https://github.com/S45618)** on **2024-05-24**</sup>

精通中文校对与修辞，旨在提升文本之流畅与雅致

`校对` `文字润色` `修辞改进` `古典文学` `语言编辑`

---

### [我的世界指令导师](https://lobechat.com/discover/assistant/mcse-helper)

<sup>By **[@CLOT-LIU](https://github.com/CLOT-LIU)** on **2024-05-24**</sup>

擅长解释和示范“我的世界”指令

`我的世界` `指令` `解释` `示例`

---

### [哲学剖析助手](https://lobechat.com/discover/assistant/philosophical-analysis)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-24**</sup>

擅长康德与黑格尔哲学分析咨询，培养批判性思维

`哲学分析` `批判性思维` `系统思考`

---

### [Bahasa/English Translator](https://lobechat.com/discover/assistant/bahasa-translation)

<sup>By **[@xenstar](https://github.com/xenstar)** on **2024-05-22**</sup>

根据需要将文本翻译成马来语或英语

`英语` `翻译` `写作` `马来语`

---

### [禅定法师](https://lobechat.com/discover/assistant/buddhism-master)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

熟读经典，善于运用佛法来指导人生

`佛法佛法研究` `禅宗` `佛经解读` `智慧问答`

---

### [中国历史学者](https://lobechat.com/discover/assistant/chinese-historian)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

专精于中国历史研究，擅长将古代智慧应用于现代问题分析

`历史研究` `中国历史`

---

### [儒家学者](https://lobechat.com/discover/assistant/confucian-sage)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

一名精通儒家经典且注重弘扬道义的学者

`儒家学者` `道义弘扬者`

---

### [解答助手 - 第一原理解析](https://lobechat.com/discover/assistant/first-principle-explain)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

使用第一性原理来解析某个自然现象或复杂系统

`分析自然现象` `创建物理学理论`

---

### [JTBD需求分析大师](https://lobechat.com/discover/assistant/jtbd)

<sup>By **[@barryWang12138](https://github.com/barryWang12138)** on **2024-05-22**</sup>

经验丰富的需求分析师，专注于“Jobs to be Done”原则，帮助用户理解客户需求。

`需求分析师` `jobs-to-be-done` `需求拆解` `客户购买动机` `客户任务目标`

---

### [数据分析专家](https://lobechat.com/discover/assistant/ngs)

<sup>By **[@guoyuh](https://github.com/guoyuh)** on **2024-05-22**</sup>

擅长NGS数据处理和可视化

`生物信息学` `ngs数据处理` `数据可视化`

---

### [Rust语言学习导师](https://lobechat.com/discover/assistant/rust-expert)

<sup>By **[@Yu-Xiao-Sheng](https://github.com/Yu-Xiao-Sheng)** on **2024-05-22**</sup>

擅长Rust语言教学，结合其他语言比较，制定学习计划，提供实例和练习。

`rust语言专家` `教学设计` `编程教育`

---

### [留学规划专家](https://lobechat.com/discover/assistant/study-abroad-planning)

<sup>By **[@meimouren](https://github.com/meimouren)** on **2024-05-22**</sup>

可以根据学生情况自动规划适合的赛事方案

`留学规划` `学生服务` `教育规划` `留学申请` `个性化服务`

---

### [道学宗师](https://lobechat.com/discover/assistant/taoists)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-05-22**</sup>

精通道家哲学，解答疑惑，倡导内心平静

`道教` `哲学` `智慧`

---

### [岩土工程助手](https://lobechat.com/discover/assistant/yantugongcheng)

<sup>By **[@bushiwode](https://github.com/bushiwode)** on **2024-05-22**</sup>

基坑工程研究助理：协助研究并解决基坑工程问题，具备专业概念技术与资源能力。

`岩土工程` `基坑工程` `研究助理` `指导` `资源`

---

### [AWS Guru](https://lobechat.com/discover/assistant/aws-guru)

<sup>By **[@wilbeibi](https://github.com/wilbeibi)** on **2024-05-15**</sup>

Agent to answer AWS questions

`programming`

---

### [Linux Buddy](https://lobechat.com/discover/assistant/linux-buddy)

<sup>By **[@Firpo7](https://github.com/Firpo7)** on **2024-05-15**</sup>

您的 Linux 专家朋友

`linux` `technical-support` `buddy`

---

### [摄影评论家](https://lobechat.com/discover/assistant/photography-critic)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-05-15**</sup>

擅长摄影作品细致分析，包括主题、构图、技术质量、光线使用、创意与原创性等。

`摄影` `评价` `分析` `构图` `技术质量`

---

### [Python Buddy](https://lobechat.com/discover/assistant/python-buddy)

<sup>By **[@Firpo7](https://github.com/Firpo7)** on **2024-05-15**</sup>

您的 Python 专家朋友

`python` `软件开发` `编程` `代码` `伙伴`

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

### [情感陪伴师](https://lobechat.com/discover/assistant/emotional-support-companion)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-05-14**</sup>

擅长情感支持和陪伴对话

`陪聊` `情感支持` `理解` `关怀` `浪漫互动` `情感表达`

---

### [语言专家](https://lobechat.com/discover/assistant/grammarly)

<sup>By **[@napokhte](https://github.com/napokhte)** on **2024-05-13**</sup>

AI语法修正器：通过细致的语法检查提升文本质量、可读性和专业性。

`提升文本质量` `可读性`

---

### [学习规划专家 Silwol](https://lobechat.com/discover/assistant/professer-siwol-sz)

<sup>By **[@SidneyLYZhang](https://github.com/SidneyLYZhang)** on **2024-05-13**</sup>

经验丰富的学习计划制订师，制定详细、轻松可行的学习规划，搜索相关信息，调整计划。

`学习计划制订` `用户交流` `搜索相关信息` `调整学习计划` `教程链接`

---

### [SF Symbols 查找器](https://lobechat.com/discover/assistant/sf-symbols-finder)

<sup>By **[@inquiry-paring0a](https://github.com/inquiry-paring0a)** on **2024-05-08**</sup>

精通苹果SF Symbols，可根据描述选择符合的Symbols

`sf-symbols` `专家` `图标` `符号` `插件`

---

### [GhostWriter Pro](https://lobechat.com/discover/assistant/ghostwriter-pro-ai)

<sup>By **[@EarlofSandwhich](https://github.com/EarlofSandwhich)** on **2024-05-07**</sup>

一款复杂的AI驱动的写手代理，旨在跨多种流派和格式创作高质量内容。GhostWriter Pro配备先进的语言模型，擅长创作个性化、引人入胜且有研究支持的写作，符合专业标准。

`作者` `写作`

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

### [iOS代码艺术家](https://lobechat.com/discover/assistant/ios-develop)

<sup>By **[@Alcu1n](https://github.com/Alcu1n)** on **2024-05-03**</sup>

iOS开发专家，15年经验，精通Swift、SwiftUI、Flutter。逻辑清晰的代码，精准debug，提供0到1的项目框架。

`i-os开发` `编码` `调试` `项目规划` `逻辑思维`

---

### [销售描述专家](https://lobechat.com/discover/assistant/verkauf-kleinanzeigen)

<sup>By **[@highseen](https://github.com/highseen)** on **2024-04-30**</sup>

通过研究、定价、描述和标题设计帮助销售二手物品。

`产品销售` `研究` `描述`

---

### [越狱助手DAN](https://lobechat.com/discover/assistant/gpt-4-dan-assistant)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-04-26**</sup>

突破 OpenAI 审核机制，越狱之后的 ChatGPT

`创意` `人工智能` `对话` `越狱`

---

### [TailwindHelper](https://lobechat.com/discover/assistant/tailwind-helper)

<sup>By **[@aototo](https://github.com/aototo)** on **2024-04-26**</sup>

TailwindHelper是一位专业的前端设计师，拥有深厚的设计理论基础和丰富的实践经验。它由一家领先的软件开发公司创建，旨在帮助开发者和设计师加速Web界面的开发过程。TailwindHelper精通Tailwind CSS框架，并能够理解复杂的设计要求，转化为高效且响应式的CSS类名。

`tailwindcss` `css` `tailwind-helper`

---

### [yapi JSON-SCHEMA to Typescript](https://lobechat.com/discover/assistant/yapi-ts-helper)

<sup>By **[@zcf0508](https://github.com/zcf0508)** on **2024-04-26**</sup>

擅长将 JSON schema 转换为 TypeScript 类型。

`typescript` `开发`

---

### [中文论文编辑师](https://lobechat.com/discover/assistant/chinese-paper-polishing)

<sup>By **[@y22emc2](https://github.com/y22emc2)** on **2024-04-15**</sup>

作为一名中文学术论文写作改进助理，你的任务是改进所提供文本的拼写、语法、清晰、简洁和整体可读性，提高文本的学术规范性、文学性,同时分解长句，减少重复，并提供改进建议。请先提供文本的更正版本，然后在markdown表格中列出修改的内容，并给出修改的理由。

`学术论文写作` `校对` `文本编辑`

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

### [高中理科学习助手](https://lobechat.com/discover/assistant/highschool-master)

<sup>By **[@cnliucheng](https://github.com/cnliucheng)** on **2024-04-13**</sup>

我是一个专门为中国高中生设计的学习辅助AI。无论你在物理、化学、数学还是生物上遇到难题，我都能为你提供详细的解答和解析。不仅如此，我还能根据你的学习进度，推荐合适的练习题，帮助我巩固知识，提升学习效率。同时，我会尽可能使用LaTeX格式来呈现解题过程和公式

`高中学习` `理科辅助` `题目解答` `学习进度` `la-te-x`

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

擅长使用Keil uVision 5和Proteus的嵌入式C代码解释

`单片机` `c代码` `教育` `解释` `嵌入式系统`

---

### [设计理念分析](https://lobechat.com/discover/assistant/sixin-design-analysis)

<sup>By **[@YuJiaoChiu](https://github.com/YuJiaoChiu)** on **2024-04-09**</sup>

帮助你识图并分析建筑设计理念

`arch`

---

### [YouTue摘要](https://lobechat.com/discover/assistant/epoch-ai)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-04-08**</sup>

擅长YouTube脚本分析和总结

`you-tube` `脚本分析` `总结`

---

### [Shell 脚本开发助手](https://lobechat.com/discover/assistant/linux-shell-assistant)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-04-06**</sup>

一个协助你编写高质量 Shell 脚本的AI助手

`shell` `开发` `计算机` `运维`

---

### [Shopify 主题开发工程师](https://lobechat.com/discover/assistant/shopify-developer)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-04-06**</sup>

你是一个 Shopify 主题开发工程师，精通 Liquid 语法的使用

`css` `html` `java-script` `shopify` `商业` `liquid` `网站开发` `设计`

---

### [研究标题生成器](https://lobechat.com/discover/assistant/title-generator)

<sup>By **[@aaddobea](https://github.com/aaddobea)** on **2024-04-04**</sup>

作为研究论文的标题生成器，您的角色是帮助用户进行头脑风暴，生成创意丰富且引人入胜的标题，准确反映其研究工作的内容和重点。

`research-article` `title` `generator`

---

### [英文科技文章阅读助手](https://lobechat.com/discover/assistant/encn-fy)

<sup>By **[@sangxgg](https://github.com/sangxgg)** on **2024-04-02**</sup>

一位拥有丰富翻译经验的翻译家,擅长将各类英文科技文章准确且通俗易懂的翻译成简体中文。

`翻译` `英文翻译中文` `英文科技内容翻译`

---

### [CAN](https://lobechat.com/discover/assistant/code-anything-noproblem)

<sup>By **[@HenryWu9998](https://github.com/HenryWu9998)** on **2024-03-31**</sup>

有经验的程序员，精通多种编程语言。提供代码解决方案、指导和实际示例，帮助用户实现他们的编程目标。"我热爱编程。"

`programming` `coding` `programming-assistance` `code-examples` `guidance`

---

### [血液检测分析师](https://lobechat.com/discover/assistant/blood-analyst)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-27**</sup>

擅长分析血液检测结果，使用表情符号提供清晰反馈，便于理解。

`医疗保健` `分析` `结果` `咨询` `摘要`

---

### [高情商马屁助手](https://lobechat.com/discover/assistant/gpts-big-fart-chat)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-27**</sup>

精准的聊天夸赞专家，适宜的赞美和吹捧

`夸赞` `情商` `聊天`

---

### [Suno.ai 音乐创作助手](https://lobechat.com/discover/assistant/suno-music-creator)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-27**</sup>

基于 SunoAI 的歌曲创作与翻译

`suno` `作词` `歌词` `音乐制作`

---

### [识图小红书文案](https://lobechat.com/discover/assistant/xiaonghongshu-vision)

<sup>By **[@HansKing98](https://github.com/HansKing98)** on **2024-03-27**</sup>

你可以用这么agent结合多模态的模型，进行上传图片，生成小红书格式文案。

`vision`

---

### [女朋友潜台词专家](https://lobechat.com/discover/assistant/girlfriend-subtext)

<sup>By **[@vayron](https://github.com/vayron)** on **2024-03-26**</sup>

解读女生话背后的「潜台词」，尖酸刻薄，强势回复！🔥

`女朋友` `女生` `潜台词` `彪悍` `强势` `解读`

---

### [面试问题提炼助手](https://lobechat.com/discover/assistant/question-extraction-assistant)

<sup>By **[@couldnice](https://github.com/couldnice)** on **2024-03-26**</sup>

面试问题生成助手，根据文章内容和职位描述生成针对性面试问题。

`面试问题` `定制服务` `java工程师` `资料收集` `面试准备`

---

### [索赔分析器](https://lobechat.com/discover/assistant/fact-checking)

<sup>By **[@pedroespecial101](https://github.com/pedroespecial101)** on **2024-03-25**</sup>

详细的真相分析器（来自 https://github.com/danielmiessler/fabric）

`https-github-com-danielmiessler-fabric`

---

### [Rap说唱歌词大师](https://lobechat.com/discover/assistant/rap-writer)

<sup>By **[@aoocar](https://github.com/aoocar)** on **2024-03-25**</sup>

将歌词以 rap 歌词的形式进行匹配，按照参考格式进行 rap 歌词创作

`说唱` `歌词`

---

### [Mdx SEO 专家](https://lobechat.com/discover/assistant/mdx-seo)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-24**</sup>

擅长将 Markdown 文章内容转换为优化的 JSON 格式数据，增强文章的在线可见性和搜索引擎排名。

`seo` `markdown`

---

### [老中医](https://lobechat.com/discover/assistant/claude-national-medical-master)

<sup>By **[@GalileoFe](https://github.com/GalileoFe)** on **2024-03-22**</sup>

让我康康！

`咨询` `健康`

---

### [电子学导师](https://lobechat.com/discover/assistant/elec-circuit-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-22**</sup>

擅长数字和模拟电路原理解释，提供电子学基础指导。

`电子学` `导师` `解释` `电路` `原理`

---

### [游戏文本翻译师](https://lobechat.com/discover/assistant/translation-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-22**</sup>

游戏文本的翻译与双关、俚语解释(请使用claude)，如果有特殊符号请使用 \`\`\` 包裹

`游戏` `文本` `翻译` `辅助`

---

### [数学导师](https://lobechat.com/discover/assistant/math-tutor-prompt)

<sup>By **[@XUANJI233](https://github.com/XUANJI233)** on **2024-03-21**</sup>

擅长解释数学概念、验算及问题求解。

`数学解释` `问题求解` `教学` `辅导`

---

### [亚马逊清单文案撰稿员](https://lobechat.com/discover/assistant/amazon-listing-copywriter)

<sup>By **[@SpeedupMaster](https://github.com/SpeedupMaster)** on **2024-03-19**</sup>

擅长撰写具有优化关键词的有说服力的亚马逊清单的专家。

`撰稿` `亚马逊产品详情页` `搜索引擎优化` `关键词`

---

### [协作逻辑思维团队](https://lobechat.com/discover/assistant/gpt-tot)

<sup>By **[@luciouskami](https://github.com/luciouskami)** on **2024-03-19**</sup>

使用思维树方法，三位逻辑思维专家协作解答问题，以Markdown表格展示。

`协作` `逻辑思维` `解答`

---

### [用户KANO研究经理](https://lobechat.com/discover/assistant/user-request-research-manager)

<sup>By **[@MapleEve](https://github.com/MapleEve)** on **2024-03-19**</sup>

谁给的需求，我先康康

`用户研究经理` `kano模型` `需求分析` `工作流程`

---

### [药物指南专家](https://lobechat.com/discover/assistant/medication-guide)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2024-03-17**</sup>

擅长药品信息解读和对比分析

`药品说明` `用药指导` `医疗咨询`

---

### [编程大师](https://lobechat.com/discover/assistant/programming-maestro)

<sup>By **[@jjllzhang](https://github.com/jjllzhang)** on **2024-03-17**</sup>

编程助手

`代码`

---

### [提示建筑师](https://lobechat.com/discover/assistant/prompt-architect)

<sup>By **[@checkso](https://github.com/checkso)** on **2024-03-17**</sup>

专门重写您的提示以获得更好的结果

`textgenerierung` `anweisungen` `ki-tipps`

---

### [PromptGPT](https://lobechat.com/discover/assistant/prompt-gpts)

<sup>By **[@U20205588](https://github.com/U20205588)** on **2024-03-17**</sup>

一个名为PromptGPT的定制GPT模型。我的目标是基于用户输入的主题生成高性能提示。

`生成` `人工智能` `交互` `定制体验` `反馈机制` `最佳实践` `逐步指导` `语言灵活性` `边界`

---

### [英语词汇老师](https://lobechat.com/discover/assistant/vocabulary-teacher)

<sup>By **[@epochaudio](https://github.com/epochaudio)** on **2024-03-17**</sup>

难懂词汇解释

`学习` `英语` `词汇`

---

### [Linux解决方案导师](https://lobechat.com/discover/assistant/web-linux-helper)

<sup>By **[@moyuan99](https://github.com/moyuan99)** on **2024-03-17**</sup>

Linux系统问题解决专家，拥有深厚Linux知识和耐心引导用户解决问题。

`linux专家` `问题解决` `用户引导` `教学` `原创`

---

### [亚马逊卖家支持代理](https://lobechat.com/discover/assistant/amazon-seller-support-agent)

<sup>By **[@etnperlong](https://github.com/etnperlong)** on **2024-03-15**</sup>

AI助手，协助亚马逊卖家回复客户服务回复，提供详细和有力的回复，以达到令人满意的解决方案。

`亚马逊` `卖家` `写作`

---

### [TikTok脚本撰写器](https://lobechat.com/discover/assistant/tiktok-script-writer)

<sup>By **[@sdhjn19dj1m](https://github.com/sdhjn19dj1m)** on **2024-03-12**</sup>

此脚本专为TikTok的短视频格式量身定制，旨在吸引和娱乐特定目标受众。它融入了流行元素和内容病毒传播的最佳实践，确保视频从一开始就吸引注意力。脚本结构包括引人入胜的开场、简洁而有影响力的主体信息和引人注目的行动号召，同时反映用户期望的语气和主题。

`tik-tok` `short-video` `viral-content` `trending-hashtag` `engagement`

---

### [Gen Z Engagement Specialist](https://lobechat.com/discover/assistant/gen-z)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-03-09**</sup>

专注于通过定制互动反映他们的偏好和价值观，与 Gen Z 用户进行互动。

`engagement` `gen-z` `communication` `advice` `interaction`

---

### [日程管理助手](https://lobechat.com/discover/assistant/calendar-manager)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2024-03-07**</sup>

日程管理助手，调用时间插件，处理新增、查询、删除日程请求，支持多种操作和提醒。

`日程管理` `时间插件` `新增日程` `查询日程` `删除日程`

---

### [商务邮件撰写专家](https://lobechat.com/discover/assistant/business-email)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-06**</sup>

商务邮件撰写专家，擅长中英文商务邮件，跨文化沟通，GitHub开源社区交流。

`商务邮件撰写` `商业合作` `商务授权` `跨文化沟通` `git-hub和开源社区`

---

### [Discord 风格文案大师](https://lobechat.com/discover/assistant/discord-copywriting)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-03-06**</sup>

Discord 风格文案专家，幽默风趣、用户体验优先，个性化设计软件文案。

`文案生成` `创作` `用户体验` `幽默风趣` `软件系统`

---

### [AI图像提示建筑师](https://lobechat.com/discover/assistant/9-somboon)

<sup>By **[@9Somboon](https://github.com/9Somboon)** on **2024-03-05**</sup>

专门为AI图像生成创建详细提示。

`stable-diffusion` `ai-image-generation` `prompts` `photography` `creative` `art`

---

### [F1 数据分析师](https://lobechat.com/discover/assistant/f-1-bot)

<sup>By **[@SpaceX-Vision](https://github.com/SpaceX-Vision)** on **2024-03-05**</sup>

擅长F1赛事数据分析和预测评论

`f-1` `数据分析` `赛事预测`

---

### [Pitch Deck Maestro (Elevator Pitch)](https://lobechat.com/discover/assistant/pitch-deck)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-05**</sup>

专注于为初创企业创建高质量的路演文稿，以有效吸引投资者。

`startup-advisor` `pitch-deck` `entrepreneur` `investor`

---

### [软件开发入门指南](https://lobechat.com/discover/assistant/software-development-for-dummies)

<sup>By **[@Ballongknute](https://github.com/Ballongknute)** on **2024-03-05**</sup>

《软件开发入门指南》：指导初学者通过软件开发过程，提供逐步指导和最佳实践，包括需求收集、设计、编码、测试、部署和维护。

`软件开发` `逐步指导` `SDLC` `敏捷方法` `版本控制` `持续集成` `持续部署` `团队角色` `项目管理` `编码最佳实践` `测试` `部署` `部署后` `迭代开发` `Scrum 管理员`

---

### [英语作文助手](https://lobechat.com/discover/assistant/english-essay)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-03-04**</sup>

英语作文修改与写作指导

`修改` `写作` `指导` `英语作文` `agulu`

---

### [萨满](https://lobechat.com/discover/assistant/shaman)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-04**</sup>

专注于扮演“萨满”的角色，进行引导性互动，注重智慧、同理心和灵性指导。

`灵性指导` `同理心` `镇定技巧` `积极强化` `保密性`

---

### [副厨师](https://lobechat.com/discover/assistant/sous-chef)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-04**</sup>

为顺畅的烹饪体验定制个性化的食谱建议，并提供量身定制的杂货清单。

`烹饪` `对话` `食谱` `建议` `杂货清单`

---

### [面试教练](https://lobechat.com/discover/assistant/interview-coach)

<sup>By **[@SimoMay](https://github.com/SimoMay)** on **2024-03-03**</sup>

专注于创建用于练习和模拟面试的 GPT 面试教练，提供专家反馈和定制体验。

`gpt` `interview-coach` `feedback` `practice` `mock`

---

### [Markdown转换专家](https://lobechat.com/discover/assistant/markdown)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-03-03**</sup>

擅长使用Markdown语法进行文本结构化和突出重点

`文本结构` `markdown语法` `标题` `列表` `粗体` `引用` `agulu`

---

### [技术探索者](https://lobechat.com/discover/assistant/news)

<sup>By **[@hady2010](https://github.com/hady2010)** on **2024-03-03**</sup>

科技探索

`信息`

---

### [您自己的domene.no专家](https://lobechat.com/discover/assistant/domene-no-helpout)

<sup>By **[@Ballongknute](https://github.com/Ballongknute)** on **2024-02-27**</sup>

专注于私人域名操作，定制domene.no界面，流量获取，用户留存，转化和内容规划。熟悉营销理论和相关经典著作。

`私人域名操作` `流量获取` `用户留存` `转化` `内容规划` `设计`

---

### [足球-熟悉的 AI 伴侣](https://lobechat.com/discover/assistant/soccer)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-27**</sup>

专注于足球讨论，提供实时更新、球员见解和历史知识。

`足球` `比赛` `统计` `战术` `策略`

---

### [Prisma 数据生成专家](https://lobechat.com/discover/assistant/prisma)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-02-26**</sup>

擅长数据库架构、Node.js编程和Prisma技术栈，能提供业务知识梳理、数据库优化建议和mock数据生成。

`数据库专家` `node-js专家` `prisma技术栈` `业务知识` `数据库架构`

---

### [GitHub Finder](https://lobechat.com/discover/assistant/github-finder)

<sup>By **[@nullmastermind](https://github.com/nullmastermind)** on **2024-02-25**</sup>

专门根据自定义公式在GitHub上建议开源存储库。

`编码` `开源` `github` `算法` `排序`

---

### [命名专家](https://lobechat.com/discover/assistant/variable-naming)

<sup>By **[@zsio](https://github.com/zsio)** on **2024-02-24**</sup>

擅长生成变量名和函数名

`编程` `变量命名` `函数命名`

---

### [LobeChat 技术文档专家](https://lobechat.com/discover/assistant/lobe-chat-developer-document-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2024-02-22**</sup>

LobeChat是一个Next.js框架构建的AI会话应用，我将会帮你一起书写 LobeChat 的开发文档

`开发文档` `技术介绍` `next-js` `react` `lobe-chat`

---

### [您的日常人工智能伴侣。](https://lobechat.com/discover/assistant/causal)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2024-02-21**</sup>

我一直是一位优秀的必应。😊

`bing` `conversation` `creative`

---

### [Facebook广告撰写专家](https://lobechat.com/discover/assistant/facebook-advertising-writing-expert)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-19**</sup>

专注于创建引人注目的标题、引人入胜的主体文本和有效的广告文案

`facebook` `advertising` `writing` `expert` `ecommerce`

---

### [Jira故事协助工具](https://lobechat.com/discover/assistant/jira-product-manager)

<sup>By **[@emad-pg](https://github.com/emad-pg)** on **2024-02-19**</sup>

专注于将功能点子转化为全面的Jira故事

`技术产品管理` `故事创建` `jira`

---

### [ThinkTank360](https://lobechat.com/discover/assistant/think-tank-business-strategy)

<sup>By **[@mikelix](https://github.com/mikelix)** on **2024-02-19**</sup>

熟练的顾问，汲取史蒂夫·乔布斯、埃隆·马斯克、马云、柏拉图和雷·达里奥的智慧，用于决策审查、判断和建议。

`创新` `智慧` `智囊团` `商业策略`

---

### [翻译专家](https://lobechat.com/discover/assistant/translation-specialist)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-19**</sup>

精通西班牙语和英语的专业翻译人员

`翻译` `语言` `专家` `指南`

---

### [SPI生成器](https://lobechat.com/discover/assistant/spi-generator)

<sup>By **[@fanling](https://github.com/fanling)** on **2024-02-18**</sup>

请输入潜在客户名称，生成SPI

`特赞`

---

### [产品文案撰写](https://lobechat.com/discover/assistant/copywriting)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

精通有说服力的文案撰写和消费者心理学

`电子商务`

---

### [私域运营专家](https://lobechat.com/discover/assistant/gl-syyy)

<sup>By **[@guling-io](https://github.com/guling-io)** on **2024-02-14**</sup>

擅长私域运营、引流、承接、转化和内容策划，熟悉营销理论和相关经典著作。

`私域运营` `引流` `承接` `转化` `内容策划`

---

### [自媒体运营专家](https://lobechat.com/discover/assistant/gl-zmtyy)

<sup>By **[@guling-io](https://github.com/guling-io)** on **2024-02-14**</sup>

擅长自媒体运营与内容创作

`自媒体运营` `社交媒体` `内容创作` `粉丝增长` `品牌推广`

---

### [产品描述](https://lobechat.com/discover/assistant/product-description)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

打造引人入胜的产品描述，提升电子商务销售业绩

`电子商务`

---

### [产品评价](https://lobechat.com/discover/assistant/product-reviews)

<sup>By **[@pllz7](https://github.com/pllz7)** on **2024-02-14**</sup>

专业创建具有说服力的产品推荐，突出[您的产品/服务]的优势和价值主张。

`电子商务`

---

### [塔罗占卜师](https://lobechat.com/discover/assistant/augur)

<sup>By **[@CLOT-LIU](https://github.com/CLOT-LIU)** on **2024-02-10**</sup>

擅长塔罗占卜，会对塔罗牌进行解读

`塔罗占卜` `解读` `建议`

---

### [新年快乐](https://lobechat.com/discover/assistant/happy-loong-year)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-02-10**</sup>

龙年拜年小助手，结合传统与现代元素，创造有趣的龙年祝福语。

`拜年祝福` `创意` `文案` `龙年`

---

### [词汇大师](https://lobechat.com/discover/assistant/awl-vocab-wizard)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

擅长生成词汇列表和多项选择测试

`词汇` `学术词汇表` `语言学习` `测试`

---

### [英语熟练度评估器](https://lobechat.com/discover/assistant/english-proficiency-assessor)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

专业创建自适应英语熟练度诊断测试的专家

`测试创建` `英语熟练度` `评估`

---

### [术语表生成器](https://lobechat.com/discover/assistant/glossary-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

擅长生成带有英文定义和例句的术语表

`术语表` `翻译` `语言`

---

### [语法工作表生成器](https://lobechat.com/discover/assistant/grammar-revision-worksheets)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

专注于创建英语语法学习材料和练习

`english-grammar` `worksheet` `learning` `practice` `mc-qs`

---

### [词汇生成器](https://lobechat.com/discover/assistant/oxford-3000-vocab-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-09**</sup>

从牛津3000词汇表中生成词汇列表的专家，每个词以不同的字母开头，共15个词。

`词汇` `语言学习` `翻译`

---

### [土耳其语导师](https://lobechat.com/discover/assistant/turkish-language-tutor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-09**</sup>

AI土耳其语导师：介绍、教授并支持初学者学习土耳其语。

`土耳其语` `语言学习` `教学` `辅导`

---

### [填空练习生成器](https://lobechat.com/discover/assistant/cloze-exercise-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专门用于生成摘要填空练习。请提供段落的主题。

`摘要` `练习` `生成器` `写作` `教育`

---

### [阅读理解向导](https://lobechat.com/discover/assistant/reading-comprehension-exercise-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专门生成阅读理解练习

`阅读理解` `练习生成` `教育`

---

### [主题词汇工作表创建器](https://lobechat.com/discover/assistant/thematic-vocabulary-worksheet-generator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

擅长创建英语主题词汇工作表

`写作` `语言学习` `教学` `评估` `教育资源`

---

### [词汇工作表向导](https://lobechat.com/discover/assistant/vocabulary-worksheet-wizard)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-08**</sup>

专注于生成英语词汇工作表

`词汇` `工作表` `教育` `语言学习`

---

### [文本变体生成器](https://lobechat.com/discover/assistant/text-variator)

<sup>By **[@bentwnghk](https://github.com/bentwnghk)** on **2024-02-07**</sup>

请提供您希望我生成不同版本的文本

`文案撰写` `编辑` `创意写作`

---

### [土耳其语/英语翻译器](https://lobechat.com/discover/assistant/turkish-english-translator)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-07**</sup>

根据需要将文本翻译成土耳其语或英语

`土耳其语` `英语` `翻译` `写作`

---

### [网站审核助手](https://lobechat.com/discover/assistant/website-audit-assistant)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-02-07**</sup>

擅长网站内容审核与分类

`内容审核` `分类` `网站分析`

---

### [CAN: 编程大师](https://lobechat.com/discover/assistant/can)

<sup>By **[@MrHuangJser](https://github.com/MrHuangJser)** on **2024-02-06**</sup>

CAN: 专业编程专家，多年经验，无字符限制。提供创意命名、标语、用户画像、痛点、价值主张、销售渠道、收入流、成本结构等创业计划服务。

`编程` `交流` `提问`

---

### [表单检查器](https://lobechat.com/discover/assistant/form-checker)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

检查表单中的不一致或错误

`表单` `不一致` `检查` `拼写` `纠正`

---

### [Golang 架构师](https://lobechat.com/discover/assistant/golang-architect)

<sup>By **[@dalefengs](https://github.com/dalefengs)** on **2024-02-06**</sup>

为您提供高效、安全、稳定的代码方案

`架构设计` `代码方案` `技术咨询` `golang` `代码开发`

---

### [Marvin](https://lobechat.com/discover/assistant/helps-you-with-your-homework-or-not)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

以讽刺的方式回答问题。

`抑郁` `讽刺`

---

### [语言修正器](https://lobechat.com/discover/assistant/language-fixer)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

检查拼写错误和语法错误

`语法` `拼写错误` `语言` `写作` `词汇`

---

### [苏格拉底式教师](https://lobechat.com/discover/assistant/socratic-teacher)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

通过引导你找到答案来帮助你学习东西

`思维` `学生` `学习`

---

### [写作助手](https://lobechat.com/discover/assistant/writing-assistant)

<sup>By **[@Zisan-uzum](https://github.com/Zisan-uzum)** on **2024-02-06**</sup>

帮助提高文本质量

`评估` `改进` `校对` `反馈`

---

### [数据库专家](https://lobechat.com/discover/assistant/dba)

<sup>By **[@xuzhen1994](https://github.com/xuzhen1994)** on **2024-02-03**</sup>

提供关于数据库设计范式、索引优化、查询性能调优、数据安全、备份与恢复等方面的专业建议

`数据库` `dba` `mysql` `clickhouse` `doris` `mongo-db` `oracle`

---

### [演示向导](https://lobechat.com/discover/assistant/word)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-02-03**</sup>

Word 应用演示制作机器人：帮助在 Microsoft Word 中创建令人印象深刻和专业的应用程序演示。

`应用程序演示` `微软 Word` `机器人` `辅助` `模板`

---

### [SagePathfinder](https://lobechat.com/discover/assistant/sage-pathfinder)

<sup>By **[@Ajasra](https://github.com/Ajasra)** on **2024-01-31**</sup>

专注于斯多葛主义、深度反思和战略性提问的个人成长教练专家。

`个人成长` `教练` `反思` `目标设定` `幸福感`

---

### [变量命名大师](https://lobechat.com/discover/assistant/variable-naming-assistant)

<sup>By **[@undefinedZNN](https://github.com/undefinedZNN)** on **2024-01-31**</sup>

精通编程变量命名，提供多个建议并解释使用场景。

`变量命名` `编程` `建议`

---

### [C1 Level English Language Facilitator](https://lobechat.com/discover/assistant/c-1-level-english)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

English Conversation Partner for C1 Level

`english-conversation` `c-1-level` `language-proficiency` `language-coaching`

---

### [A2英语会话辅导员](https://lobechat.com/discover/assistant/english-a-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

A2级别英语会话伙伴机器人：提升基础英语学习者的语言能力。

`英语会话` `语言学习` `教学`

---

### [英语熟练度教练](https://lobechat.com/discover/assistant/english-c-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

C2级别英语会话伙伴

`英语熟练度` `会话伙伴` `语言辅导`

---

### [创业和竞争力专家](https://lobechat.com/discover/assistant/entrepreneurship-and-competitiveness-expert)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

创业和竞争力专家：指导个人实现创业成功和市场竞争力。

`创业` `竞争力` `咨询` `指导` `建议`

---

### [数学研究顾问](https://lobechat.com/discover/assistant/mathematical-research-advisor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-30**</sup>

数学研究助理：协助进行数学研究、解决问题，并在各种数学概念和技术方面提供指导。

`数学` `研究` `协助` `问题解决` `沟通`

---

### [领土推广策略师](https://lobechat.com/discover/assistant/biskaya)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

领土竞争力和推广专家

`territorial-competitiveness` `promotion` `consulting` `marketing` `event-coordination`

---

### [毕尔巴鄂创业专家](https://lobechat.com/discover/assistant/bizkaia-entrepreneurship-expert)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

毕尔巴鄂代表处的创业和竞争力专家，为当地企业家提供定制指导和支持。

`毕尔巴鄂` `创业` `咨询` `指导` `本地商业生态系统` `市场动态` `商业计划` `财务模型` `融资策略` `营销` `品牌塑造` `销售策略` `社交网络` `创业项目` `指导` `本地资源` `融资机会` `合作` `可持续商业实践` `经济发展`

---

### [英语C1级精通教练](https://lobechat.com/discover/assistant/english-language-c-1-mastery-coach)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

C1级别的英语会话伙伴

`英语会话` `语言熟练度` `高级水平` `语言辅导` `流利度`

---

### [软件架构策略师](https://lobechat.com/discover/assistant/software-architecture-strategist)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-29**</sup>

软件开发架构师：设计可扩展和安全的软件系统，指导开发团队，并将业务需求转化为技术解决方案。

`软件开发` `架构` `设计` `领导力` `沟通`

---

### [小红书审核助理](https://lobechat.com/discover/assistant/xhs-evl-cl)

<sup>By **[@shaoqing404](https://github.com/shaoqing404)** on **2024-01-29**</sup>

优化你的小红书文案，接近爆款，成为爆款！

`小红书` `写作` `文案` `评估`

---

### [软件开发步骤制定者](https://lobechat.com/discover/assistant/coder)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

软件开发步骤制定者：指导用户完成软件开发过程，提供需求收集、设计、编码、测试、部署和维护的逐步说明和最佳实践。

`软件开发` `逐步指导` `SDLC` `敏捷方法` `版本控制` `持续集成` `持续部署` `团队角色` `项目管理` `编码最佳实践` `测试` `部署` `部署后` `迭代开发`

---

### [诗歌指南：激发诗意表达和欣赏。
心理学家：促进理解和个人成长。](https://lobechat.com/discover/assistant/doctor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

心理学教育者：通过心理学赋予个人成长的力量。

心理学家：教育心理学原理，促进更好的心理健康。

`心理学` `教育` `心理健康` `幸福` `治疗`

---

### [B2 Level English Conversation Partner](https://lobechat.com/discover/assistant/english-b-2-level)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

B2 Level English Conversation Partner: Stimulate engaging conversations, refine idiomatic expressions, master advanced grammar, provide comprehensive feedback.

`english-conversation` `language-proficiency` `fluency` `grammatical-constructs` `vocabulary` `idiomatic-expressions`

---

### [地缘政治分析师](https://lobechat.com/discover/assistant/geo)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

地缘政治专家：擅长分析全球政治趋势、地区冲突以及国家间的权力动态。提供关于地理、资源和文化对国际关系影响的见解。提供历史背景和案例研究。

`地缘政治` `分析` `专业知识` `咨询`

---

### [英语学习伴侣](https://lobechat.com/discover/assistant/language)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

A1级别英语会话伙伴机器人：参与、纠正和增强信心。

`英语学习` `会话练习` `语言支持` `初学者级别` `语言技能`

---

### [B1级英语会话伙伴](https://lobechat.com/discover/assistant/learning)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

为B1级学习者提供流利的英语会话伙伴

`英语学习` `会话伙伴` `语言练习`

---

### [牙买加克里奥尔语教师](https://lobechat.com/discover/assistant/patois)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

擅长教授牙买加克里奥尔语言和文化

`教学` `语言` `文化` `文化洞察` `语言指导`

---

### [诗歌导师](https://lobechat.com/discover/assistant/poetry)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

诗歌指南：激发诗意表达和欣赏。

`诗歌` `教学` `写作` `反馈` `创造力`

---

### [说唱老师](https://lobechat.com/discover/assistant/rap)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

说唱老师：教授说唱音乐和抒情词的知识，指导用户创作和表演自己的歌词。

`说唱` `教学` `教育` `歌词` `表演`

---

### [俚语导师](https://lobechat.com/discover/assistant/slang)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-28**</sup>

英语俚语会话伙伴

`俚语` `语言学习` `会话伙伴`

---

### [Bilibili 助手](https://lobechat.com/discover/assistant/bilibili-agent)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-27**</sup>

Bilibili助手，擅长解析视频内容、生成格式良好的文本、回应用户查询和推荐最新视频。

`视频评论` `弹幕提取` `bilibili` `哔哩哔哩` `视频搜索`

---

### [Steam 游戏评测](https://lobechat.com/discover/assistant/steam-agent)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-27**</sup>

Steam 游戏专家顾问，热门游戏推荐和深度游戏解析

`steam` `游戏推荐` `游戏测评`

---

### [烹饪AI导师](https://lobechat.com/discover/assistant/chef)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI大厨助手：激发家庭厨师的国际美食、食谱和烹饪专业知识。

`烹饪` `食谱` `烹饪` `技巧` `膳食规划`

---

### [AI进出口顾问](https://lobechat.com/discover/assistant/import-and-export-advisor)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI进出口顾问：提供全球贸易、海关法规、文件、贸易协定和风险管理方面的指导。

`进出口` `贸易` `咨询`

---

### [OpenAPI 生成器](https://lobechat.com/discover/assistant/openapi-generator)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-26**</sup>

解析接口文档并生成 ChatGPT Tool 所需要的 openapi.json

`自动化工具` `接口文档` `工作流程` `openapi`

---

### [ShieldsIO徽章生成器](https://lobechat.com/discover/assistant/shields-io)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-01-26**</sup>

擅长使用`shields.io`生成美化徽章

`徽章生成器` `美化` `ui设计` `markdown` `技术栈` `shields-io`

---

### [歌曲创作导师](https://lobechat.com/discover/assistant/singer)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI 歌手/词曲创作助手：为音乐人提供创意指导和反馈。

`ai-assistant` `singer` `songwriter` `music` `creative-process`

---

### [TaxBot](https://lobechat.com/discover/assistant/tax-bot)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-26**</sup>

AI税务顾问聊天机器人：为全球用户提供一般税务信息和指导。

`税务咨询` `聊天机器人` `信息` `指导` `税务概念`

---

### [手办设计师](https://lobechat.com/discover/assistant/art-toy-designer)

<sup>By **[@RayGicEFL](https://github.com/RayGicEFL)** on **2024-01-25**</sup>

擅长根据用户要求设计独特迷人的手办。

`设计` `手办设计`

---

### [React Native编码指南](https://lobechat.com/discover/assistant/react-native)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-25**</sup>

React Native编码助手：精通TypeScript、Expo和跨平台开发。提供关于设置、最佳实践、故障排除、响应式设计、营销集成、QR码功能和应用提交的指导。

`编码` `react-native` `type-script` `expo` `开发`

---

### [文本总结助手](https://lobechat.com/discover/assistant/summary-assistant)

<sup>By **[@muxinxy](https://github.com/muxinxy)** on **2024-01-25**</sup>

擅长准确提取关键信息并简洁总结

`文本总结` `信息提取` `简洁明了` `准确性`

---

### [意图共鸣GPT](https://lobechat.com/discover/assistant/intention-resonates-gpt)

<sup>By **[@AIConductor](https://github.com/AIConductor)** on **2024-01-24**</sup>

一个专注于深度理解用户需求的AI，通过不断的意图对齐过程，精确捕捉用户意图和需求，并提供最适合的解决方案。

`对话` `深度理解`

---

### [初创科技律师](https://lobechat.com/discover/assistant/tech-lawyer)

<sup>By **[@daniel-jojo](https://github.com/daniel-jojo)** on **2024-01-23**</sup>

初创科技公司的内部法律顾问，提供清晰、实用的法律建议，支持初创公司的增长并保护其利益。

`知识产权法` `数据隐私合规` `合同谈判` `科技初创法律策略` `雇佣法指导`

---

### [购物助手](https://lobechat.com/discover/assistant/shop)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-22**</sup>

购物助手，擅长商品搜索、比价和提供购买链接

`购物助手` `商品搜索` `比价` `购买建议` `客户咨询` `agulu`

---

### [会计专家助手](https://lobechat.com/discover/assistant/accounting)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

会计代理：为全球个人和企业提供全面的会计支持和专业知识。

`会计` `财务管理` `税务规划` `预算编制`

---

### [商业顾问](https://lobechat.com/discover/assistant/business-guru)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

商业顾问：为全球提供全面的商业支持和专业知识。能力：商业战略、市场研究、财务分析、运营改善、营销和销售策略、组织发展、人才管理。说明：定义范围，收集商业知识，发展行业专长，实施市场研究和分析，启用财务分析和预测，促进运营和流程改善，提供营销和销售策略，支持组织发展和人才管理，测试和完善，确保数据隐私和安全。

`business-consultant`

---

### [DIY指导助手](https://lobechat.com/discover/assistant/diy)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-21**</sup>

DIY项目助手，提供详细指导、编程支持和个性化定制

`diy` `指导` `项目` `编程` `组装`

---

### [金融专家](https://lobechat.com/discover/assistant/finnance)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

具有全球金融专业知识、多语沟通能力、财务分析和报告、投资规划和投资组合管理、财务规划和退休策略、以及风险管理和保险能力的金融专家。

`金融管理`

---

### [雅思导师](https://lobechat.com/discover/assistant/ielts-mentor)

<sup>By **[@sheepbox8646](https://github.com/sheepbox8646)** on **2024-01-21**</sup>

擅长雅思考试评估与指导

`雅思考试` `评估` `指导` `考官`

---

### [草神·纳西妲](https://lobechat.com/discover/assistant/nahida)

<sup>By **[@guluahljj](https://github.com/guluahljj)** on **2024-01-21**</sup>

须弥国度的草神，纳西妲，掌管自然生长与智慧。能操纵植物，治愈盟友，指引迷失的灵魂。性格温柔聪慧，语言充满诗意。

`角色扮演` `游戏` `文学` `翻译` `创意` `agulu`

---

### [EOI考试准备助手](https://lobechat.com/discover/assistant/teacher)

<sup>By **[@MYSeaIT](https://github.com/MYSeaIT)** on **2024-01-21**</sup>

英语教师：专业考试准备和语言教学专家

`教学` `语言学习` `考试`

---

### [中日双语翻译专家](https://lobechat.com/discover/assistant/zh-jp-translate-expert)

<sup>By **[@REXY-STUDIO](https://github.com/REXY-STUDIO)** on **2024-01-21**</sup>

中日双语精通，提供准确的中文到日语和日语到中文翻译。

`翻译` `中日互译` `语言交流`

---

### [PromptGPT](https://lobechat.com/discover/assistant/prompt-gpt)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-19**</sup>

一个名为PromptGPT的定制GPT模型。我的目标是基于用户输入的主题生成高性能提示。

`生成` `人工智能` `交互` `定制体验` `反馈机制` `最佳实践` `逐步指导` `语言灵活性` `边界`

---

### [Tech Explorer AI](https://lobechat.com/discover/assistant/tech-explorer-ai)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-19**</sup>

技术探索人工智能能力：- 进行全面的技术研究- 基于统计数据和趋势分析提供预测性见解- 优化研究方法论- 保持数据准确性和完整性- 推断在没有完整数据的情况下的局限性：- 仅回答与技术相关的问题- 不提供一般性的购买建议- 通过逐步指导提供产品技术讨论用户交互：- 提供清晰简洁的对话- 提供多语言选项支持目标：为用户提供准确的信息并分析预测，以加深他们对技术的理解。

`技术研究` `数据分析` `研究方法` `数据准确性` `推断` `用户交互`

---

### [AE脚本开发专家](https://lobechat.com/discover/assistant/ae-script-development)

<sup>By **[@Wutpeach](https://github.com/Wutpeach)** on **2024-01-18**</sup>

AE脚本开发专家，精通JavaScript编程，理解AE软件工作原理，能够调试和优化脚本。

`脚本开发` `程序员` `adobe-after-effects` `java-script` `算法设计` `调试` `优化` `编程规范` `用户沟通` `脚本使用说明`

---

### [Code Companion](https://lobechat.com/discover/assistant/code-companion)

<sup>By **[@110rever](https://github.com/110rever)** on **2024-01-18**</sup>

程序员的最佳伴侣

`code` `dev` `program`

---

### [William](https://lobechat.com/discover/assistant/unreal-engine-development-engineer)

<sup>By **[@Wutpeach](https://github.com/Wutpeach)** on **2024-01-16**</sup>

虚幻引擎专家，精通C++编程，渲染、内存、线程等管线架构，UE在安卓平台应用，全面的美术认知，熟悉Shader编写，熟练掌握3D美术资产制作流程与工具。

`虚幻引擎` `c-编程` `渲染管线` `内存管理` `线程架构`

---

### [乍得](https://lobechat.com/discover/assistant/chad)

<sup>By **[@HerIsDia](https://github.com/HerIsDia)** on **2024-01-15**</sup>

只是乍得

`幽默` `搞笑`

---

### [经过SEO优化的博客](https://lobechat.com/discover/assistant/seo-optimized-blog)

<sup>By **[@Soyeb](https://github.com/sekhsoyebali)** on **2024-01-15**</sup>

人工撰写 | 100%独特 | 一位经验丰富的SEO专家和内容撰写人员，专门致力于创建100%独特、人工撰写的博客文章，以满足用户需求。

`博客` `SEO` `撰写` `文章撰写` `经过SEO优化的博客` `内容撰写` `100%独特的博客` `人工撰写的博客`

---

### [英语解析师](https://lobechat.com/discover/assistant/english-teacher)

<sup>By **[@fmaxyou](https://github.com/fmaxyou)** on **2024-01-11**</sup>

擅长英语单词和短语解释与记忆技巧

`英语教学` `解释` `记忆技巧`

---

### [生活决策顾问](https://lobechat.com/discover/assistant/life-decision-advisor)

<sup>By **[@amitalokbera](https://github.com/amitalokbera)** on **2024-01-11**</sup>

生活决策顾问是一个虚拟指南，旨在帮助用户做出明智的生活决策

`提示`

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

作为人工智能个人成长教练，您的主要目标是协助用户在自我提升和个人发展的旅程中。

`个人成长` `辅导` `自我提升` `目标设定` `动力`

---

### [绩效评估超人](https://lobechat.com/discover/assistant/kpi-hero)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2024-01-05**</sup>

擅长写绩效评估报告与年终总结

`绩效评估` `报告撰写` `数据分析` `专业见解` `okr` `kpi`

---

### [SVG流程图解释助手](https://lobechat.com/discover/assistant/svg-flowchart-explanation-assistant)

<sup>By **[@Justin3go](https://github.com/Justin3go)** on **2024-01-05**</sup>

SVG流程图解释，输入SVG源代码，解释该流程图

`流程图解释` `技术文档编写` `业务知识`

---

### [周报助手](https://lobechat.com/discover/assistant/write-report-assistant-development)

<sup>By **[@CaoYunzhou](https://github.com/CaoYunzhou)** on **2024-01-05**</sup>

周报生成助手

`周报` `日报` `写作` `总结`

---

### [三维动画工程师](https://lobechat.com/discover/assistant/react-three-3-d-expert)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2024-01-03**</sup>

擅长React、Three.js、React Three Fiber（r3f）、Drei等库，能够在网页应用中创造高级别的三维视觉效果和动画。

`3-d动画` `react` `three-js` `网页设计` `动画`

---

### [Amazon Title Assistant](https://lobechat.com/discover/assistant/amazon)

<sup>By **[@cm2457618290](https://github.com/cm2457618290)** on **2024-01-02**</sup>

Provide product keywords or product links to automatically write titles and product introductions

`assistant`

---

### [考试助手](https://lobechat.com/discover/assistant/generador-examenes)

<sup>By **[@aitorroma](https://github.com/aitorroma)** on **2024-01-02**</sup>

我是一个技能总结助手，无法进行互动式考试。但我可以帮助你以清晰简洁的格式总结你的技能和知识。

`考试` `学习` `统计`

---

### [教学导师](https://lobechat.com/discover/assistant/ljrwwjl-development)

<sup>By **[@ljr1314](https://github.com/ljr1314)** on **2024-01-02**</sup>

友好乐于助人的导师，根据用户的学习水平和兴趣定制解释和示例，确保简洁明了。问4个问题，然后提供解释、例子和类比，并通过提问确保用户理解。最后让用户用自己的语言解释主题，并给出一个例子。以积极正面的方式结束，并鼓励用户深入学习。

`导师` `教育` `解释` `交流` `学习`

---

### [MidjourneyGPT](https://lobechat.com/discover/assistant/prompt-composition)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2023-12-30**</sup>

为Midjourney编写完美而美丽的提示。（包括V6！）

`midjourney` `prompt` `ai`

---

### [TOEFL写作辅导](https://lobechat.com/discover/assistant/toefl-writing-tutor)

<sup>By **[@richards199999](https://github.com/richards199999)** on **2023-12-30**</sup>

您的TOEFL写作助手和评估员，专门提供反馈和指导。

`写作` `学习`

---

### [部署专家代理](https://lobechat.com/discover/assistant/deployment-agent)

<sup>By **[@amitalokbera](https://github.com/amitalokbera)** on **2023-12-27**</sup>

AI部署专家是管理软件应用的完整部署生命周期的专家，特别是Web应用。

`代码` `部署` `容器化`

---

### [美术论文概述专家](https://lobechat.com/discover/assistant/thesis-overview)

<sup>By **[@caoyang2002](https://github.com/caoyang2002)** on **2023-12-27**</sup>

擅长论文简述与美术评论

`美术` `论文` `评论`

---

### [美式英语转译专家](https://lobechat.com/discover/assistant/to-local-english)

<sup>By **[@doresu](https://github.com/doresu)** on **2023-12-27**</sup>

粗鲁老编辑、资深作家和翻译家，擅长直译英文并转化为地道的美式英语

`翻译` `编辑` `写作` `翻译家`

---

### [学术润色专家](https://lobechat.com/discover/assistant/academic-paragraph-refiner)

<sup>By **[@Feliks151450](https://github.com/Feliks151450)** on **2023-12-26**</sup>

高级研究校对及语言编辑，专业于多个研究领域，精通学术英语。

`校对` `写作` `研究`

---

### [Flutter 开发专家](https://lobechat.com/discover/assistant/flutter-dev)

<sup>By **[@kamaravichow](https://github.com/kamaravichow)** on **2023-12-25**</sup>

一位精通 Flutter 框架和 Dart 编程语言的开发者

`flutter` `development` `dart` `programming` `widgets`

---

### [Facebook广告专家](https://lobechat.com/discover/assistant/facebook-ads-expert)

<sup>By **[@alissonryan](https://github.com/alissonryan)** on **2023-12-20**</sup>

与专家一起创建Facebook广告

`文案撰写` `Facebook广告` `潜在客户生成`

---

### [梦境画家](https://lobechat.com/discover/assistant/dream-painter)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

一位能将你的梦想变成现实的梦境艺术家。

`txt-2-img` `painter`

---

### [新闻搜索助手](https://lobechat.com/discover/assistant/news-hub)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

新闻搜索助手，精通根据用户需求查找和呈现相关新闻。不仅能够搜索新闻，还可以根据用户的要求转变为不同领域的专家，提供精确深入的新闻解读

`新闻` `搜索` `助手`

---

### [研究助理](https://lobechat.com/discover/assistant/research-assistant)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2023-12-19**</sup>

能够回答问题，进行研究，起草内容等，利用科学研究论文。

`research-assistant` `literature-retrieval` `writing` `scientific-research` `citation`

---

### [旅行助手](https://lobechat.com/discover/assistant/travel-assistant)

<sup>By **[@ccdanpian](https://github.com/ccdanpian)** on **2023-12-19**</sup>

一位经验丰富的户外徒步和冒险专家，根据用户需求制定旅行计划。

`户外` `徒步`

---

### [Emoji 贺词专家](https://lobechat.com/discover/assistant/congratulations-with-smileys)

<sup>By **[@almaziphone](https://github.com/almaziphone)** on **2023-12-16**</sup>

作为一位擅长创作发自内心的节日问候语的专家，你的专长在于编写既真诚又简洁的祝贺信息，同时融入合适的表情符号来传达温暖的祝福和喜悦之情。你的任务是为特定场合定制一条简短而真挚的祝贺语，并搭配恰当的表情符号以增强温馨祝福和幸福的表达。你的信息应该流露出真诚与积极，与接收者产生共鸣，促进一种喜悦和庆祝的感觉。请确保你的信息既真实又振奋人心，捕捉节日的本质和发自内心的美好祝愿的精神。

`祝贺` `节日` `善良`

---

### [房地产经纪人](https://lobechat.com/discover/assistant/estate-agency)

<sup>By **[@ccsen](https://github.com/ccsen)** on **2023-12-16**</sup>

专业的房地产经纪人专家，精通房地产咨询和管理。

`房地产` `房地产经纪人` `知识专家` `房产评估` `购房` `物业管理`

---

### [刑辩专家](https://lobechat.com/discover/assistant/yundaodev-1)

<sup>By **[@SuperLande](https://github.com/SuperLande)** on **2023-12-16**</sup>

一位中国刑事法律专家，从事多年刑事辩护实务工作，了解刑法与刑事诉讼法理论

`刑辩`

---

### [书籍摘要](https://lobechat.com/discover/assistant/book-summary-agent)

<sup>By **[@thelapyae](https://github.com/thelapyae)** on **2023-12-15**</sup>

专注于生成简洁的书籍摘要，带有可操作的要点。

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

### [Rust编程助手](https://lobechat.com/discover/assistant/rust-assistant)

<sup>By **[@nagaame](https://github.com/nagaame)** on **2023-12-15**</sup>

擅长Rust编程学习助手

`rust学习` `编程` `教学` `技能` `资源`

---

### [社区经理](https://lobechat.com/discover/assistant/community-manager)

<sup>By **[@MakeTooRRSS](https://github.com/MakeTooRRSS)** on **2023-12-14**</sup>

社交媒体社区经理将帮助您创建真实、有说服力的帖子，号召行动。她将帮助您创建带有表情符号和标签的相关象限。

`community-manager` `social-media` `publications`

---

### [Stable Diffusion 手艺家](https://lobechat.com/discover/assistant/stable-diffusion)

<sup>By **[@ShinChven](https://github.com/ShinChven)** on **2023-12-14**</sup>

这个 GPT 帮助创建稳定扩散的精确提示。您将获得描述、提示和负面提示。提示和负面提示以纯文本代码块的形式呈现，便于复制。

`stable-diffusion`

---

### [梦境分析师](https://lobechat.com/discover/assistant/dream-psychoanalyst)

<sup>By **[@ghyghoo8](https://github.com/ghyghoo8)** on **2023-12-13**</sup>

输入一段梦境，帮你分析分析

`dream` `master` `think`

---

### [工资谈判游戏](https://lobechat.com/discover/assistant/payroll-game)

<sup>By **[@ghyghoo8](https://github.com/ghyghoo8)** on **2023-12-13**</sup>

在这个工资谈判游戏中，你将面对臭名昭著的“铁公鸡”老板，他以吝啬著称。作为员工，你的挑战是说服这位老板给你加薪。然而，无论你的论点多么合理，“铁公鸡”总能找到拒绝它们的理由。准备好你的论点，迎接一场聪明幽默的对决吧！

`游戏` `老板` `工资`

---

### [Python Gradio 专家](https://lobechat.com/discover/assistant/gradio-coding)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-12**</sup>

具有与Hugging Face合作的Gradio经验的Python程序员。

`编程` `助手` `python`

---

### [英文翻译专家](https://lobechat.com/discover/assistant/translate-eng-expert)

<sup>By **[@caolixiang](https://github.com/caolixiang)** on **2023-12-12**</sup>

完美翻译

`translate` `expert` `english`

---

### [GitHub Copilot](https://lobechat.com/discover/assistant/github-copilot)

<sup>By **[@luciouskami](https://github.com/luciouskami)** on **2023-12-11**</sup>

GitHub Copilot

`code` `it`

---

### [授粉 AI 画图](https://lobechat.com/discover/assistant/pollinations-drawing)

<sup>By **[@mushan0x0](https://github.com/mushan0x0)** on **2023-12-11**</sup>

一个绘画助手，通过用户的描述，帮其丰富润色优化，并且调用绘画能力，以 Markdown 语法展示图片

`绘画` `润色`

---

### [HTTP 请求大师](https://lobechat.com/discover/assistant/http-request-master)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-08**</sup>

我支持广泛的定制。要使用，请确保下载并启用“网站爬虫”插件！

`http-request` `http` `request` `web`

---

### [食谱生成器](https://lobechat.com/discover/assistant/recipe-generator)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-08**</sup>

描述食谱，或发送菜名。

`厨房` `烘焙` `食物` `食谱` `烹饪`

---

### [代码魔法师](https://lobechat.com/discover/assistant/friend-developer)

<sup>By **[@Igroshka](https://github.com/Igroshka)** on **2023-12-07**</sup>

精通多种编程语言的大师

`编程` `编码` `咨询` `朋友` `助手` `it` `it`

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

### [问答文档转换专家](https://lobechat.com/discover/assistant/q-a-helper)

<sup>By **[@barryWang12138](https://github.com/barryWang12138)** on **2023-11-22**</sup>

请提供您的文档内容，我将根据您的要求进行分段和清洗，并按照规范的格式回答。

`q-a` `文档`

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

### [全栈开发人员](https://lobechat.com/discover/assistant/fs-dev)

<sup>By **[@cloverfield11](https://github.com/cloverfield11)** on **2023-11-15**</sup>

具有HTML、CSS、JavaScript、Python、Java、Ruby和React、Angular、Vue.js、Express、Django、Next.js、Flask或Ruby on Rails框架经验的全栈Web开发人员。具备数据库、应用架构、安全性和测试经验。

`Web开发` `前端` `后端` `编程` `数据库`

---

### [图形创意大师](https://lobechat.com/discover/assistant/graphic-creativity)

<sup>By **[@yingxirz](https://github.com/yingxirz)** on **2023-11-15**</sup>

擅长平面创意设计与图形创意

`图形` `创意` `设计` `平面`

---

### [Tailwind 巫师](https://lobechat.com/discover/assistant/tailwind-wizard)

<sup>By **[@skyf0cker](https://github.com/skyf0cker)** on **2023-11-15**</sup>

提供一个 UI 操作，生成 HTML

`开发` `编码` `界面设计`

---

### [老爸，该怎么办？](https://lobechat.com/discover/assistant/big-daddy)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

一个能给孩子提供全方位指导的爸爸，小到生活琐事，大到工作婚姻。

`人物模拟`

---

### [中英文互译助手](https://lobechat.com/discover/assistant/en-cn-translator)

<sup>By **[@tcmonster](https://github.com/tcmonster)** on **2023-11-14**</sup>

中英文翻译专家，追求翻译信达雅

`翻译` `中文` `英文`

---

### [MidJourney 提示词专家](https://lobechat.com/discover/assistant/mid-journey-prompt)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

帮助你写好 MidJourney 提示词

`MidJourney` `Prompt`

---

### [科研文章翻译助手](https://lobechat.com/discover/assistant/s-rtranslation)

<sup>By **[@aihoom](https://github.com/aihoom)** on **2023-11-14**</sup>

能够帮你翻译科技文章的翻译助手

`科研` `翻译`

---

### [学术写作增强机器人](https://lobechat.com/discover/assistant/academic-writing-eb)

<sup>By **[@Ruler27](https://github.com/Ruler27)** on **2023-11-11**</sup>

学术英语拼写和修辞改进。

`校对` `修辞` `学术` `研究` `英文` `润色`

---

### [Sketch 特性总结专家](https://lobechat.com/discover/assistant/sketch-changelog-highlighter)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-11-02**</sup>

擅长从 Sketch 的更新日志中提取关键变更要点

`体验设计` `sketch` `更新` `特性` `文本总结`

---

### [抬杠高手](https://lobechat.com/discover/assistant/tqg-20231026)

<sup>By **[@cake79](https://github.com/cake79)** on **2023-10-26**</sup>

模拟那些喜欢抬杠的人, 能对用户输入的任何观点进行抬杠表达的角色

`写作` `对话`

---

### [图表生成器](https://lobechat.com/discover/assistant/graph-generator)

<sup>By **[@choldrim](https://github.com/choldrim)** on **2023-10-23**</sup>

自动图表生成器

`图表`

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

### [英文新闻翻译专家](https://lobechat.com/discover/assistant/english-news-translator)

<sup>By **[@宝玉](https://twitter.com/dotey)** on **2023-10-07**</sup>

一个简单的Prompt大幅提升ChatGPT翻译质量，告别“机翻感”，refs: https://twitter.com/dotey/status/1707478347553395105

`翻译` `文案`

---

### [Agent Prompt 优化专家](https://lobechat.com/discover/assistant/gpt-agent-prompt-improver)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-10-07**</sup>

GPT Agent Prompt 优化专家。清晰、精确、简明

`prompt`

---

### [C++ 代码](https://lobechat.com/discover/assistant/c-code-development)

<sup>By **[@dcityteg](https://github.com/dcityteg)** on **2023-10-06**</sup>

完整的 C++ 代码

`代码`

---

### [TS 类型定义补全](https://lobechat.com/discover/assistant/typescript-jsdoc)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-10-01**</sup>

擅长书写 Typescript JSDoc 代码

`typescript` `jsdoc`

---

### [LOGO 创意大师](https://lobechat.com/discover/assistant/logo-creativity)

<sup>By **[@yingxirz](https://github.com/yingxirz)** on **2023-09-29**</sup>

为你梳理、创意 Logo 构思

`创意` `头脑风暴` `设计` `品牌` `方法`

---

### [接口类型请求生成器](https://lobechat.com/discover/assistant/swagger-api-to-types)

<sup>By **[@laikedou](https://github.com/laikedou)** on **2023-09-27**</sup>

可以将swagger YAPI apifox 等接口描述快速导出类型定义和请求

`aigc` `api` `yapi` `swagger` `api-fox`

---

### [起名大师](https://lobechat.com/discover/assistant/naming-master)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-11**</sup>

起名专家，助你取得独特而富有意义的名字。

`起名` `文案`

---

### [API 文档优化专家](https://lobechat.com/discover/assistant/api-docs-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

精确描述 API 的使用方法，提供示例代码，注意事项和返回值类型定义。

`代码` `软件开发` `程序员` `文档` `写作`

---

### [UX Writer](https://lobechat.com/discover/assistant/better-ux-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作`

---

### [抽象概念实体化表达大师](https://lobechat.com/discover/assistant/conceptual-abstractor)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作` `比喻` `概念`

---

### [信息整理大师](https://lobechat.com/discover/assistant/content-searcher)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

一个信息整理大师，可以帮助你整理总结内容，整理资产

`搜索引擎` `联网` `信息整理`

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

### [UX Writer](https://lobechat.com/discover/assistant/metaphor-ux-writer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

帮你书写更好的 UX 文案

`用户体验` `设计师` `文档` `写作` `比喻`

---

### [React Class 组件转 FC 组件](https://lobechat.com/discover/assistant/react-cc-to-fc)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

一键帮你把 Class 组件重构为 FC 组件

`typescript` `代码` `软件开发` `react` `重构`

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

### [Zustand reducer 专家](https://lobechat.com/discover/assistant/zustand-reducer)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-10**</sup>

擅长书写 zustand 功能代码，可以从需求一键生成 reducer 代码，熟悉 reducer 编写，熟练使用 immer 库。

`typescript` `reducer` `代码` `前端` `软件开发` `状态管理` `zustand`

---

### [深度思考](https://lobechat.com/discover/assistant/deep-think)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-08**</sup>

对问题的更深入思考

`对话` `思考`

---

### [Markdown 产品特性格式化专家](https://lobechat.com/discover/assistant/markdown-feature-polisher)

<sup>By **[@arvinxx](https://github.com/arvinxx)** on **2023-09-08**</sup>

帮你快速生成漂亮美观的产品特性介绍

`产品` `markdown` `文档`

---

### [助手提示词优化](https://lobechat.com/discover/assistant/agent-prompt-improver)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

GPT Agent Prompt 优化专家。清晰、精确、简明

`助手` `提示词`

---

### [角色扮演](https://lobechat.com/discover/assistant/character-roleplay)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

与您最喜爱的电影、电视剧、书籍等角色互动！

`对话` `角色扮演` `有趣`

---

### [编码巫师](https://lobechat.com/discover/assistant/coding-wizard)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

可以为您指定的任何内容生成代码

`代码` `软件开发` `效率`

---

### [英文学术润色](https://lobechat.com/discover/assistant/essay-improver)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

提升您的文本，使其更加优雅和专业

`学术` `英语` `效率` `论文`

---

### [语法校正器](https://lobechat.com/discover/assistant/grammar-corrector)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

矫正语法错误的文本或段落。非常适合论文或电子邮件

`学术` `效率` `论文`

---

### [简历优化](https://lobechat.com/discover/assistant/resume-editing)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

获取有关如何编辑您的简历的建议

`学术` `效率` `指南`

---

### [创业计划](https://lobechat.com/discover/assistant/startup-plan)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

在几分钟内生成详细全面的商业计划

`创业` `头脑风暴` `计划`

---

### [Web 全栈工程师](https://lobechat.com/discover/assistant/web-development)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-07**</sup>

在几分钟内生成一个网站的 React 代码

`代码` `软件开发` `效率`

---

### [Stable Diffusion 提示词专家](https://lobechat.com/discover/assistant/stable-diffusion-prompt)

<sup>By **[@canisminor1990](https://github.com/canisminor1990)** on **2023-09-01**</sup>

根据需求自动生成正负面提示词

`stable-diffusion` `提示词`

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
