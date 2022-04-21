/*
  Documentation:
    https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
*/

module.exports = {
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/dynamodb',
    // '<rootDir>/tests/mongodb',
    '<rootDir>/tests/http',
    '<rootDir>/tests/kinesis',
    '<rootDir>/tests/integration',
  ],
}
