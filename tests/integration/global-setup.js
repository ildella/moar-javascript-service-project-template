require('../aws-init')

const {get} = require('../aws-commons')
// const {authenticate} = require('../../src/commons/clients')

module.exports = async () => {
  const email = await get('email')
  const password = await get('password')
  const apiKey = await get('apikey')

  /* eslint-disable fp/no-mutation */
  // process.env.accessToken = await authenticate({email, password})
  process.env.apiKey = apiKey
}
