import { defineConfig } from 'tsup'

export default defineConfig({
    dts: true, // 是否输出.d.ts文件
    entry: ['./src/index.ts'], // 入口
    format: ['cjs', 'esm', 'iife'], // 输出文件格式
    outDir: 'dist', // 出口
    clean: true, // 是否删除dist目录
    minify: true, // 是否压缩
    splitting: true, // 是否拆分
    treeshake: true // 是否摇树
})
