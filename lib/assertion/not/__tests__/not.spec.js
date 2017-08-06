const assert = require('../..');

console.log('\nassert not\n');

{
  assert.assertNot(false);
  assert.assertNot('');
  assert.assertNot(0);
  assert.assertNot(-0);
  assert.assertNot(null);
  assert.assertNot(NaN);
  assert.assertNot(undefined);
  console.log('ok asserting falsy values should not throw');
}

{
  assert.throws(() => assert.notOk(true));
  assert.throws(() => assert.notOk(1));
  assert.throws(() => assert.notOk(' '));
  assert.throws(() => assert.notOk({}));
  assert.throws(() => assert.notOk([]));
  console.log('ok notOk should throw when truthy');
}
