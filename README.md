[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

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

# to run jshint and tests
$ make
```

Creates node module scafolding with [biome], [node test runner] for testing, [github actions] for CI,
[libraries.io] for dependency monitoring.

Generates `.editorconfit`, `.gitignore`, `.npmignore`.

`make check` - is automatically added - lints and runs mocha tests

## License

MIT © Yeoman team

[generator-node]: https://www.npmjs.com/package/generator-node
[biome]: https://biomejs.dev/
[node test runner]: https://nodejs.org/api/test.html
[libraries.io]: https://libraries.io
[github actions]: https://github.com/features/actions

[npm-image]: https://img.shields.io/npm/v/generator-node-make
[npm-url]: https://npmjs.org/package/generator-node-make

[build-url]: https://github.com/pirxpilot/generator-node-make/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/pirxpilot/generator-node-make/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/generator-node-make
[deps-url]: https://libraries.io/npm/generator-node-make
