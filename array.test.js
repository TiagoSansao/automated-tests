function givesAnArray(value) {
  const coolArray = ["Hello", "Hi"];
  coolArray.push(value);
  return coolArray;
}

test("\"Hey\" in array", () => {
  expect(givesAnArray("Hey")).toContain("Hey");
});