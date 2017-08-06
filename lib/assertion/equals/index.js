const assert = require('../assert');

function equals(a, b, message) {
  assert(a === b, message);
}

module.exports = equals;
