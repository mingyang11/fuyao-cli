import type { Command } from 'commander'

const build = (program: Command) => {
    return program.createCommand('build')
}

export default build
