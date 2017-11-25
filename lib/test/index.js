const EventEmitter = require('events');
const assert = require('../interface');

class Test extends EventEmitter {

  constructor(name, callback) {
    super();
    this.name = name;
    this.callback = callback;
  }

  run() {
    this.emit('prerun', this.name);
    this.callback(assert(this));
  }
}

module.exports = Test;
