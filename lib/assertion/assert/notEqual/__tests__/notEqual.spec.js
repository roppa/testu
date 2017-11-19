const test = require('../../../../..');
const _assert = require('../..');

test('assert.notEqual', (assert) => {
  assert.throws(() => {
    _assert.notEqual(1, 1);
  }, '1 !== 1 should throw');

  assert.doesNotThrow(() => {
    _assert.notEqual(1, 2);
  }, '1 !== 2 should not throw');
});
