import { taskFirst, getLast, taskNext } from "../0-constants.js";

// Test suite for the functions in 0-constants.js
describe("0-constants.js Functions", () => {
  // Test case for the taskFirst() function
  describe("taskFirst()", () => {
    it("should return a string", () => {
      const result = taskFirst();
      expect(typeof result).toBe("string");
    });

    it("should return the expected string", () => {
      const result = taskFirst();
      expect(result).toBe("I prefer const when I can.");
    });
  });

  // Test case for the getLast() function
  describe("getLast()", () => {
    it("should return a string", () => {
      const result = getLast();
      expect(typeof result).toBe("string");
    });

    it("should return the expected string", () => {
      const result = getLast();
      expect(result).toBe(" is okay");
    });
  });

  // Test case for the taskNext() function
  describe("taskNext()", () => {
    it("should return a string", () => {
      const result = taskNext();
      expect(typeof result).toBe("string");
    });

    it("should return the expected combined string", () => {
      const result = taskNext();
      expect(result).toBe("But sometimes let is okay");
    });
  });
});
