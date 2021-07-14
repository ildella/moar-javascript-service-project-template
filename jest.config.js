/*
  Documentation:
    https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
*/

module.exports = {
  preset: './jest.preset.js',
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/dynalite',
    // '<rootDir>/tests/dynamodb',
    // '<rootDir>/tests/kinesis',
  ],
}
