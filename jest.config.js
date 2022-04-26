/*
  Documentation:
    https://jestjs.io/docs/configuration#projects-arraystring--projectconfig
*/

const {jestCommons} = require('ildella-test-commons')
const {jestPreset} = jestCommons

module.exports = {
  ...jestPreset,
  projects: [
    '<rootDir>/tests/unit',
    '<rootDir>/tests/integration',
  ],
}
