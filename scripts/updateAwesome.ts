import { readme, readmePath, readmeCn, readmeCnPath, index, indexCn, publicDir } from './const';
import { readJSONSync } from 'fs-extra';
import { writeFileSync } from 'fs';
import { resolve } from 'node:path';
import { updateAwesomeReadme } from './utils'

const updateAwesome = (filePath: string, md: string, agents, locale?: string) => {

    const data = []

    agents.forEach(({identifier, author, createAt, homepage}) => {
        const agentConfigPath = resolve(publicDir, [identifier,locale,'json'].filter(Boolean).join('.'))
        const { config, meta } = readJSONSync(agentConfigPath)
        const header = `### ${meta.title}`
        const subHeader = `<sup>By [@${author}](${homepage}) on **${createAt}**</sup>`
        const content = ['```md', config.systemRole.replaceAll('`', '\\`'), '```'].join('\n')
        const body = [header,subHeader,content].join('\n\n')
        data.push(body)
    })

    const newMd = updateAwesomeReadme(md, data.join('\n\n'))

    writeFileSync(filePath, newMd, 'utf-8')
}

const runUpdateAwesome = () => {
    updateAwesome(readmePath, readme, index.agents);
    updateAwesome(readmeCnPath, readmeCn, indexCn.agents, 'zh-CN')
}

runUpdateAwesome()