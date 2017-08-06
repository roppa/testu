const assert = require('../..');

console.log('\nassert.notEqual\n');

assert.throws(() => {
  assert.notEqual(1, 1, '1 !== 1 should throw');
});
console.log('1 !== 1 should throw');

assert.doesNotThrow(() => {
  assert.notEqual(1, 2, '1 !== 2 should not throw');
});
console.log('1 !== 2 should not throw');
