const __ = require('highland')

const {
  startServer,
  createStream,
  closeAndTerminate,
  writeRead,
} = require('../../src/kinesalite-jest')

const parseKinesisEvent = require('../../src/parse-kinesis-event')
const parseKinesisData = require('../../src/parse-kinesis-data')
// const parseValidateSource = require('../../src/apps/parse-validate-source')

const StreamName = 'write-read-parse-stream'
const PartitionKey = 'anything'
const port = 5588

beforeAll(done => startServer({port}, done))
beforeAll(done => createStream({port, StreamName}, done))
afterAll(done => closeAndTerminate({port, StreamName}, done))

const simulateKinesisWriteRead = writeRead({StreamName, PartitionKey, port})

const data = {some: 'data'}

test('send - receive - parse via Kinesis', async () => {
  const Records = await simulateKinesisWriteRead(data)
  expect(Records).toHaveLength(1)

  const results = await __(Records)
    .through(parseKinesisEvent({partitionKeyFilter: PartitionKey}))
    .through(parseKinesisData())
    .errors(console.error)
    .toPromise(Promise)

  expect(results).toEqual(data)
})

test.todo('this will be moved to the "shared code" project')
