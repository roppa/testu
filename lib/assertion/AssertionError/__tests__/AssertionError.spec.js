const test = require('../../../..');
const AssertionError = require('..');

test('AssertionError', (assert) => {
  try {
    throw new AssertionError();
  } catch (e) {
    assert(e.name === 'AssertionError', 'should be an AssertionError');
    assert(e.message === 'assertion error', 'should have a default message');
  }

  try {
    throw new AssertionError('custom error');
  } catch (e) {
    assert(e.message === 'custom error', 'should have a custom message');
  }
});
