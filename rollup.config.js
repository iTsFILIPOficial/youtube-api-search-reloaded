import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';
import { terser } from 'rollup-plugin-terser';

const dist = 'dist';
const globals = {
  url: 'url',
};

export default {
  input: 'src/index.js',
  output: [
    {
      file: `${dist}/bundle.cjs.js`,
      format: 'cjs',
      globals,
    },
    {
      file: `${dist}/bundle.esm.js`,
      format: 'esm',
      globals,
    },
    {
      name: 'youtubeApiSearchReloaded',
      file: `${dist}/bundle.umd.js`,
      format: 'umd',
      globals,
    },
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: true,
    }),
    commonjs({
      include: 'node_modules/**',
    }),
    json(),
    terser({
      compress: true,
    }),
  ],
};
