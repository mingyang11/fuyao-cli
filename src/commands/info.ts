import { consola } from 'consola'
import type { Command } from 'commander'
import pc from 'picocolors'
// import prompts from 'prompts'

const info = (program: Command) => {
    return program.createCommand('info')
}

export default info
