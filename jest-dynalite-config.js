const {
  all,
} = require('./tests/dynalite/tables')

module.exports = {
  // tables: async () => { ... } // async is also working here
  tables: all,
  basePort: 8001,
}
