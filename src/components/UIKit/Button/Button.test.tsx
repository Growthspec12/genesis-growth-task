import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

test("renders button", () => {
  render(<Button>button</Button>);
  const buttonElement = screen.getByText(/button/i);
  expect(buttonElement).toBeInTheDocument();
});
