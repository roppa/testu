const test = require('../../../..');
const { isFalse } = require('..');

test('isFalse', (assert) => {
  assert.throws(() => isFalse(true), 'isFalse with truthy values');
  assert.doesNotThrow(() => isFalse(undefined), 'isFalse should throw when value is not truthy');
  assert.doesNotThrow(() => isFalse(false), 'isFalse should throw when value is not truthy');
  assert.doesNotThrow(() => isFalse(0), 'isFalse should throw when value is not truthy');
  assert.doesNotThrow(() => isFalse(-0), 'isFalse should throw when value is not truthy');
  assert.doesNotThrow(() => isFalse(''), 'isFalse should throw when value is not truthy');
  assert.doesNotThrow(() => isFalse(NaN), 'isFalse should throw when value is not truthy');
});
