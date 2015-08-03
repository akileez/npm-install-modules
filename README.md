# npm-install-modules
[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![experimental][stability-image]][stability-url]
[![ISC license][license-img]][license-url]

> Install npm modules (dependencies and devDependencies) programmatically. 

Still quite raw as an individual module. Needs more testing in the wild (production use)
to flesh out use-case development.

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
[downloads-image]: http://img.shields.io/npm/dm/npm-install-modules.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/npm-install-modules
[stability-image]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[stability-url]: https://github.com/akileez/npm-install-modules
[license-img]: https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square
[license-url]: https://github.com/akileez/npm-install-modules/blob/master/license.md
