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
    console.log("The two arrays are equal to each other.");
  } else console.log("The two arrays are not equal.");
};


 

const without = function(source, itemsToRemove) {
  let newArray = source.slice(0);
  for (let item of itemsToRemove) {
    for (let i = 0; i < source.length; i++) {
      if (source[i] === item) {
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};
 
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

