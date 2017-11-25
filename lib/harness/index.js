const EventEmitter = require('events');
const Test = require('../test');
const reporter = require('../reporter');

let _this;

class Harness extends EventEmitter {
  constructor() {
    super();
    if (_this) {
      return _this;
    }

    this.total = 0;
    this.skipped = 0;
    this.pass = 0;
    this.fail = 0;

    this.reporter = reporter;
    this.reporter.emit('start');
    _this = this;
  }

  test(name, callback) {
    const testInstance = new Test(name, callback);
    return this.push(testInstance);
  }

  push(test) {
    this.watch(test);
    test.run();
  }

  watch(test) {
    test.on('prerun', (name) => {
      this.reporter.emit('prerun', name);
    });

    test.on('assert', (result) => {
      if (result.ok) {
        this.pass += 1;
      } else {
        this.fail += 1;
      }

      this.reporter.emit('result', result);

      if (this.pass + this.fail + this.skipped === this.total) {
        this.reporter.emit('end', this.total, this.pass, this.fail, this.skipped);
      }

    });
  }

}

const harness = new Harness();
const test = harness.test.bind(_this);

test.skip = (name, callback) => {
  harness.reporter.emit('skip', name);
};

module.exports = test;
