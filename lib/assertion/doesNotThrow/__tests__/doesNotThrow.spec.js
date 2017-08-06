const assert = require('../..');

console.log('\nassert.doesNotThrow\n');

{
  assert.doesNotThrow(() => {});
  console.log('ok should not throw valid function');
}

{
  assert.throws(() => assert.doesNotThrow(() => { throw new Error('error'); }));
  console.log('ok should throw when function throws an error');
}
