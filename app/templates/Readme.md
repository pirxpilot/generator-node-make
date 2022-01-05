[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# <%= slugname %>

<%= props.description %>

## Install

```sh
$ npm install --save <%= slugname %>
```

## Usage

```js
var <%= safeSlugname %> = require('<%= slugname %>');

<%= safeSlugname %>('Rainbow');
```<% if (props.cli) { %>

```sh
$ npm install --global <%= slugname %>
$ <%= slugname %> --help
```<% } %><% if (props.browser) { %>

```sh
# creates a browser.js
$ npm run browser
```<% } %>

## License

<%= props.license %> © [<%= props.authorName %>](<%= props.authorUrl %>)

[npm-image]: https://img.shields.io/npm/v/<%= slugname %>.svg
[npm-url]: https://npmjs.org/package/<%= slugname %>

[build-url]: https://github.com/<%= props.githubUsername %>/<%= slugname %>/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/workflow/status/<%= props.githubUsername %>/<%= slugname %>/check

[deps-image]: https://img.shields.io/librariesio/release/npm/<%= slugname %>
[deps-url]: https://libraries.io/npm/<%= slugname %>
