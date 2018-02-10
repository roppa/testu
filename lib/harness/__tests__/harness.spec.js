const { EventEmitter } = require('events');

const test = require('../../../');
const harness = require('..');

test('harness', assert => {
  assert(harness instanceof EventEmitter, 'should be an instance of EventEmitter');
});
