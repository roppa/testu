const test = require('../../../..');

test('assert.throws', (assert) => {
  assert.throws(() => { throw new Error('should be thrown'); }, 'should test for thrown error');
});
