const assert = require('../..');

console.log('\nassert\n');

{
  assert(true);
  assert(' ');
  assert(1);
  assert(-1);
  assert({});
  assert([]);
  assert(() => {});
  console.log('ok asserting truthy values should not throw');
}

{
  assert.isOk(true);
  assert.isOk(' ');
  assert.isOk(1);
  assert.isOk(-1);
  assert.isOk({});
  assert.isOk([]);
  assert.isOk(() => {});
  console.log('ok asserting truthy values with isOk alias should not throw');
}

{
  [
    {
      value: false,
      message: 'asserting false should throw',
      errorMessage: 'false should be falsy',
    },
    {
      value: 0,
      message: 'asserting 0 should throw',
      errorMessage: '0 should be falsy',
    },
    {
      value: null,
      message: 'asserting null should throw',
      errorMessage: 'null should be falsy',
    },
    {
      value: '',
      message: 'asserting empty string should throw',
      errorMessage: 'empty string should be falsy',
    },
    {
      value: undefined,
      message: 'asserting undefined should throw',
      errorMessage: 'undefined should be falsy',
    },
  ].forEach(({ value, message, errorMessage }) => {
    try {
      assert(value, message);
    } catch (e) {
      if (e.message !== `not ok ${message}`) {
        console.error(e.message);
        throw new Error(e.message);
      }

      console.log(`ok asserting ${value} should throw`);
    }
  });
}
