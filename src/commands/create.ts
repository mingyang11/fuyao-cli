import prompts from 'prompts'
import { loadTemplate } from '../utils/loadTemplate'

const create = async () => {
    const { projectType } = await prompts({
        type: 'select',
        name: 'projectType',
        message: '请选择项目类型',
        choices: [
            { title: 'React', value: 'react' },
            { title: 'Vue', value: 'vue' }
        ]
    })
    const { useTypescript } = await prompts({
        name: 'useTypescript',
        type: 'confirm',
        message: '是否使用TypeScript？',
        initial: true
    })

    const template = projectType === 'react' ? 'template-react' : 'template-vue'
    const templatePath = useTypescript ? `${template}-ts` : template

    loadTemplate(templatePath)
}

export default create
