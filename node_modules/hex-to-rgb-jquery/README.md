# hex-to-rgb-jquery

> Unit testing helper function that converts hex colors to rgb colors

[![license](https://img.shields.io/github/license/tclindner/hex-to-rgb-jquery.svg?maxAge=2592000&style=flat-square)](https://github.com/tclindner/hex-to-rgb-jquery/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/hex-to-rgb-jquery.svg?maxAge=2592000?style=flat-square)](https://www.npmjs.com/package/hex-to-rgb-jquery)
[![Travis](https://img.shields.io/travis/tclindner/hex-to-rgb-jquery.svg?maxAge=2592000?style=flat-square)](https://travis-ci.org/tclindner/hex-to-rgb-jquery)
[![Dependency Status](https://david-dm.org/tclindner/hex-to-rgb-jquery.svg?style=flat-square)](https://david-dm.org/tclindner/hex-to-rgb-jquery)
[![devDependency Status](https://david-dm.org/tclindner/hex-to-rgb-jquery/dev-status.svg?style=flat-square)](https://david-dm.org/tclindner/hex-to-rgb-jquery#info=devDependencies)

## What is hex-to-rgb-jquery?

hex-to-rgb-jquery is a wrapper for onecolor that adjusts its response so it matches the rgb format jQuery returns.

## Install

```bash
$ npm install hex-to-rgb-jquery --save-dev
```

## Usage

Add the following script tag to your unit test runner.

```html
<script src="../node_modules/hex-to-rgb-jquery/dist/hex-to-rgb.js"></script>
```

Example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Test Runner</title>
    <link rel="stylesheet" href="../node_modules/mocha/mocha.css" />
    <!-- lib scripts -->
    <script src="../node_modules/mocha/mocha.js"></script>
    <script src="../node_modules/chai/chai.js"></script>

    <!-- hex-to-rgb script -->
    <script src="../node_modules/hex-to-rgb-jquery/dist/hex-to-rgb.js"></script>

    <!-- Mocha setup -->
    <script type="text/javascript">
      chai.should();
      mocha.setup('bdd');
      // Start the suite.
      window.onload = function() {
        mocha.run();
      };
    </script>
  </head>
  <body>
    <div id="mocha"></div>
    <div id="fixture"></div>

    <!-- source code scripts -->

    <!-- test scripts -->
  </body>
</html>
```

Call the function in the test

```javascript
window.hexToRgbJquery.hexToRgb('#fff');
```

Ex in context of a test:

```javascript
var hexToRgb = window.hexToRgbJquery.hexToRgb;

describe('hex-to-rgb tests', function() {
  context('when a hex value is passed', function() {
    it('with all six characters a valid corresponding rgb value should be returned', function() {
      hexToRgb('#f1f1f1').should.equal('rgb(241, 241, 241)');
    });
  });
});
```

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md).

## Release History

Please see [CHANGELOG.md](CHANGELOG.md).

## License

Copyright (c) 2017 Thomas Lindner. Licensed under the MIT license.
