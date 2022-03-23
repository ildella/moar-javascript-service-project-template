const mongoTestBase = require('./mongo-test-base')
// const {tenantDatabase} = require('../../src/mongodb/mongodb')
// const schema = require('../../src/mongodb/items-schema')

const {
  start,
  stop,
  serverUri,
  // connection,
} = mongoTestBase()

module.exports = async () => {
  await start()

  // const activeConnection = await connection()
  // const database = tenantDatabase(activeConnection)
  // console.log(await database.stats())
  // await createCollection(database, 'items', schema)

  process.env.mongoUri = serverUri()
  global.stop = stop
}
