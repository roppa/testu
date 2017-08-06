const assert = require('../..');

console.log('\nassert.equals\n');

assert.throws(() => {
  assert.equals(1, 3);
}, '1, 3 should throw');
console.log('1 === 3 should throw');

assert.doesNotThrow(() => {
  assert.equals(1, 1);
}, '1, 1 should not throw');
console.log('1 === 1 should not throw');

assert.doesNotThrow(() => {
  assert.equals(true, true);
}, 'comparing true should not throw');
console.log('true === true should not throw');

assert.throws(() => {
  assert.equals(1, '1');
}, '1, "1" should throw');
console.log('1 === "1" should throw');
