import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Input from "./Input";

let inputComponent = (
  <Input
    className="test-class"
    flexColumn={true}
    input={{ id: "id1", type: "text", className: "test-class__inner" }}
    label="text"
  >
    <p>first</p>
    <p>second</p>
  </Input>
);

describe("Input Component", () => {
  it("renders successfully", () => {
    render(inputComponent);

    const labelElm = screen.getByText("text");
    const inputElm = screen.getByRole("textbox");

    expect(labelElm).toBeInTheDocument();
    expect(inputElm).toBeInTheDocument();
  });
  it("renderes props.children as siblings to input and label elements", () => {
    render(inputComponent);

    const child1 = screen.getByText("first");
    const child2 = screen.getByText("second");
    const containerDiv = screen.getAllByRole("generic")[1];

    expect(containerDiv).toContainElement(child1);
    expect(containerDiv).toContainElement(child2);
  });
  it("passes all the properties from props.input object to input element", () => {
    render(inputComponent);

    const inputElm = screen.getByRole("textbox");

    expect(inputElm).toHaveClass("test-class__inner");
  });
  it("sets the container className to the one provided in props.className", () => {
    render(inputComponent);

    const containerDiv = screen.getAllByRole("generic")[1];

    expect(containerDiv).toHaveClass("test-class");
  });
  it("sets the container className to the fallback one if none is provided in props.className", () => {
    let inputComponent = (
      <Input
        input={{ id: "id1", type: "text", className: "test-class__inner" }}
        label="text"
      ></Input>
    );

    render(inputComponent);

    const containerDiv = screen.getAllByRole("generic")[1];

    expect(containerDiv).toHaveClass("input");
  });
  it("adds column to the container className if props.flexColumn is true", () => {
    render(inputComponent);

    const containerDiv = screen.getAllByRole("generic")[1];

    expect(containerDiv).toHaveClass("column");
  });
  it("adds row to the container className if props.flexColumn is false", () => {
    let inputComponent = (
      <Input
        className="test-class"
        flexColumn={false}
        input={{ id: "id1", type: "text", className: "test-class__inner" }}
        label="text"
      ></Input>
    );

    render(inputComponent);

    const containerDiv = screen.getAllByRole("generic")[1];

    expect(containerDiv).toHaveClass("row");
  });
});
