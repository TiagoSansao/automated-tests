function throwError() {
  throw new Error("Bip bop");
}

test("An error should be thrown", () => {
  expect(() => throwError()).toThrow(Error);
});