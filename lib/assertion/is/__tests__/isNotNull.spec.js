const assert = require('../..');
const { notNull } = require('..');

console.log('\nnotNull\n');

assert.doesNotThrow(() => notNull());
assert.doesNotThrow(() => notNull(true));
assert.doesNotThrow(() => notNull(0));
assert.doesNotThrow(() => notNull(''));
console.log('ok notNull with values not null');

assert.throws(() => notNull(null));
console.log('ok notNull should throw when null');
