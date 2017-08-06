const AssertionError = require('..');

console.log('\nAssertionError\n');

try {
  throw new AssertionError();
} catch (e) {
  if (e.name !== 'AssertionError') {
    throw new Error('not ok should throw AssertionError');
  }

  console.log('ok should be an AssertionError');

  if (e.message !== 'assertion error') {
    throw new Error('not ok should have a default message');
  }

  console.log('ok should have a default message');

}

try {
  throw new AssertionError('custom error');
} catch (e) {

  if (e.message !== 'custom error') {
    throw new Error('not ok should have a custom message');
  }

  console.log('ok should have a custom message');

}
