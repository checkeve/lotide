const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return key;
    }
  }
};


//Testing...
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const nums = {
  one: 1,
  two: 2,
  three: 3,
  four: 4
};
assertEqual(findKeyByValue(nums, 3), "three");
assertEqual(findKeyByValue(nums, 5), undefined);


module.exports = findKeyByValue;