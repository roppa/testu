const assert = require('../assertion');

function getMessage(args) {
  let message = args[args.length - 1];
  if (typeof message !== 'string') {
    message = '';
  }

  return message;
}

function getResult(fn, args) {
  const result = {};
  try {
    fn(...args);
    result.message = getMessage(args);
    result.ok = true;
  } catch (e) {
    result.error = e;
  }

  return result;
}

const curryTest = (test) => (cb, args) => test.emit('assert', getResult(cb, args));

module.exports = (test) => {
  const testAssert = curryTest(test);
  const _assert = (...args) => testAssert(assert, args);
  Object.keys(assert).forEach(key => {
    _assert[key] = (...args) => testAssert(assert[key], args);
  });

  return _assert;
};
