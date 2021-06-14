const __ = require('highland')

const asyncFn = jest.fn().mockImplementation(async input => ({with: input}))

test('async await', async () => {
  const result = await asyncFn(1)
  expect(result).toEqual({with: 1})
})

const wrapPromise = (promise, parallel = 1) => __.pipeline(
  __.map(promise),
  __.map(__),
  __.parallel(parallel),
)

test('async basic', done => {
  __([1, 2])
    .map(asyncFn)
    .map(__).sequence() // same as .flatMap(__)
    .toArray(results => {
      expect(results[0]).toEqual({with: 1})
      expect(results[1]).toEqual({with: 2})
      done()
    })
})

test('async with a pipeline', done => {
  __([1, 2])
    .through(wrapPromise(asyncFn, 2))
    .toArray(results => {
      expect(results[0]).toEqual({with: 1})
      expect(results[1]).toEqual({with: 2})
      done()
    })
})

test('extend highland', () => {
  expect(Object.prototype.hasOwnProperty.call(__, 'flatMap')).toEqual(true)
  expect(Object.prototype.hasOwnProperty.call(__, 'something')).toEqual(false)
  Object.defineProperty(__, 'something',{
    enumerable: false,
    writable: false,
  })
  expect(Object.prototype.hasOwnProperty.call(__, 'something')).toEqual(true)
})

test.skip('async with FlatMap - new!', done => {
  expect(__.prototype.hasOwnProperty.call(__, 'flatMapAsync')).toEqual(false)
  __.prototype.flatMapAsync = (promise, parallel = 1) => {
    console.log(this)
    console.log(promise)
  }
  expect(__.prototype.hasOwnProperty.call(__, 'flatMapAsync')).toEqual(true)
  __([1, 2])
    .flatMapAsync(asyncFn)
    .toArray(results => {
      expect(results[0]).toEqual({with: 1})
      expect(results[1]).toEqual({with: 2})
      done()
    })
})

test('deep pluck is missing', done => {
  __([{json: {with: 'deep'}}])
    .pluck('json') // same as .pick(['json'])
    .apply(result => {
      expect(result).toEqual({with: 'deep'})
      done()
    })

})
