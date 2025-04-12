import assert from 'node:assert';
import { describe, it } from 'node:test';

describe('node generator', () => {
  it('can be imported without blowing up', async () => {
    const app = await import('../app/index.js');
    assert(app !== undefined);
  });
});
