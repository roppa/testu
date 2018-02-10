const AssertionError = require('../AssertionError');

function assert(condition, message) {
  message = message || 'assertion error';
  if (!Boolean(condition)) {
    throw new AssertionError(message);
  }
}

module.exports = assert;
