const __ = require('highland')

const asyncFn = jest.fn().mockImplementation(async input => ({time: Date.now()}))

const step = 100
const tolerance = 10

test('ratelimit async sequence', done => {
  __([1, 2])
    .ratelimit(1, step)
    .map(asyncFn)
    .map(__).sequence()
    .pluck('time')
    .toArray(timestamps => {
      const delay = timestamps[1] - timestamps[0]
      expect(delay >= step).toBe(true)
      expect(delay < step + tolerance).toBe(true)
      done()
    })
})

test('ratelimit async parallel - same', done => {
  __([1, 2])
    .ratelimit(1, step)
    .map(asyncFn)
    .map(__).parallel(2)
    .pluck('time')
    .toArray(timestamps => {
      const delay = timestamps[1] - timestamps[0]
      console.log(delay)
      expect(delay >= step).toBe(true)
      expect(delay < step + tolerance).toBe(true)
      done()
    })
})
