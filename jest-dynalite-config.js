const {
  all
} = require('./tests/dynamodb/tables')

module.exports = {
  tables: all,
  basePort: 8001,
}
