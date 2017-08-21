const assert = require('./assert');
const not = require('./assert/not');
const AssertionError = require('./AssertionError');
const throws = require('./assert/throws');
const doesNotThrow = require('./assert/doesNotThrow');
const equals = require('./assert/equals');
const notEqual = require('./assert/notEqual');
const deepEqual = require('./assert/deepEqual');
const { above, below, atLeast, isNull, notNull } = require('./assert/is');

assert.AssertionError = AssertionError;

['ok', 'isOk']
  .forEach(verb => assert[verb] = assert);

['assertNot', 'not', 'notOk']
  .forEach(verb => assert[verb] = not);

['throws', 'throw']
  .forEach(verb => assert[verb] = throws);

['doesNotThrow', 'notThrow']
  .forEach(verb => assert[verb] = doesNotThrow);

['equal', 'equals', 'isEqual', 'is', 'strictEqual', 'strictEquals', 'strictIs', 'isStrict', 'isStrictly']
  .forEach(verb => assert[verb] = equals);

['deepEqual', 'deepEquals', 'isDeepEqual', 'isDeep', 'strictDeepEqual', 'strictDeepEquals']
  .forEach(verb => assert[verb] = deepEqual);

['notEqual', 'inequal', 'notEqual',
  'notEquals', 'notStrictEqual',
  'notStrictEquals', 'isNotEqual',
  'isNot', 'doesNotEqual', 'isInequal',
].forEach(verb => assert[verb] = notEqual);

['isAbove', 'above', 'greaterThan', 'over'].forEach(verb => assert[verb] = above);
['isBelow', 'below', 'lessThan'].forEach(verb => assert[verb] = below);
['isAtLeast', 'atLeast', 'greaterThanOrEqual'].forEach(verb => assert[verb] = atLeast);
assert.isNull = isNull;
['notNull', 'isNotNull'].forEach(verb => assert[verb] = notNull);

module.exports = assert;
