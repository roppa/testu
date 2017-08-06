let _this;

class Test {

  constructor() {
    if (_this) {
      return _this;
    }

    _this = this;
  }
}

module.exports = Test;
