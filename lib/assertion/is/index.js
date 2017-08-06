const assert = require('../assert');

function above(a, b, message) {
  assert(a > b, message);
}

function below(a, b, message) {
  assert(a < b, message);
}

function atLeast(a, b, message) {
  assert(a >= b, message);
}

function isNull(value, message) {
  assert(value === null, message);
}

function notNull(value, message) {
  assert(value !== null, message);
}

module.exports = { above, below, atLeast, isNull, notNull };
