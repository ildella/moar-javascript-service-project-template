const AWS = require('aws-sdk')
const options = {
  region: 'eu-west-2',
}
AWS.config.update({
  ...options,
})
