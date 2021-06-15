const {
  all
} = require('./tests/dynamodb/tables')

module.exports = {
  // tables: async () => { ... } // async is also working here
  tables: all,
  basePort: 8001,
}
