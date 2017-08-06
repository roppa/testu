const assert = require('../..');
const { isNaN } = require('..');

console.log('\nisNaN\n');

assert.throws(() => isNaN(0));
assert.throws(() => isNaN(null));
assert.throws(() => isNaN(true));
assert.throws(() => isNaN(false));
assert.throws(() => isNaN(Infinity));
assert.throws(() => isNaN(''));
assert.throws(() => isNaN(new Date()));
console.log('ok isNaN with NaN');

assert.doesNotThrow(() => isNaN(NaN));
assert.doesNotThrow(() => isNaN(undefined));
assert.doesNotThrow(() => isNaN({}));
console.log('ok isNaN should throw when value is not NaN');
