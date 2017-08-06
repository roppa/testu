const assert = require('../..');

console.log('\nassert.throws\n');

{
  assert.throws(() => { throw new Error('should be thrown'); });
  console.log('ok should test for thrown error');
}

{
  try {
    assert.throws();
  } catch (e) {
    console.log(`ok should throw ${e.message} when no function`);
  }
}

{
  try {
    assert.throws(() => {});
  } catch (e) {
    console.log(`ok should throw ${e.message} when function does not throw`);
  }
}
