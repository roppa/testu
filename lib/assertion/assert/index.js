const AssertionError = require('../AssertionError');

function assert(condition, message) {
  message = message || 'assertion error';
  if (!Boolean(condition)) {
    //:TODO throw new AssertionError(`not ok ${message}`);
    //not passing error message through
    throw new Error(`not ok ${message}`);
  }
};

module.exports = assert;
