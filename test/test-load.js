const assert  = require('assert');

describe('node generator', () => {
  it('can be imported without blowing up', () => {
    const app = require('../app');
    assert(app !== undefined);
  });
});
