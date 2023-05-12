const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [4, 3, 2, 1] for [5, 4, 3, 2, 1]", () => {
    assert.deepEqual(tail([5, 4, 3, 2, 1]), [4, 3, 2, 1]);
  });
  it("returns ['how', 'are', 'you'] for ['hi', 'how', 'are', 'you']", () => {
    assert.deepEqual(tail([5, 4, 3, 2, 1]), [4, 3, 2, 1]);
  });
  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });
  it("returns [] for [10]", () => {
    assert.deepEqual(tail([10]), []);
  });
});


