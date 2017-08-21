const test = require('../../../../..');
const { isNull } = require('..');

test('isNull', (assert) => {
  assert.doesNotThrow(() => isNull(null), 'isNull with null');
  assert.throws(() => isNull(undefined), 'isNull with undefined');
  assert.throws(() => isNull(true), 'isNull with true');
  assert.throws(() => isNull(0), 'isNull with 0');
  assert.throws(() => isNull(''), 'isNull with empty string');
});
