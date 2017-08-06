const assert = require('../..');

console.log('\ndeepEqual\n');

assert.deepEqual(1, 1);
console.log('ok two truthy values should be deep equal');

assert.deepEqual([], []);
console.log('ok two empty arrays should be equal');

assert.throws(() => assert.deepEqual([1], []));
console.log('ok should throw when different lengths');

assert.deepEqual([1, 2], [1, 2]);
console.log('ok two arrays with the same value');

assert.throws(() => deepEqual([2, 1], [1, 2]));
console.log('ok two arrays with different order should throw');

assert.throws(() => deepEqual([], {}));
console.log('ok two different types should throw');

assert.deepEqual({}, {});
console.log('ok two empty objects should be equal');

assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 });
console.log('ok two objects with same attributes should be equal');

assert.throws(() => assert.deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }));
assert.throws(() => assert.deepEqual({ a: 1, c: 2 }, { a: 1, b: 2 }));
assert.throws(() => assert.deepEqual({ a: 1, b: 2, d: 2 }, { a: 1, b: 2, c: 2 }));
console.log('ok two objects with different attributes should throw');

assert.deepEqual({ a: 1, b: 2, c: {} }, { a: 1, b: 2, c: {} });
assert.deepEqual({ a: 1, b: 2, c: { a: 1 } }, { a: 1, b: 2, c: { a: 1 } });
assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
  { a: 1, b: 2, c: { a: 1, b: { c: 2 } } });
assert.throws(() => assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
    { a: 1, b: 2, c: { a: 1, b: { c: 3 } } }));
console.log('ok nested objects with same values should be ok');

assert.deepEqual([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { c: 3 }]);
assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
  [{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }]);
assert.throws(() => assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
  [{ a: 1, b: { c: { d: { e: 2 } } } }, { b: 2 }, { c: 3 }]));
console.log('ok array of objects with different nested values should throw');
