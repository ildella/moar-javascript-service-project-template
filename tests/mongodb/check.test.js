const mongoConnections = require('./mongo-connections')

const {mongoUri} = process.env
const {connection, stop} = mongoConnections()

afterEach(stop)

test('should successfully set & get information from the database', async () => {
  const activeConnection = await connection({mongoUri})

  const database = activeConnection.db('dd-test-db')
  expect(database).toBeDefined()

  const testCollection = database.collection('test-1')
  const result = await testCollection.insertMany([{a: 1}, {b: 1}])
  expect(result.insertedCount).toStrictEqual(2)
  expect(await testCollection.countDocuments({})).toBe(2)
})
