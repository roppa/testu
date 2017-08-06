const assert = require('../..');
const is = require('..');

console.log('\nis above\n');

assert.doesNotThrow(() => is.above(1, 0));
console.log('ok isAbove should compare two values');

assert.throws(() => is.above(0, 1));
console.log('ok isAbove should throw when 0 is above 1');
