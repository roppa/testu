const assert = require('../assert');
const AssertionError = require('../AssertionError');

function throws(func, message) {
  let caughtError;

  assert(typeof func === 'function', message);

  try {
    func();
  } catch (e) {
    caughtError = e;
  }

  if (!(caughtError instanceof Error)) {
    throw new AssertionError(message || 'expected function to throw');
  }
}

module.exports = throws;
