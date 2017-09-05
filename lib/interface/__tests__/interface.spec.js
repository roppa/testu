const test = require('../../../');
const interface = require('..');

test('interface', assert => {
  const interfaceInstance = interface({});
  assert.equals(typeof interfaceInstance.isOk, 'function', 'should have isOk functions');
});
