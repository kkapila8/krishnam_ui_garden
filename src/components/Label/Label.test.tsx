import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Label from "./Label";

describe("Label Component", () => {
  test("renders label", () => {
    render(<Label text="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  test("label is grey when disabled", () => {
    render(<Label text="Disabled Label" disabled />);
    const label = screen.getByText("Disabled Label");

    expect(label).toHaveStyleRule("color", "gray");
  });
});