#!/usr/bin/env node
// 告诉操作系统执行自定义命令的时候使用node来执行

import { program } from 'commander';
import inquirer from 'inquirer';
import fs from 'node:fs';
import { checkPath, downloadTemplate } from './util.js';

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

program.version(packageJson.version);

program
  .command('create <projectName>')
  .alias('c')
  .description('创建项目')
  .action((projectName) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'projectName',
          message: '请输入项目名称',
          default: projectName,
          validate: (input) => {
            if (checkPath(input)) {
              console.log('文件夹已存在');
              return;
            }
            return true;
          },
        },
        {
          type: 'confirm',
          name: 'isTs',
          message: '是否使用TypeScript模版',
        },
      ])
      .then((res) => {
        const { projectName, isTs } = res;
        if (isTs) {
          downloadTemplate('ts', projectName);
        } else {
          downloadTemplate('js', projectName);
        }
      });
  });
program.parse(process.argv);
