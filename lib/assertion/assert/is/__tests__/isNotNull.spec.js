const test = require('../../../../..');
const { notNull } = require('..');

test('notNull', (assert) => {
  assert.doesNotThrow(() => notNull(), 'notNull with no value should not throw');
  assert.doesNotThrow(() => notNull(true), 'notNull with true should not throw');
  assert.doesNotThrow(() => notNull(0), 'notNull with 0 should not throw');
  assert.doesNotThrow(() => notNull(''), 'notNull with empty string should not throw');
  assert.throws(() => notNull(null), 'notNull with null should throw');
});
