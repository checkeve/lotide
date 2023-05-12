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



const flatten = function(nestedArray) {
  let flatArray = []
  for (let i = 0; i < nestedArray.length; i++) {
    if (Array.isArray(nestedArray[i]) === true) {
      for (let num of nestedArray[i]) {
        flatArray.push(num);
      } 
    }else {
        flatArray.push(nestedArray[i]);
      }
    }
    return flatArray
  }

  module.exports = flatten;