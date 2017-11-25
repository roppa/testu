const test = require('../../../../..');
const _assert = require('../..');

test('assert not', (assert) => {
  assert.notThrow(() => { _assert.not(false); }, 'asserting false should not throw');
  assert.notThrow(() => { _assert.not(''); }, 'asserting empty string should not throw');
  assert.notThrow(() => { _assert.not(0); }, 'asserting 0 should not throw');
  assert.notThrow(() => { _assert.not(-0); }, 'asserting -0 should not throw');
  assert.notThrow(() => { _assert.not(null); }, 'asserting null should not throw');
  assert.notThrow(() => { _assert.not(NaN); }, 'asserting NaN should not throw');
  assert.notThrow(() => { _assert.not(undefined); }, 'asserting undefined should not throw');

  assert.throws(() => { _assert.notOk(true); }, 'notOk should throw when true');
  assert.throws(() => { _assert.notOk(1); }, 'notOk should throw when 1');
  assert.throws(() => { _assert.notOk(' '); }, 'notOk should throw when space');
  assert.throws(() => { _assert.notOk({}); }, 'notOk should throw when object');
  assert.throws(() => { _assert.notOk([]); }, 'notOk should throw when array');
});
