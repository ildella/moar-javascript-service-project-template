const __ = require('highland')

const asyncFn = jest.fn().mockImplementation(async input => ({time: Date.now()}))
// const asyncFn100Ms = jest.fn().mockImplementation(async input => {
//   setTimeout()
// })

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
      expect(delay >= step).toBe(true)
      expect(delay < step + tolerance).toBe(true)
      done()
    })
})

test('ratelimit async parallel - might be worth it', done => {
  __([1, 2, 3, 4])
    .ratelimit(1, step)
    .map(asyncFn)
    .map(__).parallel(2)
    .pluck('time')
    .toArray(timestamps => {
      const delay1 = timestamps[1] - timestamps[0]
      const delay2 = timestamps[2] - timestamps[1]
      const delay3 = timestamps[3] - timestamps[2]
      console.log(`${delay1}, ${delay2}, ${delay3}`)
      expect(delay1 >= step).toBe(true)
      expect(delay2 >= step).toBe(true)
      expect(delay3 >= step).toBe(true)
      done()
    })
})
