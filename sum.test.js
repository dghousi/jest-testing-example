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

describe('Truthy or Falsy', () => {
  it('Falsy values => null, 0, "", NaN, undefined', () => {
    const n = null
    expect(n).toBeFalsy()
    expect(n).not.toBeTruthy()
    expect(n).toBeNull()
    expect(n).not.toBeUndefined()
    expect(0).toBeFalsy()
    expect('').toBeFalsy()
    expect(NaN).toBeFalsy()
    expect(undefined).toBeFalsy()
  })
})
