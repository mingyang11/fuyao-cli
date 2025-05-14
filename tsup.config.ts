import { defineConfig } from 'tsup'

export default defineConfig({
    dts: true, // 是否输出.d.ts文件
    entry: ['./src/index.ts'], // 入口
    format: ['cjs', 'esm', 'iife'], // 输出文件格式
    outDir: 'dist' // 出口
})
