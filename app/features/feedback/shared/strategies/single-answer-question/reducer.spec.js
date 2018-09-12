import chai from 'chai'

import reducer from './reducer'

const expect = chai.expect

describe('Feedback > Single Answer Question > Reducer', function () {
  it('should not mutate the original object', function () {
    const original = { answer: '0' }
    const reduced = reducer(original)
    expect(reduced).to.not.equal(original)
  })

  it('should handle a correct answer', function () {
    const rule = { answer: '1' }
    const result = reducer(rule, 1)
    expect(result.success).to.be.true
  })

  it('should handle an incorrect answer', function () {
    const rule = { answer: '0' }
    const result = reducer(rule, 1)
    expect(result.success).to.be.false
  })

  it('should handle a correct empty answer', function () {
    const rule = { answer: '-1' }
    const result = reducer(rule, undefined)
    expect(result.success).to.be.true
  })

  it('should handle an incorrect empty answer', function () {
    const rule = { answer: '0' }
    const result = reducer(rule, undefined)
    expect(result.success).to.be.false
  })
})