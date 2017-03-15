# strip-whitespace-plugin

[![Build Status](https://travis-ci.org/markis/strip-whitespace.svg?branch=master)](https://travis-ci.org/markis/strip-whitespace) [![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace.svg)](https://greenkeeper.io/)

Strip-Whitespace-Plugin will remove extraneous spaces from string. It's perfect for working with rendering templates (ex. mustache, handlebars) or es6 javascript templates. It works with anything where you might create very long strings.

##### Before strip-whitespace:
```
function() {
  if (condition) {
    const longString = '  String   with    some    extra   spaces  ';
  }
}
```

##### After strip-whitespace:
```
function() {
  if (condition) {
    const longString = ' String with some extra spaces ';
  }
}
```

##### Webpack usage

Put this plugin before your minification plugins (ex. uglify-js)

```
var stripWhitespace = require('../index.js');

module.exports = {
  ...
  plugins: [
    new stripWhitespace(),
    ...
    // put your minification plugins here.
  ]
  ...
};

```
