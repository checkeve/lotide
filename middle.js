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

const middle = function(array) {
  let middleIndex = array.length / 2;
  if (array.length % 2 === 0) {  
    return [array[middleIndex - 1], array[middleIndex]];
  } else {
    return [array[Math.floor(middleIndex)]];
  }
}

assertArraysEqual(middle([1, 2, 3, 6, 8, 9]), [3, 6]);
assertArraysEqual(middle(["go", "stop", "run", "jump", "duck"]), ["run"]);
assertArraysEqual(middle([1, 0]), [1, 0]);
assertArraysEqual(middle([5]), [5]);
