module.exports = {
  transform: {
    globals: ["ts-jest"],
    ".ts": "ts-jest",
  },
  testMatch: ["**/tests/**/*.test.ts", "**/tests/*.test.ts"],
  verbose: true,
};
