const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i=0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    //   console.log(array1[i], array2[i])
      return false
    }
  }
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["hi", "bye"], ["hi", "bye"]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1], []), false);
assertEqual(eqArrays(["hi"], ["bye"]), false)