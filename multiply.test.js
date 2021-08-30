const { multiply } = require("./index");

test("3 * 4 should not be in 13", () => {
  expect(multiply(3, 4)).not.toBe(13);
})
