const assert = require('..');

function notEqual(a, b, message) {
  assert(a !== b, message);
}

module.exports = notEqual;
