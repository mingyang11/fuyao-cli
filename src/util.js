import fs from 'node:fs';
import download from 'download-git-repo';
import ora from 'ora';

const spinner = ora('下载中');

// 检查路径
export const checkPath = (path) => {
  if (fs.existsSync(path)) {
    return true;
  } else {
    return false;
  }
};

// 下载模版
export const downloadTemplate = (branch, projectName) => {
  return new Promise((resolve, reject) => {
    spinner.start();
    download(
      `direct:https://gitee.com/chinafaker/vue-template.git#${branch}`,
      projectName,
      { clone: true },
      (err) => {
        if (err) {
          console.log(err);
          reject(err);
        }
        resolve();
        spinner.succeed('下载完成');
      }
    );
  });
};
