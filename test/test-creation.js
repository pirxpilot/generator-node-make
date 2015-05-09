'use strict';
var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;

describe('node generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        done(err);
        return;
      }

      this.app = helpers.createGenerator('node-make:app', [
        '../../app'
      ]);
      this.app.options['skip-install'] = true;
      done();
    }.bind(this));
  });

  it('creates expected files without cli', function (done) {
    var expected = [
      'index.js',
      'lib/mymodule.js',
      'test/mymodule.js',
      '.gitignore',
      '.npmignore',
      '.jshintrc',
      '.travis.yml',
      '.editorconfig',
      'Makefile',
      'package.json',
      'README.md'
    ];

    helpers.mockPrompt(this.app, {
      'name': 'mymodule',
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

    this.app.run(function () {
      assert.file(expected);
      assert.fileContent('package.json', /"name": "mymodule"/);
      done();
    });
  });
});
