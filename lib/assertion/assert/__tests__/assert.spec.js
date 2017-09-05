const test = require('../../../..');
const _assert = require('..');

test('assert positive', (assert) => {
  assert(true, 'should not throw for true');
  assert(' ', 'should not throw for non-empty string');
  assert(1, 'should not throw for 1');
  assert(-1, 'should not throw for -1');
  assert({}, 'should not throw for object');
  assert([], 'should not throw for array');
  assert(() => {}, 'should not throw for function');
});

test('assert negative', assert => {
  assert.throws(() => { _assert(false); }, 'asserting false should throw');
  assert.throws(() => { _assert(0); }, 'asserting 0 should throw');
  assert.throws(() => { _assert(null); }, 'asserting null should throw');
  assert.throws(() => { _assert(''); }, 'asserting empty string should throw');
  assert.throws(() => { _assert(undefined); }, 'asserting undefined should throw');
});

test('assert isOk alias', (assert) => {
  assert.isOk(true, 'should not throw for true');
  assert.isOk(' ', 'should not throw for non-empty string');
  assert.isOk(1, 'should not throw for 1');
  assert.isOk(-1, 'should not throw for -1');
  assert.isOk({}, 'should not throw for object');
  assert.isOk([], 'should not throw for array');
  assert.isOk(() => {}, 'should not throw for function');
});
