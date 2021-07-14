const AWS = require('aws-sdk')
const {SSM} = AWS
const ssm = new SSM()

const get = async name => (await ssm.getParameter({Name: name}).promise()).Parameter.Value

const put = (Name, Value) => ssm.putParameter({
  Name, Value, Overwrite: true, Type: 'String'
}).promise()

module.exports = {
  get,
  put,
}
