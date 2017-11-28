const EventEmitter = require('events');

class TapReporter extends EventEmitter {
  constructor(stream) {
    super();
    this.stream = stream || process.stdout;
    this.current = 0;

    this.on('start', () => {
      this.stream.write('TAP version 13\n');
    });

    this.on('prerun', (name) => {
      this.stream.write(`# ${name}\n`);
    });

    this.on('result', (result) => {
      this.current += 1;
      this.stream.write(`${result.ok ? 'ok' : 'not ok' } ${this.current} ${result.message}\n`);
    });

    this.on('skip', (name) => {
      this.stream.write(`ok ${this.current += 1} ${name} #skip \n`);
    });

    this.on('end', (pass, fail, skipped) => {
      this.stream.write(`\n# 1..${this.current}\n`);
      this.stream.write(`# pass ${pass}\n`);
      this.stream.write(`# fail ${fail}\n`);
      this.stream.write(`# skipped ${skipped}\n`);
    });

  }
}

module.exports = TapReporter;
