// Documentation: https://jestjs.io/docs/en/configuration.html

module.exports = {
  // projects: ['<rootDir>/tests/*', '<rootDir>/__e2e__/*'],
  // preset: 'jest-dynalite',
  testEnvironment: 'node',
  testMatch: ['**/tests/**/*.test.js'],
  testPathIgnorePatterns: [
    '/node_modules',
  ],
  globalSetup: '<rootDir>/tests/global-setup.js',
  setupFiles: ['./tests/setup-files'],
  setupFilesAfterEnv: ['./tests/setup-files-after-environment.js'],
  collectCoverage: false,
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
  coverageThreshold: {
    global: {branches: 80, functions: 90, lines: 90, statements: 90}
  },
  coverageReporters: ['text', 'text-summary', 'json', 'json-summary', 'lcov', 'clover', 'html'],
  verbose: false,
  notify: true,
  // notifyMode: 'failure-change, success-change',
  notifyMode: 'change',
}
