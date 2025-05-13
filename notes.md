### 1.什么是 monorapo: 将多个项目集成到一个项目的架构思想

### 2.安装本地依赖时版本写：`workspace/*` 的意义

```jsx
"devDependencies": {
    "fy-core": "workspace:*",
    "fy-shared": "workspace:*"
  }
```

### 3.bin 文件全文叫 binary，即可执行文件

### 4. #!/usr/bin/env node

代表这个文件是可执行文件，用 node 执行

### package.json 配置含义

    1. main: 代表commonjs引用入口
    2. module: 代表esmodule引用入口
    3. types: 代表ts类型文件引入，通常是“index.d.ts”
    4. bin: 告诉脚手架在安装的时候需要将这里面的东西生成一个软连接注册到环境中
    5. files: 执行要发布到npm的文件，package.json默认会带："files": ["bin","index.js"]

### tsconfig.json 配置项的意义

    1. lib: 是 TypeScript 配置中用来指定项目可以使用的 JavaScript API 和类型定义的
