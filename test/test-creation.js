import path from 'node:path';
import { describe, it } from 'node:test';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('node generator', () => {
  it('unscoped name', async () => {
    await runGenerator();
    assert.file([
      'lib/xyz-test-mymodule.js',
      'test/xyz-test-mymodule.js',
      '.gitignore',
      'biome.json',
      '.github/workflows/check.yaml',
      '.editorconfig',
      'Makefile',
      'package.json',
      'Readme.md'
    ]);
    assert.jsonFileContent('package.json', { name: 'xyz-test-mymodule' });
    assert.jsonFileContent('package.json', {
      exports: './lib/xyz-test-mymodule.js'
    });
    assert.jsonFileContent('package.json', {
      repository: {
        type: 'git',
        url: 'git+https://github.com/octocat/xyz-test-mymodule.git'
      }
    });
    assert.jsonFileContent('package.json', {
      devDependencies: {
        '@biomejs/biome': '2.0.5'
      }
    });
    assert.fileContent('lib/xyz-test-mymodule.js', 'export default function xyzTestMymodule()');
    assert.fileContent('Readme.md', '[npm-image]: https://img.shields.io/npm/v/xyz-test-mymodule');
    assert.fileContent('Readme.md', '[npm-url]: https://npmjs.org/package/xyz-test-mymodule');
    assert.fileContent(
      'Readme.md',
      '[build-url]: https://github.com/octocat/xyz-test-mymodule/actions/workflows/check.yaml'
    );
    assert.fileContent(
      'Readme.md',
      '[build-image]: https://img.shields.io/github/actions/workflow/status/octocat/xyz-test-mymodule/check.yaml?branch=main'
    );
    assert.fileContent('Readme.md', '[deps-image]: https://img.shields.io/librariesio/release/npm/xyz-test-mymodule');
    assert.fileContent('Readme.md', '[deps-url]: https://libraries.io/npm/xyz-test-mymodule');
  });

  it('scoped name', async () => {
    await runGenerator({
      name: '@acme/xyz'
    });
    assert.file([
      'lib/xyz.js',
      'test/xyz.js',
      '.gitignore',
      'biome.json',
      '.github/workflows/check.yaml',
      '.editorconfig',
      'Makefile',
      'package.json',
      'Readme.md'
    ]);
    assert.jsonFileContent('package.json', { name: '@acme/xyz' });
    assert.jsonFileContent('package.json', { exports: './lib/xyz.js' });
    assert.jsonFileContent('package.json', {
      repository: {
        type: 'git',
        url: 'git+https://github.com/octocat/xyz.git'
      }
    });
    assert.jsonFileContent('package.json', {
      devDependencies: {
        '@biomejs/biome': '2.0.5'
      }
    });
    assert.fileContent('lib/xyz.js', 'export default function xyz()');
    assert.fileContent('Readme.md', '[npm-image]: https://img.shields.io/npm/v/@acme/xyz');
    assert.fileContent('Readme.md', '[npm-url]: https://npmjs.org/package/@acme/xyz');
    assert.fileContent('Readme.md', '[build-url]: https://github.com/octocat/xyz/actions/workflows/check.yaml');
    assert.fileContent(
      'Readme.md',
      '[build-image]: https://img.shields.io/github/actions/workflow/status/octocat/xyz/check.yaml?branch=main'
    );
    assert.fileContent('Readme.md', '[deps-image]: https://img.shields.io/librariesio/release/npm/@acme/xyz');
    assert.fileContent('Readme.md', '[deps-url]: https://libraries.io/npm/@acme%2Fxyz');
  });
});

function runGenerator(answers = {}) {
  return helpers
    .run(path.resolve(import.meta.dirname, '../app'))
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
      keywords: 'keyword1,keyword2,keyword3',
      ...answers
    });
}
