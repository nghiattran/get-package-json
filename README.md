# get-package-json

> Get the package.json from http://registry.npmjs.com/

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## Installation

```
  npm install --save get-package-json
```

## Usage

```js
var packageJson = require('get-package-json');

packageJson('get-package-json')
  .then(function (res) {
    // Do something
  })
  .catch(function (err) {
    // Do something
  })
```

## Getting To Know Yeoman

Yeoman has a heart of gold. He&#39;s a person with feelings and opinions, but he&#39;s very easy to work with. If you think he&#39;s too opinionated, he can be easily convinced. Feel free to [learn more about him](http://yeoman.io/).

## Created with
[Yeoman](https://npmjs.org/package/yo) and [Generator-simple-package](https://npmjs.org/package/generator-simple-package)

## License
MIT © [NghiaTTran]()

[npm-image]: https://badge.fury.io/js/get-package-json.svg
[npm-url]: https://npmjs.org/package/get-package-json
[travis-image]: https://travis-ci.org/nghiattran/get-package-json.svg?branch=master
[travis-url]: https://travis-ci.org/nghiattran/get-package-json
[daviddm-image]: https://david-dm.org/nghiattran/get-package-json.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/nghiattran/get-package-json
[coveralls-image]: https://coveralls.io/repos/nghiattran/get-package-json/badge.svg
[coveralls-url]: https://coveralls.io/github/nghiattran/get-package-json
