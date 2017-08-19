const EventEmitter = require('events');

class TapReporter extends EventEmitter {
  constructor(stream) {
    super();
    this.stream = stream || process.stdout;
    this.tests = [];
    this.pass = 0;
    this.fail = 0;
  }

  push(test) {
    this.tests.push(test);
    this.watch(test);
  }

  watch(test) {
    test.on('result', (result) => {
      let message = '';
      if (result.ok) {
        this.pass++;
        messsage += 'ok ';
      } else {
        this.fail++;
        message += 'not ok ';
      }

      message += `expected ${result.expected} actual ${result.actual}\n`;
      this.stream.write(message);
    });
  }
}

const tapReporter = new TapReporter();

tapReporter.on('start', () => {
  process.stdout.write('TAP version 13\n');
});

module.exports = tapReporter;
