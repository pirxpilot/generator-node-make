[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][gemnasium-image]][gemnasium-url]

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

[gemnasium-image]: https://img.shields.io/gemnasium/<%= props.githubUsername %>/<%= slugname %>.svg
[gemnasium-url]: https://gemnasium.com/<%= props.githubUsername %>/<%= slugname %>
