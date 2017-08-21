const test = require('../../../../..');
const is = require('..');

test('is atLeast', (assert) => {
  assert.doesNotThrow(() => is.atLeast(2, 1), 'isAtLeast should compare two values');
  assert.throws(() => is.atLeast(1, 2), 'isAtLeast should throw when 1 is at least 2');
});
