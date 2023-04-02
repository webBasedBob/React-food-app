import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Button from "./Button";

describe("Button Component", () => {
  it("renders successfully", () => {
    render(<Button />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toBeInTheDocument();
  });
  it("has a default className if no class is provided", () => {
    render(<Button />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toHaveClass("button");
  });
  it("asigns a custom class if it is provided", () => {
    const testClass = "test";
    render(<Button className={testClass} />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toHaveClass(testClass);
  });
  it("has the text content set to the value provided by props.label", () => {
    const label = "test";
    render(<Button label={label} />);
    const buttonElm = screen.getByText(label);
    expect(buttonElm).toBeInTheDocument();
  });
  it("passes content of config object prop as attributes on button element", () => {
    const config = { style: { backgroundColor: "red" } };
    render(<Button config={config} />);
    const buttonElm = screen.getByRole("button");
    expect(buttonElm).toHaveAttribute("style");
  });
});
