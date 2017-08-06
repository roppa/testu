const assert = require('../..');
const { isNotNaN } = require('..');

console.log('\nisNotNaN\n');

assert.doesNotThrow(() => isNotNaN(0));
assert.doesNotThrow(() => isNotNaN(null));
assert.doesNotThrow(() => isNotNaN(true));
assert.doesNotThrow(() => isNotNaN(false));
assert.doesNotThrow(() => isNotNaN(Infinity));
assert.doesNotThrow(() => isNotNaN(''));
assert.doesNotThrow(() => isNotNaN(new Date()));
console.log('ok isNotNaN should throw when value is NaN');

assert.throws(() => isNotNaN(NaN));
assert.throws(() => isNotNaN(undefined));
assert.throws(() => isNotNaN({}));
console.log('ok isNotNaN with NaN');
