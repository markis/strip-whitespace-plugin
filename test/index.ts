import { ok } from 'assert';
import { RawSource } from 'webpack-sources';
import StripWhitespacePlugin from '../src/index';

// initialize objects and create test code with expectations
const plugin = new StripWhitespacePlugin();

// wire up the fake compiler and fake settings
type TestFunction = (value?: any, value2?: any) => void;
const fakeAssets = {
  'test.js': new RawSource('')
};
const fakeCompiler: any = {
  plugin: (name: 'compilation', callback: TestFunction) => {
    callback({
      assets: fakeAssets,
      plugin: (name2: 'optimize-chunk-assets', callback2: TestFunction) => {
        callback2([{
          files: ['test.js']
        }], () => {
          // do nothing
        });
      }
    });
  }
};

{
  const code = `const longString = "      x          ";`;
  const expected = `const longString = " x ";`;

  // wire up the fake compiler and fake settings
  fakeAssets['test.js'] = new RawSource(code);
  fakeCompiler.options = { devtool: true };

  // execute the plugin
  plugin.apply(fakeCompiler);

  // gather the results
  const result = fakeAssets['test.js'].source();

  // assert the result matches the expectations
  ok(result === expected, `Result (${result}) did not equal expected (${expected})`);
}

{
  const code = `const longString = "      x          ";`;
  const expected = `const longString = " x ";`;

  // wire up the fake compiler and fake settings
  fakeAssets['test.js'] = new RawSource(code);
  fakeCompiler.options = { devtool: false };

  // execute the plugin
  plugin.apply(fakeCompiler);

  // gather the results
  const result = fakeAssets['test.js'].source();

  // assert the result matches the expectations
  ok(result === expected, `Result (${result}) did not equal expected (${expected})`);
}

{
  const code = `const longString = " x ";`;
  const expected = `const longString = " x ";`;

  // wire up the fake compiler and fake settings
  fakeAssets['test.js'] = new RawSource(code);
  fakeCompiler.options = { devtool: false };

  // execute the plugin
  plugin.apply(fakeCompiler);

  // gather the results
  const result = fakeAssets['test.js'].source();

  // assert the result matches the expectations
  ok(result === expected, `Result (${result}) did not equal expected (${expected})`);
}
