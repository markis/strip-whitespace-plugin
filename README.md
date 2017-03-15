# strip-whitespace-plugin

[![Greenkeeper badge](https://badges.greenkeeper.io/markis/strip-whitespace-plugin.svg)](https://greenkeeper.io/)

De-dupe is an asset minification process that will identify duplicate strings in all scopes of a javascript file and will introduce a variable instead of the string itself.  It does not introduce variables on the global scope, it will keep the variables to the individual scopes that it identifies.  It can also clean up strings so that they don't have large amounts of white space in them.

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


