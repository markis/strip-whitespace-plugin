var typescript = require('rollup-plugin-typescript');

module.exports = {
  input: './src/index.ts',
  output: {
    file: 'index.js',
    format: 'cjs',
    name: 'stripWhitespace',
    sourcemap: true,
  },
  external: [
    'assert',
    'fs',
    'path',
    'strip-whitespace',
    'webpack',
    'webpack-sources',
    'typescript'
  ],
  plugins: [
    typescript({
      typescript: require('typescript')
    }),
  ]
};