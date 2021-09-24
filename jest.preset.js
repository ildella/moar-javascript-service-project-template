/*
  Documentation:
    https://jestjs.io/docs/configuration#preset-string
*/

module.exports = {
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  collectCoverage: false,
  // collectCoverageFrom: [
  //   '*.{js,jsx}',
  // ],
  coveragePathIgnorePatterns: ['/node_modules/'],
  coverageThreshold: {
    global: {branches: 55, functions: 80, lines: 90, statements: 90},
  },
  coverageReporters: ['text', 'text-summary', 'json', 'json-summary', 'lcov', 'clover', 'html'],
  verbose: false,
  notify: true,
  notifyMode: 'failure-change',
  // notifyMode: 'change',
}
