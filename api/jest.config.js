/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/**/*.test.ts"],
  verbose: true, //each individual test is reported during run
  forceExit: true,
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,
};
