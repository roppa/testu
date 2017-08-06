const assert = require('../..');
const { isTrue } = require('..');

console.log('\nisTrue\n');

assert.doesNotThrow(() => isTrue(true));
console.log('ok isTrue with truthy values');

assert.throws(() => isTrue(undefined));
assert.throws(() => isTrue(false));
assert.throws(() => isTrue(0));
assert.throws(() => isTrue(-0));
assert.throws(() => isTrue(''));
assert.throws(() => isTrue(NaN));
console.log('ok isTrue should throw when value is not truthy');
