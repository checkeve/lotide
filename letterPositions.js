const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
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

const letterPositions = function(sentence) {
  const results = {};
  let i = 0;
  for (const letter of sentence) {
    i++;
    //skip spaces
    if (letter !== ' ') {
      //if the letter is already in object
      if (!results[letter]) {
        results[letter] = [];
      }
      results[letter].push(i - 1);
    }
  }
  return results;
};

console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);
