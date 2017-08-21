const test = require('../../../..');
const reporter = require('..');
const EventEmitter = require('events');

test('tap reporter instance', (assert) => {
  assert(reporter instanceof EventEmitter, 'should extend an event emitter');
});
