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
- [🤝 参与贡献](#-参与贡献)

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

> **Important**\
> `createAt` 日期将在合并后自动填充，`agent-template-full.json` 中提供更加丰富的参数配置，请按实际情况选用

> **Note**
>
> - 并非所有的助手都会被接受，我们将审核助手并进行评估
> - 即使您不是作者，也可以提交助手，但最好是由作者自己提交
> - 如果您希望删除您的助手，或者认为描述不正确，请提交问题或拉取请求

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🛳 自主托管

如果您想自己部署此服务，可以按照以下步骤操作

### 部署到 Vercel

单击下面的按钮以部署您的私有助手索引

[![Vercel][deploy-shield]][deploy-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 参与贡献

我们非常欢迎各种形式的贡献。如果你对贡献助手感兴趣，可以大展身手，向我们展示你的奇思妙想。

[![][pr-welcome-shield]][pr-welcome-link]

[![][github-contrib-shield]][github-contrib-link]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

---

#### 📝 License

Copyright © 2023 [LobeHub][profile-url]. <br />
This project is [MIT](./LICENSE) licensed.

<!-- LINK GROUP -->

[back-to-top]: https://img.shields.io/badge/-BACK_TO_TOP-151515?style=flat-square
[deploy-shield]: https://vercel.com/button
[deploy-url]: https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Flobehub%2Flobe-chat-agents&project-name=lobe-chat-agents&repository-name=lobe-chat-agents
[github-action-release-link]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/release.yml
[github-action-release-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-chat-agents/release.yml?label=release&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-action-test-link]: https://github.com/lobehub/lobe-chat-agents/actions/workflows/test.yml
[github-action-test-shield]: https://img.shields.io/github/actions/workflow/status/lobehub/lobe-chat-agents/test.yml?label=test&labelColor=black&logo=githubactions&logoColor=white&style=flat-square
[github-contrib-link]: https://github.com/lobehub/lobe-chat-agents/graphs/contributors
[github-contrib-shield]: https://contrib.rocks/image?repo=lobehub%2Flobe-chat-agents
[github-contributors-link]: https://github.com/lobehub/lobe-chat-agents/graphs/contributors
[github-contributors-shield]: https://img.shields.io/github/contributors/lobehub/lobe-chat-agents?color=c4f042&labelColor=black&style=flat-square
[github-forks-link]: https://github.com/lobehub/lobe-chat-agents/network/members
[github-forks-shield]: https://img.shields.io/github/forks/lobehub/lobe-chat-agents?color=8ae8ff&labelColor=black&style=flat-square
[github-issues-link]: https://github.com/lobehub/lobe-chat-agents/issues
[github-issues-shield]: https://img.shields.io/github/issues/lobehub/lobe-chat-agents?color=ff80eb&labelColor=black&style=flat-square
[github-stars-link]: https://github.com/lobehub/lobe-chat-agents/network/stargazers
[github-stars-shield]: https://img.shields.io/github/stars/lobehub/lobe-chat-agents?color=ffcb47&labelColor=black&style=flat-square
[pr-welcome-link]: https://github.com/lobehub/lobe-chat-agents/pulls
[pr-welcome-shield]: https://img.shields.io/badge/🤖/🏪_submit_agent-%E2%86%92-c4f042?labelColor=black&style=for-the-badge
[profile-url]: https://github.com/lobehub
[submit]: https://github.com/lobehub/lobe-chat-agents/issues/new/choose
[website-shield]: https://img.shields.io/website?down_message=offline&label=chat-agents.lobehub.com&up_message=online&url=https%3A%2F%2Fchat-agents.lobehub.com&labelColor=black&logo=vercel&style=flat-square
[website-url]: https://chat-agents.lobehub.com
