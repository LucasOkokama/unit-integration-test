import { describe, it, expect } from "vitest";
import { fizzBuzz, max } from "../src/intro";

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