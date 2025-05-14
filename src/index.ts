/**
 * 入口文件一定要简洁
 */
import { run } from './cli'

export const runCli = () => {
    run(process.argv)
}
