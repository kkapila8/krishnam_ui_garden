import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Button from "./Button";

describe("Button Component", () => {
  // ✅ Test 1: Component renders
  test("renders button with label", () => {
    render(<Button label="Test Button" />);
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
  });

  // ✅ Test 2: Disabled state changes style
  test("button is grey when disabled", () => {
    render(<Button label="Disabled Button" disabled />);
    const buttonElement = screen.getByText("Disabled Button");

    expect(buttonElement).toHaveStyleRule("background-color", "gray");
  });
});