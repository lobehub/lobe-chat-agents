import { Octokit } from "@octokit/rest";
import "dotenv/config";
import { formatAgentJSON } from "./check.mjs";
import { camelCase } from "lodash-es";
import { existsSync, writeFileSync } from "node:fs";
import { resolve } from "path";
import { agentsDir } from "./const.mjs";
import pkg from "../package.json";
import { execSync } from "node:child_process";
class AutoSubmit {
  owner = "lobehub";
  repo = "lobe-chat-agents";
  issueNumber = process.env.ISSUE_NUMBER;

  constructor() {
    this.octokit = new Octokit({ auth: `token ${process.env.GH_TOKEN}` });
  }

  async run() {
    const issue = await this.getIssue();
    if (!issue) return;
    const comment = this.genCommentMessage(json);
    const agent = await this.formatIssue(issue);
    const agentName = camelCase(agent.meta.title);
    const fileName = agentName + ".json";
    const filePath = resolve(agentsDir, fileName);

    // check same name
    if (existsSync(filePath)) {
      await this.createComment(
        [
          `🚨 Same name exist <${`${pkg.homepage}/blob/main/agents/${fileName}`}>, please rename your agent and submit again`,
          "---",
          comment,
        ].join("\n"),
      );
      await this.addLabels('🚨 Auto Check Fail')
      return;
    }

    // comment in issues
    await this.createComment(comment);
    await this.addLabels('✅ Auto Check Pass')

    // generate file
    writeFileSync(filePath, JSON.stringify(agent, null, 2), {
      encoding: "utf8",
    });

    // commit and pull request
    this.gitCommit(agentName);
    await this.createPullRequest(agentName, comment);
  }

  gitCommit(agentName) {
    execSync(`git checkout -b agent/${agentName}`);
    execSync("git add .");
    execSync(`git commit -m "✨ feat(agent): Add ${agentName}"`);
    execSync(`git push origin agent/${agentName}`);
  }

  genCommentMessage(json) {
    return [
      "🤖 Automatic generated agent config file",
      "```json",
      JSON.stringify(json, null, 2),
      "```",
    ].join("\n");
  }

  async createPullRequest(agentName, body) {
    const { owner, repo, octokit, issueNumber } = this;
    const pr = await octokit.pulls.create({
      owner: owner,
      repo: repo,
      title: `[AgentSubmit] ${agentName} (#${issueNumber})`,
      head: `agent/${agentName}`,
      base: "main",
      body,
    });
  }
  async getIssue() {
    const { owner, repo, octokit, issueNumber } = this;
    const issue = await octokit.issues.get({
      owner,
      repo,
      issue_number: issueNumber,
    });
    return issue.data;
  }

  async addLabels(label) {
    const { owner, repo, octokit, issueNumber } = this;
    await octokit.issues.addLabels({
      owner,
      repo,
      issue_number: issueNumber,
      labels: [label],
    });
  }

  async createComment(body) {
    const { owner, repo, octokit, issueNumber } = this;
    const { data } = await octokit.issues.createComment({
      owner,
      repo,
      issue_number: issueNumber,
      body,
    });
    return data.id;
  }

  markdownToJson(markdown) {
    const lines = markdown.split("\n");
    const json = {};

    let currentKey = "";
    let currentValue = "";

    lines.forEach((line) => {
      if (line.startsWith("###")) {
        if (currentKey && currentValue) {
          json[currentKey] = currentValue.trim();
          currentValue = "";
        }
        currentKey = line.replace("###", "").trim();
      } else {
        currentValue += line + "\n";
      }
    });

    if (currentKey && currentValue) {
      json[currentKey] = currentValue.trim();
    }

    json.tags = json.tags
      .replaceAll("，", ",")
      .replaceAll(", ", ",")
      .split(",");

    return json;
  }

  async formatIssue(data) {
    const json = this.markdownToJson(data.body);
    const agent = {
      author: data.user.login,
      config: {
        systemRole: json.systemRole,
      },
      homepage: data.user.html_url,
      identifier: "plugin identifier",
      locale: json.locale,
      meta: {
        avatar: json.avatar,
        tags: json.tags,
        title: json.title,
        description: json.description,
      },
    };

    return await formatAgentJSON(agent);
  }
}

const autoSubmit = new AutoSubmit();

await autoSubmit.run();
