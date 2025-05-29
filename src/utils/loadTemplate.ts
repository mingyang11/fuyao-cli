import { copy } from 'fs-extra';
import path from 'path';

/**
 * 加载本地模版
 * @param template 模版名称
 * @param projectName 项目名称
 */
export const loadTemplate = async (template: string, projectName?: string) => {
    await copy(path.join(__dirname, `../templates/template-${template}`), path.join(process.cwd(), projectName));
    console.log(`${projectName} 创建成功，请进入项目目录：cd ${projectName}`);
};
