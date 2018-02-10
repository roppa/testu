const harness = require('./lib/harness');

Promise.all(harness.tests)
  .then(() => {
    harness.reporter.emit('end', harness.pass, harness.fail, harness.skipped);
    if (harness.fail > 0) {
      throw new Error(harness);
    }
  })
  .catch(() => {
    harness.reporter.emit('end', harness.pass, harness.fail, harness.skipped);
    process.exit(1);
  });

module.exports = harness.test;
