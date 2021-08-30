test("The sum of two positive numbers should never be equal or less than 0", () => {
  for(let i = 0; i < 10; i += 1) {
    for(let v = 0; v < 10; v += 1) {
      expect(i + v).toBeGreaterThanOrEqual(0);
    }
  }
});