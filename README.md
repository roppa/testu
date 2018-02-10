# Testu

![<CircleCI status](https://circleci.com/gh/roppa/testu/tree/master.svg?style=shield&circle-token=521075127823b75a66b205e0faceb138384c430d)

Testing is essential to development. I've obviously used testing libraries such as Mocha, Chai, Ava, Tape, etc. But how would you go about writing one yourself? Especially how would you build a test framework using that same framework to test itself? I got to thinking, just what would a test runner or 'test harness' consist of? I thought the basics would be:

- It should be able to look for test file/s and execute tests within
- It should be able to make assertions within an executed test
- It should be able to report successes and failures of these assertions

So we would have a command line tool. We would run and record tests and their assertions and record results into a report that is delivered as the conclusion of the tests.

## Harness

The term harness, or 'test framework', is the thing that keeps track of the tests and sends the result to the reporter.

## Assertions

Assertions are statements of facts or beliefs. So they are binary; that an assertion is either correct or wrong. There are many styles of assertions, some prefer a string like method such as `expect(value).to.be.ok()` or simply `assert(condition)`.

General assertions:

 - 'assert', 'ok', 'isOk': truthy
 - 'assertNot', 'not', 'notOk': falsy
 - 'throws', 'throw': expect an exception to be thrown
 - 'doesNotThrow', 'notThrow': will not throw an exception
 - 'equal', 'equals', 'isEqual', 'is', 'strictEqual', 'strictEquals', 'strictIs', 'isStrict', 'isStrictly': equality condition
 - 'deepEqual', 'deepEquals', 'isDeepEqual', 'isDeep', 'strictDeepEqual', 'strictDeepEquals': object/array equality condition
 - 'notEqual', 'inequal', 'notEqual', 'notEquals', 'notStrictEqual', 'notStrictEquals', 'isNotEqual', 'isNot', 'doesNotEqual', 'isInequal': object/array not equal
 - 'notNull', 'isNotNull': specific type assertion

Helper assertions:

 - 'isAbove', 'above', 'greaterThan', 'over': numeric value above
 - 'isBelow', 'below', 'lessThan': numeric value below
 - 'isAtLeast', 'atLeast', 'greaterThanOrEqual': numeric value less than or equal
 - 'isFalse': falsy value
 - 'isTrue': truthy value

Included on the assert function is 'expect', so you can destructure and use the expect format:

```javascript
test('using expect' ({ expect }) => {
  expect(true).to.be.ok();
  expect(0).to.equal(0);
});
```

 - 'equal': equality test
 - 'ok': truthy test

## Reporter

I decided to use [TAP (test anything protocol)](https://testanything.org/tap-specification.html) for the default reporter.
