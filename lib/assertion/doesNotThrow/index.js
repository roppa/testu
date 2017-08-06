const assert = require('../assert');
const AssertionError = require('../AssertionError');

function doesNotThrow(func, message) {
  assert(typeof func === 'function', message);

  try {
    func();
  } catch (e) {
    throw new AssertionError(message);
  }
}

module.exports = doesNotThrow;
