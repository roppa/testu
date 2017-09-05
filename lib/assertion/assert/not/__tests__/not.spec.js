const test = require('../../../../..');
const _assert = require('../..');

test('assert not', (assert) => {
  assert.assertNot(false, 'asserting falsy values should not throw');
  assert.assertNot('', 'asserting falsy values should not throw');
  assert.assertNot(0, 'asserting falsy values should not throw');
  assert.assertNot(-0, 'asserting falsy values should not throw');
  assert.assertNot(null, 'asserting falsy values should not throw');
  assert.assertNot(NaN, 'asserting falsy values should not throw');
  assert.assertNot(undefined, 'asserting falsy values should not throw');

  assert.throws(() => { _assert.notOk(true); }, 'notOk should throw when truthy');
  assert.throws(() => { _assert.notOk(1); }, 'notOk should throw when truthy');
  assert.throws(() => { _assert.notOk(' '); }, 'notOk should throw when truthy');
  assert.throws(() => { _assert.notOk({}); }, 'notOk should throw when truthy');
  assert.throws(() => { _assert.notOk([]); }, 'notOk should throw when truthy');
});
