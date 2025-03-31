import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("Renders a default greeting", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
  });

  it("Renders greeting with a name", () => {
    render(<Greeting name={"Lucas"} />);
    expect(screen.getByText("Hello, Lucas!")).toBeInTheDocument();
  });
});
