import { readJSONSync } from 'fs-extra';
import { writeFileSync, readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import { indexPath, readmePath, indexCnPath, readmeCnPath, publicDir } from './const';
import { updateAwesomeReadme } from './utils'

const updateAwesome = (filePath: string, md: string, agents, locale?: string) => {

    const data = []

    agents.forEach(({identifier, author, createAt, homepage}, i) => {
        const agentConfigPath = resolve(publicDir, [identifier,locale,'json'].filter(Boolean).join('.'))
        const { config, meta } = readJSONSync(agentConfigPath)
        const header = `### ${meta.title}`
        const subHeader = `> By **[@${author}](${homepage})** on **${createAt}**`
        const content = ['```md', config.systemRole.replaceAll('`', '\\`'), '```'].join('\n')
        const body = [i !== 0 ? '---' : false, header,subHeader,content, `<div align="right">\n\n[![][back-to-top]](#readme-top)\n\n</div>`].filter(Boolean).join('\n\n')
        data.push(body)
    })

    const newMd = updateAwesomeReadme(md, data.join('\n\n'))

    writeFileSync(filePath, newMd, 'utf-8')
}

const runUpdateAwesome = () => {
    const readmeCn = readFileSync(readmeCnPath, 'utf-8');
    const readme = readFileSync(readmePath, 'utf-8');
    const index = readJSONSync(indexPath);
    const indexCn = readJSONSync(indexCnPath);
    updateAwesome(readmePath, readme, index.agents);
    updateAwesome(readmeCnPath, readmeCn, indexCn.agents, 'zh-CN')
}

runUpdateAwesome()