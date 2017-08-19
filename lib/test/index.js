const EventEmitter = require('events');
const assert = require('../assertion');

class Test extends EventEmitter {

  constructor(name, callback) {
    super();
    this.assertions = [];

    const result = {
      expected: null,
      actual: null,
    };
    try {
      callback(assert);
      result.ok = true;
    } catch (e) {
      result.ok = false;
    }

    this.emit('result', result);

  }

}

module.exports = Test;
