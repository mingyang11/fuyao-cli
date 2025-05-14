import { consola } from 'consola'
import pc from 'picocolors'
import prompts from 'prompts'

const info = async () => {
    // 1.打印日志
    // 2.颜色控制
    // 3.提问
    // consola.warn(pc.bgRed('这是一个警告'))
    // consola.info(pc.bgBlue('这是一个信息'))
    // consola.success(pc.bgGreen('这是一个成功'))
    // consola.error(pc.bgRed('这是一个错误'))
    const { name } = await prompts({
        type: 'text',
        name: 'name',
        message: '请输入你的名字'
    })
    const { age } = await prompts({
        type: 'number',
        name: 'age',
        message: '请输入你的年龄'
    })

    const { hobby } = await prompts({
        type: 'multiselect',
        name: 'hobby',
        message: '请选择你的爱好',
        choices: ['篮球', '足球', '羽毛球', '乒乓球']
    })
    const { gender } = await prompts({
        type: 'select',
        name: 'gender',
        message: '请选择你的性别',
        choices: ['男', '女']
    })
    consola.info(name)
    consola.info(age)
    consola.info(hobby)
    consola.info(gender)
}

export default info
