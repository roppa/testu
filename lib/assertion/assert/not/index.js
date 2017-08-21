const assert = require('..');

function not(value, message) {
  assert(!Boolean(value), message);
}

module.exports = not;
