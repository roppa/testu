let instance;

class Test {

  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
  }
}

module.exports = Test;
