/*
  Documentation:
    https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
*/

const {jest: {preset}} = require('ildella-test-commons')

module.exports = {
  ...preset(),
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/integration',
  ],
}
