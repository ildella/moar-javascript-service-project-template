const {Kinesis} = require('aws-sdk')
const kinesalite = require('kinesalite')
const kinesaliteServer = kinesalite({
  // path: './.kinesis-db',
  createStreamMs: 5,
})

const StreamName = 'test-stream'
const kinesis = () => new Kinesis({endpoint: 'http://localhost:4567'})

/* eslint-disable no-unused-vars */
beforeAll(done => {
  kinesaliteServer.listen(4567, error => {
    if (error) done(error)
    console.log('Kinesalite started on port 4567')
    done()
  })
})
beforeAll(done => {
  kinesis().createStream({StreamName, ShardCount: 1}, (error, data) => {
    console.log(`Stream ${StreamName} created -->`, error, data)
    done()
  })
})

const __ = require('highland')

afterAll(done => {
  __([StreamName])
    .map(StreamName =>
      kinesis().deleteStream({StreamName, EnforceConsumerDeletion: true}).promise())
    .flatMap(__)
    .tap(deleted => console.log(deleted))
    .done(() => {
      kinesaliteServer.close(error => {
        if (error) done(error)
        done()
      })
    })
})

test('listStreams', async () => {
  // await kinesis().createStream({StreamName, ShardCount: 1}).promise()
  const streams = await kinesis().listStreams().promise()
  expect(streams).toEqual({'HasMoreStreams': false, 'StreamNames': ['test-stream']})
  // console.log(streams)
})

test('describe and inspect a stream', async () => {
  const {StreamDescription} = await kinesis().describeStream({StreamName}).promise()
  const {StreamStatus, Shards} = StreamDescription
  expect(StreamStatus).toEqual('ACTIVE')
  expect(Shards[0].ShardId).toBe('shardId-000000000000')
  expect(Shards[0].SequenceNumberRange).toHaveProperty('StartingSequenceNumber')
  console.log(StreamDescription)
})

test('write', async () => {
  const response = await kinesis().putRecord({
    StreamName,
    PartitionKey: 'A1',
    Data: JSON.stringify({some: 'data'}),
  }).promise()
  const {ShardId, SequenceNumber} = response
  expect(ShardId).toBeDefined()
  expect(SequenceNumber).toBeDefined()
  // {
  //   ShardId: 'shardId-000000000000',
  //   SequenceNumber: '49618584429835667572757008002197763767716616754692096002'
  // }
  console.log(response)
})

test.skip('read', async () => {
  const {ShardIterator} = await kinesis().getShardIterator({
    StreamName,
    ShardId: 'shardId-000000000000',
    ShardIteratorType: 'LATEST',
    // ShardIteratorType: 'AT_SEQUENCE_NUMBER',
    // StartingSequenceNumber: '0',
  }).promise()
  console.log(ShardIterator)
  const {Records, NextShardIterator} = await kinesis().getRecords({
    // StreamName,
    ShardIterator,
    Limit: 100,
  }).promise()
  console.log(Records)
  console.log(NextShardIterator)
})
