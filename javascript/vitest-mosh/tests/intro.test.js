import { describe, it, expect } from "vitest";
import { max } from "../src/intro";

describe("max", () => {
  it("Should return the first argument if it is greater", () => {
    // AAA Pattern

    // Arrange
    const a = 2;
    const b = 1;

    // Act
    const result = max(a, b)

    // Assert
    expect(result).toBe(2)
  })
})