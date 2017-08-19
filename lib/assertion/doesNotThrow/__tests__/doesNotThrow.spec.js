const test = require('../../../..');

test('doesNotThrow', (assert) => {
  assert.doesNotThrow(() => {}, 'should not throw valid function');
  assert.throws(() => assert.doesNotThrow(() => { throw new Error('error'); }),
    'should throw when function throws an error');
});
