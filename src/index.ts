import StripWhitespace from 'strip-whitespace';
import { Compiler } from 'webpack';
import { RawSource, ReplaceSource, SourceMapSource } from 'webpack-sources';

const stripWhitespace = new StripWhitespace();
const pluginName = 'strip-whitespace-plugin';

export default class StripWhitespacePlugin {

  public apply(compiler: Compiler) {

    compiler.plugin('compilation', (compilation: any) => {
      compilation.plugin('optimize-chunk-assets', (chunks: any, callback: Function) => {
        chunks.forEach((chunk: any) => {
          chunk.files
            .forEach((file: string) => {
              const asset = compilation.assets[file];
              const code = asset.source();

              const result = stripWhitespace.strip(code);

              if (result.replacements.length === 0) {
                // nothing to do here
                return;
              }

              if (!compiler.options.devtool) {
                compilation.assets[file] = new RawSource(result.code);
              } else {
                const replaceSource = new ReplaceSource(compilation.assets[file], pluginName);

                // perform the replacements
                for (let replacement of result.replacements) {
                  replaceSource.replace(replacement.start, replacement.end - 1, replacement.text);
                }

                // generate the new sourcemap
                const sourceAndMap = replaceSource.sourceAndMap();
                const { source, map } = sourceAndMap;

                // replace the asset with the new sourcemap
                compilation.assets[file] = new SourceMapSource(result.code, pluginName, map, code);
              }
            });
        });
        callback();
      });
    });
  }
}
