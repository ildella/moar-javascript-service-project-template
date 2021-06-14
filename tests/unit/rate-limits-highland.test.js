const __ = require('highland')

const asyncFn = jest.fn().mockImplementation(async input => ({time: Date.now()}))

test('async basic', done => {
  const step = 100
  __([1, 2])
    .ratelimit(1, step)
    .map(asyncFn)
    .map(__).sequence()
    .pluck('time')
    .toArray(timestamps => {
      const delay = timestamps[1] - timestamps[0]
      console.log(delay)
      expect(delay >= step).toBe(true)
      expect(delay < step + 10).toBe(true)
      done()
    })
})
