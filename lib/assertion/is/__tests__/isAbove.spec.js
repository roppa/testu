const test = require('../../../..');
const is = require('..');

test('is above', (assert) => {
  assert.doesNotThrow(() => is.above(1, 0), 'isAbove should compare two values');
  assert.throws(() => is.above(0, 1), 'isAbove should throw when 0 is above 1');
});
