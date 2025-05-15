/**
 * 获取用户输入
 */
import { program } from 'commander'
import pkg from '../package.json'

import create from './commands/create'
import build from './commands/build'
import info from './commands/info'
// 版本号
const version = pkg.version

// 名称
const name = pkg.name

// 描述
const description = pkg.description

// 描述
program.version(version).name(name).description(description)
// 创建命令
program.command('create').action(create).description('创建项目')
// 构建命令
program.command('build').action(build).description('构建项目')
// 信息命令
program.command('info').action(info).description('信息')

export const run = (args: string[]) => {
    // 解析命令行参数
    program.parse(args)
}
