import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Text from "./Text";

describe("Text Component", () => {
  test("renders text content", () => {
    render(<Text content="Test Text" />);
    expect(screen.getByText("Test Text")).toBeInTheDocument();
  });

  test("text is grey when disabled", () => {
    render(<Text content="Disabled Text" disabled />);
    const textElement = screen.getByText("Disabled Text");
    expect(textElement).toHaveStyleRule("color", "gray");
  });
});