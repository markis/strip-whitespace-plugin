# strip-whitespace-plugin

[![Build Status](https://travis-ci.org/markis/strip-whitespace-plugin.svg?branch=master)](https://travis-ci.org/markis/strip-whitespace-plugin) [![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-plugin.svg)](https://greenkeeper.io/)

Before strip-whitespace:
```
function() {
  if (condition) {
    const longString = '      x          ';
  }
}
```

After strip-whitespace:
```
function() {
  if (condition) {
    const longString = ' x ';
  }
}
```


