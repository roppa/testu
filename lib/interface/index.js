const assert = require('../assertion');

function getResult(fn, args) {
  const result = {};
  try {
    fn(...args);
    result.expected = Boolean(args[0]);
    result.ok = true;
  } catch (e) {
    result.error = e;
  }

  return result;
}

const _assert = (...args) => getResult(assert, args);
_assert.isOk = (...args) => getResult(assert, args);
_assert.deepEqual = (...args) => getResult(assert.deepEqual, args);
_assert.throws = (...args) => getResult(assert.throws, args);
_assert.doesNotThrow = (...args) => getResult(assert.doesNotThrow, args);
_assert.not = (...args) => getResult(assert.not, args);
_assert.assertNot = (...args) => getResult(assert.not, args);

module.exports = _assert;
