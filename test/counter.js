const counter = require("../counter");
const assert = require("assert");

describe("Counter", () => {
  describe("Adds 1 to a number", () => {
    it("Should return 1 when called with 0", () => {
      const answer = counter(0);
      assert.equal(1, answer);
    });

    it("Should fail when given a string", () => {
      const answer = counter("string");
      assert.equal(1, answer);
    });
  });
});
