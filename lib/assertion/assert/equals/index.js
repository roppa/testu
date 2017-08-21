const assert = require('..');

function equals(a, b, message) {
  assert(a === b, message);
}

module.exports = equals;
