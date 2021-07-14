const {setup} = require('jest-dynalite')
setup(process.cwd())

const AWS = require('aws-sdk')
const dynaliteOptions = {
  dynamodb: {endpoint: process.env.MOCK_DYNAMODB_ENDPOINT},
  sslEnabled: false,
}
AWS.config.update({
  ...dynaliteOptions,
})
