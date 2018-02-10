const EventEmitter = require('events');
const Test = require('../test');
const Reporter = require('../reporter');

let _this;

class Harness extends EventEmitter {
  constructor() {
    super();
    if (_this) {
      return _this;
    }

    this.tests = [];
    this.fails = [];

    this.total = 0;
    this.skipped = 0;
    this.pass = 0;
    this.fail = 0;

    this.reporter = new Reporter();
    this.reporter.emit('start');
    this.test = this.test.bind(this);
    _this = this;
  }

  test(name, callback) {
    const testInstance = new Test(name, callback);
    this.tests.push(testInstance);
    this.watch(testInstance);
    testInstance.run();
  }

  watch(test) {
    test.on('prerun', (name) => {
      this.reporter.emit('prerun', name);
    });

    test.on('assert', (result) => {

      this.total++;

      if (result.ok) {
        this.pass += 1;
      } else {
        this.fail += 1;
        this.fails.push(result.message);
      }

      this.reporter.emit('result', result);
    });
  }

}

const harness = new Harness();

harness.test.skip = (name, callback) => {
  harness.skipped += 1;
  harness.reporter.emit('skip', name);
};

module.exports = harness;
