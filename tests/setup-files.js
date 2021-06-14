const AWS = require('aws-sdk')
const dynaliteOptions = {
  dynamodb: {endpoint: process.env.MOCK_DYNAMODB_ENDPOINT},
  sslEnabled: false,
  region: 'local'
}
AWS.config.update({
  ...dynaliteOptions,
})

// Disable this 2 lines to use per-file DynamoDB start/stop
// const {setup} = require('jest-dynalite')
// setup(__dirname)
