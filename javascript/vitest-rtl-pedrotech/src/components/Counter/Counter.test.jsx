import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import Counter from "./Counter";

describe("Counter", () => {
  it("Increments the counter by one on button click", async () => {
    render(<Counter />);

    const counterButton = screen.getByRole("button", { name: /increment/i });
    const counterValue = screen.getByTestId("counter-value");

    expect(counterValue.textContent).toEqual("0");

    await userEvent.click(counterButton);
    expect(counterValue.textContent).toEqual("1");

    await userEvent.click(counterButton);
    expect(counterValue.textContent).toEqual("2");
  });
});
