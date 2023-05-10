const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays')

//Testing...
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hi", "bye"], ["hi", "bye"]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays(["hi"], ["bye"]), false)