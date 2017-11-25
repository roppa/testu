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
    result.ok = false;
  }

  return result;
}

module.exports = (test) => {
  const _assert = (...args) => test.emit('assert', getResult(assert, args));
  Object.keys(assert).forEach(key => {
    _assert[key] = _assert;
  });

  return _assert;
};
