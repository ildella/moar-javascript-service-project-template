const {
  E2E = false,
} = process.env
const isE2E = Boolean(E2E)
// console.log({isE2E})

module.exports = ({framework = 'fastify'} = {}) => isE2E === true
  ? require('./http-test-base-e2e')
  : require(`./http-test-base-${framework}`)
