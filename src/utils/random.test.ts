import getRandomValue from "./random"

describe("should return random integer between min-max interval", () => {
    const cases = [[1, 5], [10, 50], [100, 200], [500, 5000], [1, 100000]];

    test.each(cases)(
      "given %p and %p as arguments, returns %p",
      (min, max) => {
        const test = expect(getRandomValue(max, min))
        test.toBeLessThanOrEqual(max);
        test.toBeGreaterThanOrEqual(min);
      }
    );
});
