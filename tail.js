const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};


