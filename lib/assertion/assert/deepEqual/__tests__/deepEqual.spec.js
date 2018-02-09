const test = require('../../../../..');
const _assert = require('..');

test('deepEqual', (assert) => {
  assert.deepEqual(1, 1, '1 and 1 should be deep equal');

  assert.deepEqual([], [], 'two empty arrays should be equal');

  assert.throws(() => _assert.deepEqual([1], []), 'should throw when arrays are different lengths');

  assert.deepEqual([1, 2], [1, 2], 'two arrays with the same values');

  assert.throws(() => _assert.deepEqual([2, 1], [1, 2]), 'two arrays with values in a different order should throw');

  assert.throws(() => _assert.deepEqual([], {}), 'two different types should throw');

  assert.deepEqual({}, {}, 'two empty objects should be equal');

  assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 },
    'two objects with same attributes should be equal');

  assert.throws(() => _assert.deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }),
    'two objects with different attributes in one should throw');

  assert.throws(() => _assert.deepEqual({ a: 1, b: 2, d: 2 }, { a: 1, b: 2, c: 2 }),
    'two objects with multiple different attributes should throw');

  assert.deepEqual({ a: 1, b: 2, c: {} }, { a: 1, b: 2, c: {} }, 'empty child objects should be ok');

  assert.deepEqual({ a: 1, b: 2, c: { a: 1 } }, { a: 1, b: 2, c: { a: 1 } },
    'nested objects with same values should be ok');

  assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
    { a: 1, b: 2, c: { a: 1, b: { c: 2 } } }, 'nested objects with same values should be ok');

  assert.throws(() => _assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
      { a: 1, b: 2, c: { a: 1, b: { c: 3 } } }), 'deeply nested different value should throw');

  assert.deepEqual([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { c: 3 }],
    'array of objects with same order and attributes should be ok');

  assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    [{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    'array of objects with same deeply nested values should be ok');

  assert.throws(() => _assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    [{ a: 1, b: { c: { d: { e: 2 } } } }, { b: 2 }, { c: 3 }]),
    'array of objects with different deeply nested values should throw');
});
