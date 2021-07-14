require('jest-dynalite/withDb')
// const {startDb, stopDb, createTables, deleteTables} = require('jest-dynalite')
const {DynamoDB} = require('aws-sdk')

const {DocumentClient} = DynamoDB
const defaultDynamoOptions = {
  httpOptions: {connectTimeout: 25_000, timeout: 25_000},
  maxRetries: 2,
}
const documentClient = (dynamoOptions = defaultDynamoOptions) => new DocumentClient(dynamoOptions)

// beforeAll(startDb)
// beforeAll(createTables)
// // or
// beforeEach(createTables)
// afterEach(deleteTables)
// afterAll(stopDb)

const path = require('path')
test('check config', () => {
  // expect(process.env.JEST_DYNALITE_CONFIG_DIRECTORY).toContain('/ildella-nodejs-template')
  const resolved = path.resolve(process.cwd(), 'jest-dynalite-config.js')
  expect(resolved).toContain('/jest-dynalite-config.js')
})

test('check config - wrong', () => {
  const resolved = path.resolve(__dirname, 'jest-dynalite-config.js')
  expect(resolved).toContain('/tests/dynamodb/jest-dynalite-config.js')
})

test('write / read something', async () => {
  const id = 'abc-123'
  const TableName = 'company-app-stage-customers'
  const Item = {id, name: 'best customer ever'}
  await documentClient().put({TableName, Item}).promise()
  const response = await documentClient().get({TableName, Key: {id}}).promise()
  expect(response).toEqual({
    Item: {
      id: 'abc-123',
      name: 'best customer ever',
    }
  })
})
