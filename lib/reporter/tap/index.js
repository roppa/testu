const EventEmitter = require('events');

class TapReporter extends EventEmitter {
  constructor(stream) {
    super();
    this.stream = stream || process.stdout;
  }
}

const tapReporter = new TapReporter();

tapReporter.on('start', () => {
  process.stdout.write('TAP version 13\n');
});

tapReporter.on('prerun', (name) => {
  process.stdout.write(`# ${name}\n`);
});

tapReporter.on('result', (result) => {
  process.stdout.write(`# ${result.message}\n`);
});

tapReporter.on('skip', (name) => {
  process.stdout.write(`skipping ${name}\n`);
});

tapReporter.on('end', (total, pass, fail, skipped) => {
  process.stdout.write(`\n# 1..${total}\n`);
  process.stdout.write(`# pass ${pass}\n`);
  process.stdout.write(`# fail ${fail}\n`);
  process.stdout.write(`# skipped ${skipped}\n`);
});

module.exports = tapReporter;
