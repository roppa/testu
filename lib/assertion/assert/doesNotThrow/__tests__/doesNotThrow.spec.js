const test = require('../../../../..');
const _assert = require('../..');

test('doesNotThrow', (assert) => {
  assert.doesNotThrow(() => {}, 'should not throw valid function');
  assert.throws(() => _assert.doesNotThrow(() => { throw new Error('error'); }),
    'should throw when function throws an error');
});
