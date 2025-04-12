const { describe, it, beforeEach } = require('node:test');
const path = require('node:path');
const assert = require('yeoman-assert');
const { default: helpers } = require('yeoman-test');

describe('node generator', () => {
  beforeEach(() => {
    return helpers
      .run(path.join(__dirname, '../app'))
      .withOptions({
        'skip-install': true
      })
      .withAnswers({
        name: 'xyz-test-mymodule',
        description: 'awesome module',
        pkgName: false,
        license: 'MIT',
        homepage: 'http://yeoman.io',
        githubUsername: 'octocat',
        authorName: 'Octo Cat',
        authorEmail: 'octo@example.com',
        authorUrl: 'http://yeoman.io',
        keywords: 'keyword1,keyword2,keyword3'
      });
  });

  it('creates expected', () => {
    const expected = [
      'lib/xyz-test-mymodule.js',
      'test/xyz-test-mymodule.js',
      '.gitignore',
      'biome.json',
      '.github/workflows/check.yaml',
      '.editorconfig',
      'Makefile',
      'package.json',
      'Readme.md'
    ];
    assert.file(expected);
    assert.jsonFileContent('package.json', { name: 'xyz-test-mymodule' });
    assert.jsonFileContent('package.json', { exports: './lib/xyz-test-mymodule.js' });
    assert.jsonFileContent('package.json', {
      repository: {
        type: 'git',
        url: 'git+https://github.com/octocat/xyz-test-mymodule.git'
      }
    });
    assert.jsonFileContent('package.json', {
      devDependencies: {
        '@biomejs/biome': '~1'
      }
    });
    assert.fileContent('lib/xyz-test-mymodule.js', 'function xyzTestMymodule()');
  });
});
