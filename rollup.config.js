var typescript = require('rollup-plugin-typescript');

module.exports = {
  entry: './src/index.ts',
  dest: 'index.js',
  format: 'cjs',
  moduleId: 'strip-whitespace',
  moduleName: 'stripWhitespace',
  sourceMap: true,
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