const test = require('tape');
const <%= safeSlugname %> = require('../');

test('<%= slugname %> must have at least one test', function (t) {
  <%= safeSlugname %>();
  t.fail('Need to write tests.');
  t.end();
});
