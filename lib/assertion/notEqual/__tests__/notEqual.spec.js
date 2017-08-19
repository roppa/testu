const test = require('../../../..');

test('assert.notEqual', (assert) => {
  assert.throws(() => {
    assert.notEqual(1, 1);
  }, '1 !== 1 should throw');

  assert.doesNotThrow(() => {
    assert.notEqual(1, 2);
  }, '1 !== 2 should not throw');
});
