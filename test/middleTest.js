const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 6] for [1, 2, 3, 6, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 6, 8, 9]), [3, 6]);
  });
  it("returns ['run'] for ['go', 'stop', 'run', 'jump', 'duck']", () => {
    assert.deepEqual(middle(['go', 'stop', 'run', 'jump', 'duck']), ['run']);
  });
  it("returns [] for [1, 0]", () => {
    assert.deepEqual(middle([1,0]), []);
  });
  it("returns [] for ['A']", () => {
    assert.deepEqual(middle(['A']), []);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
});