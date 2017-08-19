const test = require('../../../..');

test('assert function', (assert) => {
  assert(true, 'should not throw for true');
  assert(' ', 'should not throw for non-empty string');
  assert(1, 'should not throw for 1');
  assert(-1, 'should not throw for -1');
  assert({}, 'should not throw for object');
  assert([], 'should not throw for array');
  assert(() => {}, 'should not throw for function');
});

test('assert.isOk', (assert) => {
  assert.isOk(true, 'should not throw for true');
  assert.isOk(' ', 'should not throw for non-empty string');
  assert.isOk(1, 'should not throw for 1');
  assert.isOk(-1, 'should not throw for -1');
  assert.isOk({}, 'should not throw for object');
  assert.isOk([], 'should not throw for array');
  assert.isOk(() => {}, 'should not throw for function');
});

test('assert function', (assert) => {
  [
    {
      value: false,
      message: 'asserting false should throw',
      errorMessage: 'false should be falsy',
    },
    {
      value: 0,
      message: 'asserting 0 should throw',
      errorMessage: '0 should be falsy',
    },
    {
      value: null,
      message: 'asserting null should throw',
      errorMessage: 'null should be falsy',
    },
    {
      value: '',
      message: 'asserting empty string should throw',
      errorMessage: 'empty string should be falsy',
    },
    {
      value: undefined,
      message: 'asserting undefined should throw',
      errorMessage: 'undefined should be falsy',
    },
  ].forEach(({ value, message, errorMessage }) => {
    try {
      assert(value, message);
    } catch (e) {
      if (e.message !== `not ok ${message}`) {
        throw new Error(e.message);
      }
    }
  });
});
