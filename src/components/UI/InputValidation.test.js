import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputValidation from "./InputValidation";

describe("InputValidation", () => {
  it("renders Input component", () => {
    render(
      <InputValidation
        input={{ id: "test-input" }}
        onValidityChange={() => {}}
      />
    );
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("displays error message if input is invalid", () => {
    const validatingFn = jest.fn().mockReturnValue(false);
    const label = "Name";
    const input = { id: "test-input" };
    render(
      <InputValidation
        input={input}
        label={label}
        validatingFn={validatingFn}
        onValidityChange={() => {}}
      />
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.blur(inputElement);
    const errorMessage = screen.getByText(
      `Please enter a valid ${label.toLowerCase()}`
    );
    expect(errorMessage).toBeInTheDocument();
  });

  it("does not display error message if input is valid", () => {
    const validatingFn = jest.fn().mockReturnValue(true);
    const label = "Name";
    const input = { id: "test-input" };
    render(
      <InputValidation
        input={input}
        label={label}
        validatingFn={validatingFn}
        onValidityChange={() => {}}
      />
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.blur(inputElement);
    const errorMessage = screen.queryByText(
      `Please enter a valid ${label.toLowerCase()}`
    );
    expect(errorMessage).not.toBeInTheDocument();
  });

  it("calls onValidityChange with correct parameters", () => {
    const validatingFn = jest.fn().mockReturnValue(false);
    const label = "Name";
    const input = { id: "test-input" };
    const onValidityChange = jest.fn();
    render(
      <InputValidation
        input={input}
        label={label}
        validatingFn={validatingFn}
        onValidityChange={onValidityChange}
      />
    );
    const inputElement = screen.getByRole("textbox");
    fireEvent.change(inputElement, { target: { value: "test" } });
    fireEvent.blur(inputElement);
    expect(onValidityChange).toHaveBeenCalledWith(input.id, false);
  });
});
