import { copy } from 'fs-extra'
import path from 'path'

export const loadTemplate = async (template: string) => {
    await copy(path.join(__dirname, `../templates/${template}`), process.cwd())
}
