const sum = require('./sum')

describe('Example Tests Collection', () => {
  it('should add (1 + 2) to equal 3', () => {
    const result = sum(1, 2)
    expect(result).toBe(3)
  })

  it('Object assignment', () => {
    const obj = {}
    expect(obj).toEqual({})
  })
})
