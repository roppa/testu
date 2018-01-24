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
const test = harness.test.bind(_this);

Promise.all(harness.tests)
  .then((result) => {
    harness.reporter.emit('end', harness.pass, harness.fail, harness.skipped);
    if (harness.fail > 0) {
      throw new Error(harness.fails);
    }
  })
  .catch((error) => {
    harness.reporter.emit('end', harness.pass, harness.fail, harness.skipped);
    throw error;
  });

test.skip = (name, callback) => {
  harness.skipped += 1;
  harness.reporter.emit('skip', name);
};

module.exports = test;
