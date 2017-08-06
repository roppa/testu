const assert = require('../../assertion');
const Test = require('../index.js');

console.log('\nTest class\n');

const a = new Test();
const b = new Test();
assert(a === b, 'should be a singleton');
console.log('should be a singleton');
