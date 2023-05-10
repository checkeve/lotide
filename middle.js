const middle = function(array) {
  if (array.length < 3) {
    return [];
  } else {
    let middleIndex = array.length / 2;
    if (array.length % 2 === 0) {  
      return [array[middleIndex - 1], array[middleIndex]];
    } else {
      return [array[Math.floor(middleIndex)]];
    }
  }
};

module.exports = middle;
