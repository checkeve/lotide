const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    return console.log(`💀💀💀 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  let letterObj = {};
  for (const letter of sentence) {
    if (letter !== ' ') {
      if (letterObj[letter]) {
        letterObj[letter] += 1;
      } else {
        letterObj[letter] = 1;
      }
    }
  }
  return letterObj;
};

module.exports = countLetters;
