const assert = require('../assertion');

module.exports = (test) => {
  function getResult(fn, args, message) {
    const result = {};
    try {
      fn(...args);
      result.message = message || '';
      result.ok = true;
    } catch (e) {
      result.error = e;
      result.ok = false;
    }

    test.emit('result', result);
  }

  const _assert = (...args) => getResult(assert, args, args[1]);
  _assert.isOk = (...args) => getResult(assert, args, args[1]);
  _assert.deepEqual = (...args) => getResult(assert.deepEqual, args, args[2]);
  _assert.throws = (...args) => getResult(assert.throws, args, args[1]);
  _assert.doesNotThrow = (...args) => getResult(assert.doesNotThrow, args, args[1]);
  _assert.not = (...args) => getResult(assert.not, args, args[1]);
  _assert.assertNot = (...args) => getResult(assert.not, args, args[1]);

  return _assert;
};
