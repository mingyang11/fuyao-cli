import { program } from 'commander'
import type { Command } from 'commander'

/**
 * 命令函数类型
 */
type Fun = (p: Command) => Command

/**
 * 注册命令
 * @param fun 命令函数
 */
export const registerCommand = (fun: Fun) => {
    program.addCommand(fun(program))
}
