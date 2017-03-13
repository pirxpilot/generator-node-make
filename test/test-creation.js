'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('node generator', function () {
  beforeEach(function () {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withOptions({
        'skip-install': true
      })
      .withPrompts({
        'name': 'xyz-test-mymodule',
        'description': 'awesome module',
        'pkgName': false,
        'license': 'MIT',
        'homepage': 'http://yeoman.io',
        'githubUsername': 'octocat',
        'authorName': 'Octo Cat',
        'authorEmail': 'octo@example.com',
        'authorUrl': 'http://yeoman.io',
        'keywords': 'keyword1,keyword2,keyword3'
      });
  });

  it('creates expected', function () {
    var expected = [
      'index.js',
      'lib/xyz-test-mymodule.js',
      'test/xyz-test-mymodule.js',
      '.gitignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'Makefile',
      'package.json',
      'Readme.md'
    ];
    assert.file(expected);
    assert.jsonFileContent('package.json', { name: 'xyz-test-mymodule' });
    assert.jsonFileContent('package.json', { repository: 'octocat/xyz-test-mymodule' });
    assert.fileContent('lib/xyz-test-mymodule.js', 'function xyzTestMymodule()');
  });
});
