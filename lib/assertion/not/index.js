const assert = require('../assert');

function not(value, message) {
  assert(!Boolean(value), message);
}

module.exports = not;
