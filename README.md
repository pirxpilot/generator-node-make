# Node with Makefile Generator

Create a Node.js module with Makefile. Forked from [generator-node]

## Install

```sh
$ npm install --global generator-node-make
```

## Usage

```sh
$ mkdir my-new-module
$ cd my-new-module
$ yo node-make

# to run jshint and mocha tests
$ make
```

Creates node module scafolding with [jshint], [mocha], [should] for testing, [travis] for CI,
[gemnasium] for dependency monitoring.
Generates `.editorconfit`, `.gitignore`, `.npmignore`.

`make check` - is automatically added - lints and runs mocha tests

## License

MIT © Yeoman team

[generator-node]: https://www.npmjs.com/package/generator-node
[mocha]: http://mochajs.org
[jshint]: http://jshint.com
[travis]: https://travis-ci.org
[should]: https://www.npmjs.com/package/should
[gemnasium]: https://gemnasium.com
