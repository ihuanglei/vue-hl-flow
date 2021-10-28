import pkg from './package.json'
import { babel } from '@rollup/plugin-babel'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import css from 'rollup-plugin-css-only'

export default {
  input: 'index.js',
  external: ['vue', 'butterfly-dag'],
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
      globals: { 'vue': 'vue', 'butterfly-dag': 'butterfly-dag' }
    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: true,
      globals: { 'vue': 'vue', 'butterfly-dag': 'butterfly-dag' }
    },
    {
      file: pkg.unpkg,
      format: 'umd',
      sourcemap: true,
      name: pkg.name,
      globals: { 'vue': 'vue', 'butterfly-dag': 'butterfly-dag' }
    }
  ],
  plugins: [
    // 解析css
    css({ output: 'index.css' }),
    // 解析vue
    vue({ css: false }),
    // 添加依赖
    resolve(),
    commonjs(),
    babel(
      {
        exclude: 'node_modules/**',
        presets: ['@babel/preset-env']
      }
    )
  ],
}