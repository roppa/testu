const test = require('../../../../..');
const { isNaN } = require('..');

test('isNaN', (assert) => {
  assert.throws(() => isNaN(0), 'isNaN with 0 should throw');
  assert.throws(() => isNaN(null), 'isNaN with null should throw');
  assert.throws(() => isNaN(true), 'isNaN with true should throw');
  assert.throws(() => isNaN(false), 'isNaN with false should throw');
  assert.throws(() => isNaN(Infinity), 'isNaN with Infinity should throw');
  assert.throws(() => isNaN(''), 'isNaN with an empty string should throw');
  assert.throws(() => isNaN(new Date()), 'isNaN with a date should throw');
  assert.doesNotThrow(() => isNaN(NaN), 'isNaN should not throw when value is NaN');
  assert.doesNotThrow(() => isNaN(undefined), 'isNaN should throw when value is undefined');
  assert.doesNotThrow(() => isNaN({}), 'isNaN should throw when value is an object');
});
