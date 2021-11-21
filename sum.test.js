const { sum, subtraction } = require("./index");

test("1 + 5 should result in 6", () => {
  expect(sum(1, 5)).toBe(7); // This should not pass through the pipeline
})

