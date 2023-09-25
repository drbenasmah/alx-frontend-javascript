import { taskFirst, taskNext } from "./0-constants.js";

// Mock console.log to capture the output
let consoleLogOutput = "";
console.log = (output) => {
  consoleLogOutput += output + "\n";
};

// Test suite for 0-main.js
describe("0-main.js", () => {
  // Test case for the combined output
  it("should log the correct combined string", () => {
    // Call the functions and capture the console.log output
    taskFirst();
    taskNext();

    // Check if the captured output matches the expected string
    expect(consoleLogOutput.trim()).toBe(
      "I prefer const when I can. But sometimes let is okay"
    );
  });
});
