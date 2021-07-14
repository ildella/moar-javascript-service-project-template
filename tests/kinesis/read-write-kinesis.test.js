const {
  startServer,
  createStream,
  closeAndTerminate,
  writeRead,
} = require('../kinesalite-jest')

const StreamName = 'integration-test-stream'
const PartitionKey = 'integration-test'
const port = 5577

beforeAll(done => startServer({port}, done))
beforeAll(done => createStream({port, StreamName}, done))
afterAll(done => closeAndTerminate({port, StreamName}, done))

const simulateKinesisWriteRead = writeRead({StreamName, PartitionKey, port})

const payload = {some: 'value'}

test('full integration cycle - single venue - match ok with hubspot', async () => {
  const Records = await simulateKinesisWriteRead(payload)
  expect(Records).toHaveLength(1)
})
