const assert = require('../..');
const is = require('..');

console.log('\nis atLeast\n');

assert.doesNotThrow(() => is.atLeast(2, 1));
console.log('ok isAtLeast should compare two values');

assert.throws(() => is.atLeast(1, 2));
console.log('ok isAtLeast should throw when 1 is at least 2');
