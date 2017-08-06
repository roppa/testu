const { equals, ok } = require('../assertion');

function equal(value) {
  equals(this.value, value, this.message);
}

function isOk() {
  ok(this.value, this.message);
}

function expect(value, message) {

  const obj = Object.create(null);

  ['to', 'be', 'been', 'is', 'and', 'has', 'have',
    'with', 'that', 'which', 'at', 'of', 'same', 'but', 'does',
  ].forEach((property) => {
      Object.defineProperty(obj, property, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: obj,
      });
    });

  obj.value = value;
  obj.message = message;
  obj.equal = equal;
  obj.ok = isOk;

  return obj;
};

module.exports = expect;
