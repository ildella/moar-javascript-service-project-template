

const {startDb, stopDb, createTables, deleteTables} = require('jest-dynalite')

beforeAll(startDb)

// Create tables but don't delete them after tests
beforeAll(createTables)

// // or
// beforeEach(createTables)
// afterEach(deleteTables)

afterAll(stopDb)

test('write / read something', () => {

})
