import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
  it("Initial value is 5", () => {
    const { result } = renderHook(() => useCounter(5))
    expect(result.current.count).toBe(5)
  })

  it("Increment counter value", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(1)

    act(() => {
      result.current.increment()
    })
    expect(result.current.count).toBe(2)
  })

  it("Decrement counter value", () => {
    const { result } = renderHook(() => useCounter(0))
    expect(result.current.count).toBe(0)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-1)

    act(() => {
      result.current.decrement()
    })
    expect(result.current.count).toBe(-2)
  })

});
