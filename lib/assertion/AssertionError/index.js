class AssertionError extends Error {

  constructor (message) {
    super(message || 'assertion error');
    this.name = 'AssertionError';
    this.stack = (new Error(message)).stack;
  }

}

module.exports = AssertionError;
