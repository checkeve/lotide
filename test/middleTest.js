const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

//Testing...
assertArraysEqual(middle([1, 2, 3, 6, 8, 9]), [3, 6]);
assertArraysEqual(middle(["go", "stop", "run", "jump", "duck"]), ["run"]);
assertArraysEqual(middle([1, 0]), []);
assertArraysEqual(middle(["A"]), []);
assertArraysEqual(middle([]), []);