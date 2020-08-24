// rollup.config.js'
import image from '@rollup/plugin-image'
import babel from 'rollup-plugin-babel'
import commonjs from "rollup-plugin-commonjs"
import url from '@rollup/plugin-url'
import { terser } from 'rollup-plugin-terser' // uglify
import { version } from '../package.json'

const name = 'flappy bird'
const author = 'Lin.JY'
const copyright = new Date().getFullYear()

const banner =
  `${'/*!\n' + ' * '}${name}.js v${version}\n` +
  ` * (c) ${copyright} ${author}\n` +
  ` * Released under the MIT License.\n` +
  ` */`

export default {
    input: 'src/index.js',
    output: {
        banner: banner,
        file: 'dist/bundle.js',
        format: 'cjs'
    },
    plugins: [
        commonjs(),
        babel({ exclude: 'node_modules/**' }),
        image({
            extensions: /\.(png|jpg|jpeg|gif|svg)$/,
            limit: 10000
        }),
        url(),
        terser()
    ]
  }