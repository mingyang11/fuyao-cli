### 1.什么是 monorepo: 将多个项目集成到一个项目的架构思想，类似 react 库

### 2.安装本地依赖时版本写：`workspace/*` 的意义

```jsx
"devDependencies": {
    "fy-core": "workspace:*",
    "fy-shared": "workspace:*"
  }
```

### 3.bin 文件全文叫 binary，即可执行文件

### 4. #!/usr/bin/env node

### 5.tsup 构建工具

    - tsup --watch: /** 监听，代码改变后实时更新，使得软链接的命令可以实时获取最新的打包结果，而不用每次去执行打包命令 */

代表这个文件是可执行文件，用 node 执行

### package.json 配置含义

    1. main: 代表commonjs引用入口
    2. module: 代表esmodule引用入口
    3. types: 代表ts类型文件引入，通常是“index.d.ts”
    4. bin: 告诉脚手架在安装的时候需要将这里面的东西生成一个软连接注册到环境中
    5. files: 执行要发布到npm的文件，package.json默认会带："files": ["bin","index.js"]

### tsconfig.json 配置项的意义

    1. lib: 是 TypeScript 配置中用来指定项目可以使用的 JavaScript API 和类型定义的
    2. allowSyntheticDefaultImports： 允许从没有默认导出（default export）的模块中导入默认值、主要用于处理 CommonJS 模块和 ES 模块之间的兼容性问题
    3. resolveJsonModule: 允许在 TypeScript 中直接导入 JSON 文件、导入的 JSON 文件会被自动解析为 JavaScript 对象、TypeScript 会为导入的 JSON 提供类型检查

### 脚手架命令工具

    1. commander: 命令处理
    2. consola: 颜色打印
    3. picocolors: 背景颜色控制
    4. prompts: 用户交互库

#### 如何修改 create 后的项目名称不是必填的？

在 Commander 中，可以使用方括号 [] 表示可选参数，而不是尖括号 <>

### prettier

#### 设置自动保存的时候行末尾自动加分号

将 "semi": false 改为 "semi": true 即可让 Prettier 在每行语句结束时自动添加分号。
