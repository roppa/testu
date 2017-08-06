class AssertionError extends Error {

  constructor (message) {
    super();
    this.name = 'AssertionError';
    this.message = message || 'assertion error';
    this.stack = (new Error()).stack;
  }

}

module.exports = AssertionError;
