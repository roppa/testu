const assert = require('../..');
const { isFalse } = require('..');

console.log('\nisFalse\n');

assert.throws(() => isFalse(true));
console.log('ok isFalse with truthy values');

assert.doesNotThrow(() => isFalse(undefined));
assert.doesNotThrow(() => isFalse(false));
assert.doesNotThrow(() => isFalse(0));
assert.doesNotThrow(() => isFalse(-0));
assert.doesNotThrow(() => isFalse(''));
assert.doesNotThrow(() => isFalse(NaN));
console.log('ok isFalse should throw when value is not truthy');
