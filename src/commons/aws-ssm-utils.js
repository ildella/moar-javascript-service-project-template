const AWS = require('aws-sdk')

const {SSM} = AWS

const get = async name => (await new SSM().getParameter({Name: name}).promise()).Parameter.Value

const put = (Name, Value) => new SSM().putParameter({
  Name, Value, Overwrite: true, Type: 'String'
}).promise()

module.exports = {
  get,
  put,
}
