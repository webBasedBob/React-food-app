import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Input from "./Input";

const inputComponent = (
  <Input
    className="test-class"
    input={{ id: "id1", type: "text" }}
    label="test"
  ></Input>
);

describe("Input Component", () => {
  it("renders successfully", () => {
    render(inputComponent);
    const inputElm = screen.getByText("test");
    expect(inputElm).toBeInTheDocument();
  });
});
