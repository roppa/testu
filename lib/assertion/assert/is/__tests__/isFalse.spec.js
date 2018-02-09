const test = require('../../../../..');
const { isFalse } = require('..');

test('isFalse', (assert) => {
  assert.throws(() => isFalse(true), 'should throw with truthy values');
  assert.doesNotThrow(() => isFalse(undefined), 'should throw when value is undefined');
  assert.doesNotThrow(() => isFalse(false), 'should throw when value is false');
  assert.doesNotThrow(() => isFalse(0), 'should throw when value is not 0');
  assert.doesNotThrow(() => isFalse(-0), 'should throw when value is not -0');
  assert.doesNotThrow(() => isFalse(''), 'should throw when value is an empty string');
  assert.doesNotThrow(() => isFalse(NaN), 'should throw when value is not NaN');
});
