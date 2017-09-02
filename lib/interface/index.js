const assert = require('../assertion');

function getMessage(args) {
  let message = args[args.length - 1];
  if (typeof message !== 'string') {
    message = '';
  }

  return message;
}

module.exports = (test) => {
  function getResult(fn, args) {
    const result = {};
    try {
      fn(...args);
      result.message = getMessage(args);
      result.ok = true;
    } catch (e) {
      result.error = e;
      result.ok = false;
    }

    test.emit('result', result);
  }

  const _assert = (...args) => getResult(assert, args);
  Object.keys(assert).forEach(key => {
    _assert[key] = (...args) => getResult(assert[key], args);
  });

  return _assert;
};
