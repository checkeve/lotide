const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
    //   console.log(array1[i], array2[i])
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else console.log(`💀💀💀 Assertion Failed: ${array1} !== ${array2}`);
};



const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Testing assignment example...
const words = ["ground", "control", "to", "major", "tom"];
assertArraysEqual(map(words, x => x[0]), ["g", "c", "t", "m", "t"]);

//Testing array with numbers and function with more than one line
let mapResult1 = map([0, 1, 2, 3, 4], item => {
  item++;
  item = item * item;
  return item;
});
assertArraysEqual(mapResult1, [1, 4, 9, 16, 25]);

//Testing and array with numbers and strings...
let mapResult2 = map([0, "dog", 62], item => "hidden item");
assertArraysEqual(mapResult2, ["hidden item", "hidden item", "hidden item"]);

module.exports = map;