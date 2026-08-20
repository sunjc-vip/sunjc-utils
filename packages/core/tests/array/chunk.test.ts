import { describe, expect, it } from 'vitest'
import { chunk } from '../../src/array'

describe('chunk', () => {
  it('splits an array into chunks', () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]])
  })

  it('throws when size is invalid', () => {
    expect(() => chunk([1, 2], 0)).toThrow(RangeError)
  })
})
