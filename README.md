## Node Logger

![npm](https://img.shields.io/npm/v/node-logger-global) [![Support Node of LTS](https://img.shields.io/badge/node-latest-brightgreen.svg)](https://nodejs.org/) [![dependencies Status](https://status.david-dm.org/gh/request/request.svg)](https://david-dm.org/request/request)

A simple logging library for console and file logs for each request.

## Installation

```bash
$ npm install node-logger-global
```

## Usage

```javascript
let logger = require("node-logger-global");
```

## Examples

```javascript
// On index.js or server.js file with express framework
app.use( logger() );

// or simply use
logger();
```

## License

[MIT license](http://opensource.org/licenses/MIT).

## Copyright

Copyright &copy; 2021. S.Gupta