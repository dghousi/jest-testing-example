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

describe('numbers', () => {
  it('two plus two', () => {
    const value = 2 + 2
    expect(value).toBe(4)
    expect(value).toBeGreaterThan(2)
    expect(value).toBeGreaterThanOrEqual(2)
    expect(value).toBeLessThan(5)
    expect(value).toBeLessThanOrEqual(5)
  })

  it('adding floats ', () => {
    const value = 0.1 * 0.2
    expect(value).toBeCloseTo(0.2, 0.3)
  })
})

describe('strings', () => {
  it('there is no I in team', () => {
    expect('team').not.toMatch(/I/)
  })
})

describe('arrays', () => {
  const shopingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ]

  it('check item in the list', () => {
    expect(shopingList).toContain('milk')
  })
})
