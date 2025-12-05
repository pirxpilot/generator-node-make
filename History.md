
3.0.5 / 2025-12-05
==================

 * upgrade biome to 2.3.8
 * upgrade to modern version of `inquirer-npm-name`
 * remove unused yeoman-environment
 * remove deprecated yeoman-assert module
 * upgrade yeoman-test
 * replace yarn with pnpm
 * update github actions

3.0.4 / 2025-08-31
==================

 * upgrade github actions
 * enforce using block statements after `if`, `while` etc.

3.0.3 / 2025-07-21
==================

 * use local biome schema to facilitate upgrades

3.0.2 / 2025-06-26
==================

 * add missing biome config
 * update github actions config
 * soft dependency update

3.0.1 / 2025-06-26
==================

 * upgrade biome

3.0.0 / 2025-04-13
==================

 * add support for scoped packages
 * transition to ESM
 * generate ESM module

2.3.2 / 2025-04-12
==================

 * fix biome.json format

2.3.1 / 2025-04-12
==================

 * generate full `package.repository` fields
 * stop generating empty index.js file
 * adjust editorconfig
 * adjust biome config

2.3.0 / 2025-02-04
==================

 * add `test-cov` target to basic make
 * remove unused `cli.js`
 * use biome for linting and code formating

2.2.2 / 2024-05-08
==================

 * soft dependency update

2.2.1 / 2024-02-15
==================

 * overwrite got module resoultion
 * soft dependency update

2.2.0 / 2024-01-11
==================

 * use @pirxpilot/jshint instead of jshint

2.1.0 / 2023-09-24
==================

 * fix link to build status
 * replace tape with native node test runner
 * update github actions to v3

2.0.0 / 2022-01-05
==================

 * use tape instead of mocha/should in generated project
 * setup generated project for github actions
 * replace Travis CI with github actions
 * upgrade to yeoman-generator@~5
 * update inquirer-npm-name to ~4

1.0.2 / 2018-05-16
==================

 * switch from gemnasium to david
 * switch default travis confit to stable + lts

1.0.1 / 2017-03-13
==================

 * fix repo name in package.json

1.0.0 / 2017-03-13
==================

 * upgrade generator to yo 1.x

0.2.0 / 2016-12-01
==================

 * adjust default node version for travis
 * replace .npmignore with `files` in package.json

0.1.0 / 2015-05-10
==================

 * generate test file using slugname
 * use gitConfig to fill in reasonable defaults
 * fork from node generator change package name to node-make
