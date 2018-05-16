[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][deps-image]][deps-url]
[![Dev Dependency Status][deps-dev-image]][deps-dev-url]

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

[travis-url]: https://travis-ci.org/<%= props.githubUsername %>/<%= slugname %>
[travis-image]: https://img.shields.io/travis/<%= props.githubUsername %>/<%= slugname %>.svg

[deps-image]: https://img.shields.io/david/<%= props.githubUsername %>/<%= slugname %>.svg
[deps-url]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>

[deps-dev-image]: https://img.shields.io/david/dev/<%= props.githubUsername %>/<%= slugname %>.svg
[deps-dev-url]: https://david-dm.org/<%= props.githubUsername %>/<%= slugname %>?type=dev
