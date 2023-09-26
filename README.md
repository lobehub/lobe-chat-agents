<div align="center"><a name="readme-top"></a>

<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/robot.webp">
<img height="120" src="https://gw.alipayobjects.com/zos/kitchen/qJ3l3EPsdW/split.svg">
<img height="120" src="https://registry.npmmirror.com/@lobehub/assets-emoji/1.3.0/files/assets/convenience-store.webp">

<h1>Lobe Chat Agents Index</h1>

[**Submit Your Agent >>**][submit]

[Lobe Chat](https://github.com/lobehub/lobe-chat) accesses [`index.json`][website-url] from this repo to show user the list of available agents for LobeChat.

**English** · [简体中文](./README.zh-CN.md)

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
<summary><kbd>Table of contents</kbd></summary>

#### TOC

- [🚀 How to Submit your Agent](#-how-to-submit-your-agent)
  - [Step-by-step Instructions](#step-by-step-instructions)
- [🛳 Self Hosting](#-self-hosting)
  - [Deploy to Vercel](#deploy-to-vercel)
- [🤝 Contributing](#-contributing)

####

</details>

## 🚀 How to Submit your Agent

You can submit through [**Submit Your Agent**][submit], or use the following steps

### Step-by-step Instructions

If you wish to add an agent onto the index, make an entry in `agents` directory using `agent-template.json` or `agent-template-full.json`, write a short description and tag it appropriately then open as a pull request ty!

1. <kbd>Fork</kbd> of this repository.
2. Make a copy of `agent-template.json` or `agent-template-full.json`
3. Fill in the copy and rename it appropriately
4. Move it into `agents` directory
5. Submit a pull request and wait for review.

> **Important**\
> The `createAt` date will be automatically populated after merge. Please choose the appropriate parameter configuration from `agent-template-full.json` based on your specific needs. This file provides a more comprehensive set of parameters for customization.

> **Note**
>
> - Not all agents will be accepted, we will review the agent and make an assessment.
> - You can submit agents even if you are not the author, but it is preferred that the author do it themselves.
> - If you wish to have your agent removed, or believes the description does not properly describe your agent, please open the issue or pull request.

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🛳 Self Hosting

If you want to deploy this service by yourself, you can follow the steps below.

### Deploy to Vercel

Click button below to deploy your private agents index.

[![Deploy with Vercel][deploy-shield]][deploy-url]

<div align="right">

[![][back-to-top]](#readme-top)

</div>

## 🤝 Contributing

Contributions of all types are more than welcome, if you are interested in contributing agent, feel free to show us what you’re made of.

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
