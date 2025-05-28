/**
 * 获取用户输入
 */
import { program } from 'commander'
import './commands'
import pkg from '../package.json'

// 版本号
const version = pkg.version

// 名称
const name = pkg.name

// 描述
const description = pkg.description

// 描述
program.version(version).name(name).description(description)

export const run = (args: string[]) => {
    // 解析命令行参数
    program.parse(args)
}
