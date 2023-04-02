import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Card from "./Card";

describe("Card Component", () => {
  it("renders successfully", () => {
    render(<Card />);
    const divs = screen.getAllByRole("generic");
    const cardElm = divs.find((elm) => {
      return (elm.className = "card");
    });
    expect(cardElm).toBeInTheDocument();
  });
  it("contains the elements passed by props.children", () => {
    const child = <p>Child</p>;
    render(<Card>{child}</Card>);
    const divs = screen.getAllByRole("generic");
    const cardElm = divs.find((elm) => {
      return (elm.className = "card");
    });
    expect(cardElm).toContainHTML("<p>Child</p>");
  });
});
