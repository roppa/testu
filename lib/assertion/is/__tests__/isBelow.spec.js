const assert = require('../..');
const is = require('..');

console.log('\nis below\n');

assert.doesNotThrow(() => is.below(0, 1));
console.log('ok isAbove should compare two values');

assert.throws(() => is.below(1, 0));
console.log('ok isAbove should throw when 1 is below 0');
