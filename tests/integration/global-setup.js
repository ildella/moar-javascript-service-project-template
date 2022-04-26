// const {aws} = require('ildella-test-commons/')
// const {awsSsmUtils, awsInit} = aws
// const {get} = awsSsmUtils

const get = keyName => Promise.resolve(`${keyName}-xyz-123`)

module.exports = async () => {
  const apiKey = await get('apikey')

  // eslint-disable-next-line fp/no-mutation
  process.env.apiKey = apiKey
}
