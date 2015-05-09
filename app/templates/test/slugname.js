var should = require('should');
var <%= safeSlugname %> = require('../');

describe('<%= slugname %> node module', function () {
  it('must have at least one test', function () {
    <%= safeSlugname %>();
    should.fail('Need to write tests.');
  });
});
