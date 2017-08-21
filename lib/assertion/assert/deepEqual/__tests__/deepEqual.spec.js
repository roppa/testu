const test = require('../../../../..');

test('deepEqual', (assert) => {
  assert.deepEqual(1, 1, 'two truthy values should be deep equal');

  assert.deepEqual([], [], 'two empty arrays should be equal');

  assert.throws(() => assert.deepEqual([1], []), 'should throw when different lengths');

  assert.deepEqual([1, 2], [1, 2], 'two arrays with the same value');

  assert.throws(() => deepEqual([2, 1], [1, 2]), 'two arrays with different order should throw');

  assert.throws(() => deepEqual([], {}), 'two different types should throw');

  assert.deepEqual({}, {}, 'two empty objects should be equal');

  assert.deepEqual({ a: 1, b: 2 }, { a: 1, b: 2 },
    'two objects with same attributes should be equal');

  assert.throws(() => assert.deepEqual({ a: 1, b: 2 }, { a: 1, c: 2 }),
    'two objects with different attributes should throw');

  assert.throws(() => assert.deepEqual({ a: 1, c: 2 }, { a: 1, b: 2 }),
    'two objects with different attributes should throw');

  assert.throws(() => assert.deepEqual({ a: 1, b: 2, d: 2 }, { a: 1, b: 2, c: 2 }),
    'two objects with different attributes should throw');

  assert.deepEqual({ a: 1, b: 2, c: {} }, { a: 1, b: 2, c: {} });

  assert.deepEqual({ a: 1, b: 2, c: { a: 1 } }, { a: 1, b: 2, c: { a: 1 } });

  assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
    { a: 1, b: 2, c: { a: 1, b: { c: 2 } } }, 'nested objects with same values should be ok');

  assert.throws(() => assert.deepEqual({ a: 1, b: 2, c: { a: 1, b: { c: 2 } } },
      { a: 1, b: 2, c: { a: 1, b: { c: 3 } } }), 'nested objects with same values should be ok');

  assert.deepEqual([{ a: 1 }, { b: 2 }, { c: 3 }], [{ a: 1 }, { b: 2 }, { c: 3 }],
    'array of objects with different nested values should throw');

  assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    [{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    'array of objects with different nested values should throw');

  assert.throws(() => assert.deepEqual([{ a: 1, b: { c: { d: { e: 1 } } } }, { b: 2 }, { c: 3 }],
    [{ a: 1, b: { c: { d: { e: 2 } } } }, { b: 2 }, { c: 3 }]),
    'array of objects with different nested values should throw');
});
