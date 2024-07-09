<div align="center"><a name="readme-top"></a>

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/robot.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/convenience-store.webp">

<h1>Lobe Chat 助手索引</h1>

[**提交您的助手 >>**][submit]

[Lobe Chat](https://github.com/lobehub/lobe-chat) 从该存储库访问 [`index.json`][website-url] 来为用户展示可用的 LobeChat 助手列表。

[English](./README.md) · **简体中文**

<!-- SHIELD GROUP -->

[![awesome](https://cdn.rawgit.com/sindresorhus/awesome/d7305f38d29fed78fa85652e3a63e154dd8e8829/media/badge.svg)](https://github.com/lobehub/lobe-chat-agents)
[![website][website-shield]][website-url]
[![][github-action-test-shield]][github-action-test-link]
[![][github-action-release-shield]][github-action-release-link]<br/>
[![][github-contributors-shield]][github-contributors-link]
[![][github-forks-shield]][github-forks-link]
[![][github-stars-shield]][github-stars-link]
[![][github-issues-shield]][github-issues-link]

[![](https://github-production-user-asset-6210df.s3.amazonaws.com/17870709/268670869-f1ffbf66-42b6-42cf-a937-9ce1f8328514.png)](https://github.com/lobehub/lobe-chat)

</div>

<details>
<summary><kbd>目录</kbd></summary>

#### TOC

- [🚀 如何提交您的助手](#-如何提交您的助手)
  - [提交步骤](#提交步骤)
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