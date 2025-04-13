[![NPM version][npm-image]][npm-url]
[![Build Status][build-image]][build-url]
[![Dependency Status][deps-image]][deps-url]

# <%= slugname %>

<%= props.description %>

## Install

```sh
$ npm install --save <%= props.name %>
```

## Usage

```js
var <%= safeSlugname %> = require('<%= props.name %>');

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

[npm-image]: https://img.shields.io/npm/v/<%= props.name %>
[npm-url]: https://npmjs.org/package/<%= props.name %>

[build-url]: https://github.com/<%= props.githubUsername %>/<%= slugname %>/actions/workflows/check.yaml
[build-image]: https://img.shields.io/github/actions/workflow/status/<%= props.githubUsername %>/<%= slugname %>/check.yaml?branch=main

[deps-image]: https://img.shields.io/librariesio/release/npm/<%= props.name %>
[deps-url]: https://libraries.io/npm/<%= props.name[0] + encodeURIComponent(props.name.slice(1)) %>
