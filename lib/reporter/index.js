let instance;

class Runner {

  constructor() {
    if (instance) {
      return instance;
    }

    instance = this;
  }
}

module.exports = Runner;
