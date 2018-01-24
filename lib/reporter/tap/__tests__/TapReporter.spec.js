const test = require('../../../..');
const Reporter = require('..');
const EventEmitter = require('events');

test('tap reporter', (assert) => {
  const stream = {
    value: '',
    write: (value) => {
      stream.value += value;
    },
  };

  const reporter = new Reporter(stream);

  assert(reporter instanceof EventEmitter, 'should extend an event emitter');

  reporter.emit('start');
  assert.equal(stream.value, 'TAP version 13\n', 'should write heading on start');

  reporter.emit('prerun', 'test example');
  assert.equal(stream.value, 'TAP version 13\n# test example\n', 'should append title');

  assert(reporter.emit('result', { ok: true, message: '1 + 1 should equal 2' }), 'should return true');
  assert.equal(stream.value, 'TAP version 13\n# test example\nok 1 1 + 1 should equal 2\n', 'should output test result');
});
