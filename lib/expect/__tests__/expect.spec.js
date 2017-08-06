const assert = require('../../assertion');
const expect = require('..');

console.log(`\nexpect\n`);

assert(typeof expect === 'function', 'should be a function');
console.log('ok expect should be a function');

assert(typeof expect(0).to === 'object', 'should have a to property');
console.log('ok should have a to property');

assert.doesNotThrow(() => expect(0).to.equal(0), 'expect 0 to equal 0');
assert.doesNotThrow(() => expect(0).to.be.equal(0), 'expect 0 to equal 0');
console.log('ok expect 0 to equal 0');

assert.doesNotThrow(() => expect(true).to.be.ok(), 'expect true to be ok');
console.log('ok true should be ok');
