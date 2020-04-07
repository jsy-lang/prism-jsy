import rpi_resolve from '@rollup/plugin-node-resolve'
import rpi_commonjs from '@rollup/plugin-commonjs'

const plugins = [ rpi_resolve(), rpi_commonjs(), ]

export default [
  {input: 'src/prism-jsy.mjs', plugins, 
   output: { file: 'umd/prism-jsy.js', format: 'umd', }},

  {input: 'src/prism-jsy-syntax.mjs', plugins, 
   output: { file: 'iife/prism-jsy-syntax.js', format: 'iife', }},

  {input: 'src/prism-jsy-cdn.mjs', plugins,
   external: k => k.startsWith('https://'),
   output: { file: 'esm/prism-jsy-cdn.mjs', format: 'es', }},
]

