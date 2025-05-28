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
                const { template } = options;
                /**
                 * 项目名称处理
                 */
                if (!projectName) {
                    const result = await prompts({
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
                    if (!result.projectName) return;
                    // 设置项目名称为交互输入的值
                    projectName = result.projectName;
                }

                // 如果项目名称仍然为空，则提示错误（一般不会走到这里）
                if (!projectName) {
                    console.log('项目名称不能为空');
                    return;
                }

                // 如果模板不存在，则推交互，日志提示错误
                if (!templateList.includes(template)) {
                    console.log('模板不存在');
                    return;
                }

                console.log('create', projectName, options);
            })
    );
};

export default create;
