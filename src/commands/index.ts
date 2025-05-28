import create from './create'
import build from './build'
import info from './info'
import { registerCommand } from './registerCommand'

registerCommand(create)
registerCommand(build)
registerCommand(info)
