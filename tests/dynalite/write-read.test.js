require('jest-dynalite/withDb')

require('../aws-init')
const {namingConvention} = require('../../src/dynamo-commons')
const defaultDocumentClient = require('../../src/dynamo-client')

test('naming convention', () => {
  const fullTableName = namingConvention('aName')
  expect(fullTableName).toEqual('servedup-dev-aName')
})

// add the write to Dynamo the final result like:
// {
//   venueId
//   cycle: some unique ID for the cron run
//   started at
//   completed at
//   content: the data sent to hubspot
//   response: hubspot response
//   hubspot id
//   missing: if matching fails with hubspot
// }

test('write / read something', async () => {
  const TableName = 'object'
  const venueId = 'abc-123'
  const businessDayId = '1'
  const Item = {venueId, businessDayId}
  await defaultDocumentClient.put({TableName, Item})
  const response = await defaultDocumentClient.get({TableName, Key: {venueId, businessDayId}})
  expect(response).toEqual({
    Item: {
      venueId,
      businessDayId,
    }
  })
})
