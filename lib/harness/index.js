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

    this.reporter = reporter;
    this.reporter.emit('start');
    _this = this;
  }

  test(name, callback) {
    const testInstance = new Test(name, callback);
    return this.reporter.push(testInstance);
  }

}

const harness = new Harness();
const test = harness.test.bind(_this);

test.skip = (name, callback) => {
  harness.reporter.emit('skip', name);
};

module.exports = test;
