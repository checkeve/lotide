const head = require('../head');
// const assertEqual = require('../assertEqual');

const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1,2,3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns 5 for [5, 4, 3, 2, 1]", () => {
    assert.strictEqual(head([5, 4, 3, 2, 1]), 5);
  });
  it("returns 'hi' for ['hi', 'how', 'are', 'you']", () => {
    assert.strictEqual(head(["hi", "how", "are", "you"]), "hi");
  });
  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  })
  it("returns 'hi' for ['hi']", () => {
    assert.strictEqual(head(['hi']), 'hi');
  })
});

