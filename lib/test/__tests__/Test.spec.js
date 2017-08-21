const test = require('../../..');
const Test = require('..');
const EventEmitter = require('events');

test('Test class', (assert) => {
  const a = new Test('example test', (assert) => {
    assert(true);
  });

  assert(a instanceof EventEmitter, 'should be an event emitter');
});
