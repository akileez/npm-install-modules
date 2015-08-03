# npm-install-modules
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

> Install npm modules (dependencies and devDependencies) programmatically. 

Still quite raw as an individual module. Needs more/better options for flexibility.

## Installation
```bash
$ npm install npm-install-modules
```

## Usage
```js
var installModules = require('npm-install-modules')

var opts {
  dependencies: ["mout", "clockin", "colorz"],
  devDependencies: ["tape", "mocha"]
}

installModules(opts, function () {
  // do something here
})
```

results in package.json...

```json
 "dependencies": {
    "clockin": "^0.1.1",
    "colorz": "^0.1.4",
    "mout": "^0.11.0"
  },
  "devDependencies": {
    "mocha": "^2.2.5",
    "tape": "^4.0.1"
  },
```


## Why?
Building a scaffolder. Extracted this module from [npinit](https://npmjs.org/package/npinit). Figured
it would be useful as a stand-alone. 

## See Also
-

## License
[ISC](https://github.com/akileez/npm-install-modules/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/npm-install-modules.svg?style=flat-square
[npm-url]: https://npmjs.org/package/npm-install-modules
[travis-image]: https://img.shields.io/travis/akileez/npm-install-modules.svg?style=flat-square
[travis-url]: https://travis-ci.org/akileez/npm-install-modules
[coveralls-image]: https://img.shields.io/coveralls/akileez/npm-install-modules.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/akileez/npm-install-modules?branch=master
[downloads-image]: http://img.shields.io/npm/dm/npm-install-modules.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/npm-install-modules
