const test = require('../../../..');
const { notNull } = require('..');

test('notNull', (assert) => {
  assert.doesNotThrow(() => notNull(), 'notNull with values not null');
  assert.doesNotThrow(() => notNull(true), 'notNull with values not null');
  assert.doesNotThrow(() => notNull(0), 'notNull with values not null');
  assert.doesNotThrow(() => notNull(''), 'notNull with values not null');
  assert.throws(() => notNull(null), 'notNull should throw when null');
});
