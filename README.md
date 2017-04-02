# strip-whitespace-plugin

[![node](https://img.shields.io/node/v/strip-whitespace-plugin.svg)](https://www.npmjs.com/package/strip-whitespace-plugin)
[![Travis](https://img.shields.io/travis/markis/strip-whitespace-plugin.svg)](https://travis-ci.org/markis/strip-whitespace-plugin)
[![AppVeyor](https://img.shields.io/appveyor/ci/markis/strip-whitespace-plugin.svg)](https://ci.appveyor.com/project/markis/strip-whitespace-plugin)
[![Known Vulnerabilities](https://snyk.io/test/github/markis/strip-whitespace-plugin/badge.svg)](https://snyk.io/test/github/markis/strip-whitespace-plugin)
[![David](https://img.shields.io/david/markis/strip-whitespace-plugin.svg)](https://david-dm.org/markis/strip-whitespace-plugin)
[![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-plugin.svg)](https://greenkeeper.io/)
[![Codacy coverage](https://img.shields.io/codacy/coverage/bf76c91f230243129f7c1304b1681a45.svg)](https://www.codacy.com/app/markis/strip-whitespace-plugin/files)
[![Codacy grade](https://img.shields.io/codacy/grade/bf76c91f230243129f7c1304b1681a45.svg)](https://www.codacy.com/app/markis/strip-whitespace-plugin)


[![Build Status](https://travis-ci.org/markis/strip-whitespace-plugin.svg?branch=master)](https://travis-ci.org/markis/strip-whitespace-plugin) [![Known Vulnerabilities](https://snyk.io/test/github/markis/strip-whitespace-plugin/badge.svg)](https://snyk.io/test/github/markis/strip-whitespace-plugin) [![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-plugin.svg)](https://greenkeeper.io/)

Strip-Whitespace-Plugin is a plugin for webpack that will remove extraneous spaces from strings. It's perfect for working with rendering templates (ex. mustache, handlebars) or es6 javascript templates. It works with anything where you might create very long strings.

This plugin and the [Strip-Whitespace-Loader](https://npm.im/strip-whitespace-loader) do the same thing. The loader can be applied to specific modules/files/assets. This plugin will strip whitespace on all assets.

##### Before strip-whitespace:
``` javascript
function() {
  if (condition) {
    const longString = '  String   with    some    extra   spaces  ';
  }
}
```

##### After strip-whitespace:
``` javascript
function() {
  if (condition) {
    const longString = ' String with some extra spaces ';
  }
}
```

##### Webpack usage

Put this plugin before your minification plugins (ex. uglify-js)

``` javascript
var StripWhitespace = require('strip-whitespace-plugin');

module.exports = {
  ...
  plugins: [
    new StripWhitespace(),
    ...
    // put your minification plugins here.
  ]
  ...
};

```
