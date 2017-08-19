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

    this.tests = [];
    this.reporter = reporter;
    this.reporter.emit('start');
    _this = this;
  }

  test(name, callback) {
    return this.reporter.watch(new Test(name, callback));
  }

}

const harness = new Harness();

module.exports = harness.test.bind(_this);
