const equals = require('../equals');

function deepArray(a, b, message) {
  equals(a.length, b.length, message);

  a.forEach((value, i) => {
    if (typeof value === 'object' && typeof b[i] === 'object') {
      deepEqual(value, b[i], message);
    } else {
      equals(value, b[i], message);
    }
  });
}

function deepObject(a, b, message) {
  equals(Object.keys(a).length, Object.keys(b).length, message);

  for (let i in a) {
    if (typeof a[i] === 'object' && typeof b[i] === 'object') {
      return deepEqual(a[i], b[i], message);
    }

    equals(a[i], b[i], message);
  }

  for (let i in b) {
    if (typeof b[i] === 'object' && typeof a[i] === 'object') {
      return deepEqual(b[i], a[i], message);
    }

    equals(b[i], a[i], message);
  }
}

function deepEqual(a, b, message) {
  equals(typeof a, typeof b, message);

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length === 0 && b.length === 0) {
      return;
    }

    deepArray(a, b, message);
  } else if (typeof a === 'object' && typeof b === 'object') {
    if (Object.keys(a).length === 0 && Object.keys(b).length === 0) {
      return;
    }

    deepObject(a, b, message);
  } else {
    equals(a, b, message);
  }
}

module.exports = deepEqual;
