import { describe, it, expect } from "vitest";
import { calculateAverage, calculateFactorial, fizzBuzz, max } from "../src/intro";

describe("max", () => {
  it("Should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2)
  })

  it("Should return the second argument if it is greater", () => {
    expect(max(6, 8)).toBe(8)
  })

  it("Should return the first argument if arguments are equal", () => {
    expect(max(10, 10)).toBe(10)
  })
})

describe("fizzBuzz", () => {
  it("Should return FizzBuzz if arg is divisible by 3 and 5", () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
  })

  it("Should return Fizz if arg is only divisible by 3", () => {
    expect(fizzBuzz(9)).toBe("Fizz")
  })

  it("Should return Buzz if arg is only divisible by 5", () => {
    expect(fizzBuzz(20)).toBe("Buzz")
  })

  it("Should return arg as a string if not divisible by 3 or 5", () => {
    expect(fizzBuzz(17)).toBe("17")
  })
})

describe('calculateAverage', () => {
  it("Should return NaN if given an empty array", () => {
    expect(calculateAverage([])).toBe(NaN)
  })

  it('Should calculate the average of an array with a single element', () => {
    expect(calculateAverage([1])).toBe(1)
  })

  it('Should calculate the average of an array with two elements', () => {
    expect(calculateAverage([1, 2])).toBe(1.5)
  })

  it('Should calculate the average of an array with three elements', () => {
    expect(calculateAverage([1, 2, 3])).toBe(2)
  })
})

describe('calculateFactorial', () => {
  it("Should return 1 if given 0", () => {
    expect(calculateFactorial(0)).toBe(1)
  })

  it("Should return 1 if given 1", () => {
    expect(calculateFactorial(1)).toBe(1)
  })

  it("Should return 2 if given 2", () => {
    expect(calculateFactorial(2)).toBe(2)
  })

  it("Should return 6 if given 3", () => {
    expect(calculateFactorial(3)).toBe(6)
  })

  it("Should return 24 if given 4", () => {
    expect(calculateFactorial(4)).toBe(24)
  })

  it("Should return undefined if given a negative number", () => {
    expect(calculateFactorial(-1)).toBe(undefined)
  })
})