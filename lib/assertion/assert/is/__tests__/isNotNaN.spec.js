const test = require('../../../../..');
const { isNotNaN } = require('..');

test('isNotNaN', (assert) => {
  assert.doesNotThrow(() => isNotNaN(0), 'isNotNaN should throw when value is 0');
  assert.doesNotThrow(() => isNotNaN(null), 'isNotNaN should throw when value is null');
  assert.doesNotThrow(() => isNotNaN(true), 'isNotNaN should throw when value is true');
  assert.doesNotThrow(() => isNotNaN(false), 'isNotNaN should throw when value is false');
  assert.doesNotThrow(() => isNotNaN(Infinity), 'isNotNaN should throw when value is Infinity');
  assert.doesNotThrow(() => isNotNaN(''), 'isNotNaN should throw when value is an empty string');
  assert.doesNotThrow(() => isNotNaN(new Date()), 'isNotNaN should throw when value is a Date');
  assert.throws(() => isNotNaN(NaN)), 'isNotNaN with NaN';
  assert.throws(() => isNotNaN(undefined), 'isNotNaN with undefined');
  assert.throws(() => isNotNaN({}), 'isNotNaN with object');
});
