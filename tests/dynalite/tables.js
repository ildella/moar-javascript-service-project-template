const aTable = {
  TableName: 'domain-dev-object',
  KeySchema: [
    {AttributeName: 'id', KeyType: 'HASH'},
    {AttributeName: 'value', KeyType: 'RANGE'},
  ],
  AttributeDefinitions: [
    {AttributeName: 'id', AttributeType: 'S'},
    {AttributeName: 'value', AttributeType: 'S'},
  ],
  ProvisionedThroughput: {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1,
  },
  // TimeToLiveDescription: {
  //   AttributeName: 'ttl',
  //   TimeToLiveStatus: 'ENABLED'
  // },
}

module.exports = {
  aTable,
  all: [aTable],
}
