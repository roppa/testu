const test = require('../../../..');
const expect = require('..');

test('expect', (assert) => {
  assert(typeof expect(0).to === 'object', `should have a 'to' property`);
  assert.doesNotThrow(() => expect(0).to.equal(0), 'expect 0 to equal 0');
  assert.doesNotThrow(() => expect(0).to.be.equal(0), 'expect 0 to be equal 0');
  assert.doesNotThrow(() => expect(true).to.be.ok(), 'expect true to be ok');
  assert.throws(() => expect(false).to.be.ok(), 'expect false to be ok');
});
