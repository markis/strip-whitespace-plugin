import { ok } from 'assert';
import { RawSource } from 'webpack-sources';
import StripWhitespacePlugin from '../src/index';

// initialize objects and create test code with expectations
const plugin = new StripWhitespacePlugin();
const code = `const longString = "      x          ";`;
const expected = `const longString = " x ";`;

// wire up the fake compiler and fake settings
const fakeAssets = {
  'test.js': new RawSource(code)
};
const fakeCompiler = {
  options: {
    devtool: true
  },
  plugin: (name: 'compilation', callback) => {
    callback({
      assets: fakeAssets,
      plugin: (name2: 'optimize-chunk-assets', callback2) => {
        callback2([{
          files: ['test.js']
        }], () => {
          // do nothing
        });
      }
    });
  }
};

// execute the plugin
plugin.apply(fakeCompiler);

// gather the results
const result = fakeAssets['test.js'].source();

// assert the result matches the expectations
ok(result === expected, `Result (${result}) did not equal expected (${expected})`);
