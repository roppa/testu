const assert = require('../..');
const { isNull } = require('..');

console.log('\nisNull\n');

assert.doesNotThrow(() => isNull(null));
console.log('ok isNull with null');

assert.throws(() => isNull(undefined));
assert.throws(() => isNull(true));
assert.throws(() => isNull(0));
assert.throws(() => isNull(''));
console.log('ok isNull should throw when value is not null');
