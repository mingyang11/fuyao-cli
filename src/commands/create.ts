import type { Command, CommandOptions } from 'commander';
import prompts from 'prompts';
import { loadTemplate } from '../utils/loadTemplate';

const templateList = ['react', 'vue', 'react-ts', 'vue-ts'];

const create = (program: Command) => {
    return (
        program
            .createCommand('create')
            .arguments('[project-name]')
            .option('-t, --template <template>', 'template')
            // .option('-f, --framework <framework>', 'framework')
            // .option('-r, --remote', 'remote template')
            .description('创建项目')
            .helpOption('-h, --help', '显示帮助信息')
            .action(async (projectName?: string, options?: CommandOptions) => {
                const { template: t } = options as { template: string };

                let template = t;
                /**
                 * 项目名称处理
                 */
                if (!projectName) {
                    const projectResult = await prompts({
                        type: 'text',
                        name: 'projectName',
                        message: '请输入项目名称',
                        initial: 'my-project',
                        validate: (value: string) => {
                            if (value.trim().length === 0) return '项目名称不能为空';
                            return true;
                        }
                    });

                    // 取消创建
                    if (!projectResult.projectName) return;
                    // 设置项目名称为交互输入的值
                    projectName = projectResult.projectName;
                }

                // 如果项目名称仍然为空，则提示错误（一般不会走到这里）
                if (!projectName) {
                    console.log('项目名称不能为空');
                    return;
                }

                /**
                 * 输入了模版，但是模版不存在的情况
                 */
                if (!templateList.includes(template) && template) {
                    console.log('模板不存在');
                    return;
                }

                /**
                 * 没有输入模版的情况
                 */
                if (!template) {
                    const templateResult = await prompts({
                        type: 'select',
                        name: 'template',
                        message: '请选择模板',
                        choices: templateList.map(item => ({
                            title: item,
                            value: item
                        }))
                    });
                    if (!templateResult.template) {
                        console.log('取消创建');
                        return;
                    }

                    template = templateResult.template;
                }

                /**
                 * 选择使用本地模版还是远程模版
                 */
                const originResult = await prompts({
                    type: 'confirm',
                    name: 'origin',
                    message: '是否使用远程模版',
                    initial: false
                });
                // 使用远程模版，从git上拉模版代码
                if (originResult.origin) {
                    console.log('暂不支持远程模版');
                    return;
                } else {
                    // 使用本地模版
                    loadTemplate(template, projectName);
                }
            })
    );
};

export default create;
