const test = require('node:test');
const assert = require('node:assert/strict');
const <%= safeSlugname %> = require('../');

test.todo('<%= slugname %> must have at least one test', function () {
  <%= safeSlugname %>();
  assert.fail('Need to write tests.');
});
