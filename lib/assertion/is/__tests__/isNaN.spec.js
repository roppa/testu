const test = require('../../../..');
const { isNaN } = require('..');

test('isNaN', (assert) => {
  assert.throws(() => isNaN(0), 'isNaN with NaN');
  assert.throws(() => isNaN(null), 'isNaN with NaN');
  assert.throws(() => isNaN(true), 'isNaN with NaN');
  assert.throws(() => isNaN(false), 'isNaN with NaN');
  assert.throws(() => isNaN(Infinity), 'isNaN with NaN');
  assert.throws(() => isNaN(''), 'isNaN with NaN');
  assert.throws(() => isNaN(new Date()), 'isNaN with NaN');
  assert.doesNotThrow(() => isNaN(NaN), 'isNaN should throw when value is not NaN');
  assert.doesNotThrow(() => isNaN(undefined), 'isNaN should throw when value is not NaN');
  assert.doesNotThrow(() => isNaN({}), 'isNaN should throw when value is not NaN');
});
