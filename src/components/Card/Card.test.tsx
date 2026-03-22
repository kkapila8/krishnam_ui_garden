import { render, screen } from "@testing-library/react";
import "jest-styled-components";
import Card from "./Card";

describe("Card Component", () => {
  test("renders card title and content", () => {
    render(<Card title="Test Card" content="Card content" />);
    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  test("card is greyed out when disabled", () => {
    render(<Card title="Disabled Card" content="Disabled content" disabled />);
    const titleElement = screen.getByText("Disabled Card");
    const contentElement = screen.getByText("Disabled content");

    expect(titleElement).toHaveStyleRule("color", "gray");
    expect(contentElement).toHaveStyleRule("color", "gray");
  });
});