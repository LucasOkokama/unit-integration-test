import { describe, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("Should return the first argument if it is greater", () => {
    expect(max(2, 1)).toBe(2)
  })

  it("Should return the second argument if it is greater", () => {
    expect(max(6, 8)).toBe(8)
  })
})