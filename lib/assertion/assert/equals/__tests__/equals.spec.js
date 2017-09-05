const test = require('../../../../..');
const _assert = require('../..');

test('assert.equals', (assert) => {
  assert.throws(() => { _assert.equals(1, 3); }, '1 === 3 should throw');

  assert.doesNotThrow(() => {
    assert.equals(1, 1);
  }, '1 === 1 should not throw');

  assert.doesNotThrow(() => { assert.equals(true, true); }, 'true === true should not throw');

  assert.throws(() => { _assert.equals(1, '1'); }, '1 === "1" should throw');
});
