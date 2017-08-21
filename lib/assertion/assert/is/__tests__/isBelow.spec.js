const test = require('../../../../..');
const is = require('..');

test('is below', (assert) => {
  assert.doesNotThrow(() => is.below(0, 1), 'isAbove should compare two values');
  assert.throws(() => is.below(1, 0), 'isAbove should throw when 1 is below 0');
});
