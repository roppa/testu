const test = require('../../../../..');
const { isTrue } = require('..');

test('isTrue', (assert) => {
  assert.doesNotThrow(() => isTrue(true), 'isTrue should not throw when value is true');
  assert.throws(() => isTrue(undefined), 'isTrue should throw when value is undefined');
  assert.throws(() => isTrue(false), 'isTrue should throw when value is false');
  assert.throws(() => isTrue(0), 'isTrue should throw when value is 0');
  assert.throws(() => isTrue(-0), 'isTrue should throw when value is -0');
  assert.throws(() => isTrue(''), `isTrue should throw when value is ''`);
  assert.throws(() => isTrue(NaN), 'isTrue should throw when value is NaN');
});
