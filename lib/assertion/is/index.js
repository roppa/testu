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

function isTrue(value, message) {
  assert(Boolean(value), message);
}

function isFalse(value, message) {
  assert(!Boolean(value), message);
}

function isNaN(value, message) {
  assert(Number.isNaN(Number(value)), message);
}

function isNotNaN(value, message) {
  assert(!Number.isNaN(Number(value)), message);
}

module.exports = { above, below, atLeast, isNull, notNull, isTrue, isFalse, isNaN, isNotNaN };
