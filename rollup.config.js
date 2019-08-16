import babel from 'rollup-plugin-babel';
import {eslint} from 'rollup-plugin-eslint';

const libraryName = 'type-check';
const input = './src/index.js';
const plugins = [
  eslint(),
  babel({
    exclude: 'node_modules/**',
  }),
];

export default
{
  input,
  output: [
    {
      file: './lib/'+ libraryName +'.esm.js',
      format: 'esm',
    },
    {
      file: './lib/'+ libraryName +'.js',
      format: 'cjs',
      exports: 'named',
    },
  ],
  plugins,
};
