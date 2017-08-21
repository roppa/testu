const EventEmitter = require('events');

class TapReporter extends EventEmitter {
  constructor(stream) {
    super();
    this.stream = stream || process.stdout;
    this.tests = [];
    this.completed = 0;
    this.skipped = 0;
    this.pass = 0;
    this.fail = 0;
  }

  push(test) {
    this.tests.push(test);
    this.watch(test);
    test.run();
  }

  watch(test) {
    test.on('prerun', (result) => {
      this.stream.write(`# ${result.name}\n`);
    });

    test.on('result', (result) => {
      let message = '';
      this.completed++;
      if (result.ok) {
        this.pass++;
        message += 'ok ';
      } else {
        this.fail++;
        message += 'not ok ';
      }

      message += `${result.number} `;
      message += `${result.assertion} expected ${result.expected} to be ${result.actual}`;
      this.stream.write(`${message}\n`);
    });
  }
}

const tapReporter = new TapReporter();

tapReporter.on('start', () => {
  process.stdout.write('TAP version 13\n');
});

tapReporter.on('skip', (name) => {
  this.skipped++;
  process.stdout.write(`skipping ${name}\n`);
});

tapReporter.on('end', () => {
  process.stdout.write(`\n# 1..${tapReporter.tests.length}\n`);
  process.stdout.write(`# pass ${tapReporter.pass}\n`);
  process.stdout.write(`# fail ${tapReporter.fail}\n`);
});

module.exports = tapReporter;
