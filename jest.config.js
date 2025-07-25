export default {
  transform: {},
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testEnvironment: "node",
  testMatch: ["**/tests/**/*.test.js"],
  verbose: true,
  setupFilesAfterEnv: ["./jest.setup.js"],
};
