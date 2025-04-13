import test from 'node:test';
import <%= safeSlugname %> from '../lib/<%= slugname %>.js';

test.todo('<%= slugname %> must have at least one test', t => {
  <%= safeSlugname %>();
  t.assert.fail('Need to write tests.');
});
