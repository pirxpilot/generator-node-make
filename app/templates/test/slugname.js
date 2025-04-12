const test = require('node:test');
const <%= safeSlugname %> = require('../lib/<%= slugname %>');

test.todo('<%= slugname %> must have at least one test', t => {
  <%= safeSlugname %>();
  t.assert.fail('Need to write tests.');
});
