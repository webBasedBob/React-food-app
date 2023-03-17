import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import AmountInput from "./AmountInput";

describe("AmountInput Component", () => {
  const changeHandlerSpy = jest.fn();
  const style = { backgroundColor: "red" };
  const config = { value: 2 };

  const amountInput = (
    <AmountInput
      changeHandler={changeHandlerSpy}
      style={style}
      config={config}
    ></AmountInput>
  );
  it("renders successfull", () => {
    render(amountInput);
    const amountInputElm = screen.getByRole("spinbutton");
    expect(amountInputElm).toBeInTheDocument();
  });

  it("applyes the provided style on the container", () => {
    render(amountInput);
    const container = document.querySelector(".amount");
    expect(container).toHaveStyle(style);
  });

  it("renderes the input element as number input if NO input type attribute is passed in config prop", () => {
    render(amountInput);
    const amountInputElm = screen.getByRole("spinbutton");
    expect(amountInputElm).toHaveAttribute("type", "number");
  });

  it("renderes the input element as number input if an input type attribute is passed in config prop OTHER THAN NUMBER", () => {
    const config = { type: "text" };
    const amountInput = (
      <AmountInput
        changeHandler={changeHandlerSpy}
        style={style}
        config={config}
      ></AmountInput>
    );
    render(amountInput);
    //if type = number, the lement would be found, null is returned otherwise
    const amountInputElm = screen.queryByRole("spinbutton");
    expect(amountInputElm).not.toBeNull();
    expect(amountInputElm).toBeInTheDocument();
  });

  //Handler function execution

  it("executes changeHandler prop function when plus and minus icons are clicked", async () => {
    const user = userEvent.setup();
    render(amountInput);

    const icons = document.querySelectorAll("svg");
    const minusIcon = icons[0];
    const plusIcon = icons[1];

    await user.click(minusIcon);
    await user.click(plusIcon);
    expect(changeHandlerSpy).toBeCalledTimes(2);
  });

  it("pass input value minus 1 as argument to changeHandler when minus icon is clicked", async () => {
    const user = userEvent.setup();
    render(amountInput);

    const icons = document.querySelectorAll("svg");
    const minusIcon = icons[0];

    //value is set to 2 - see config obj
    await user.click(minusIcon);
    expect(changeHandlerSpy).toHaveBeenCalledWith(1);
  });

  it("pass input value plus 1 as argument to changeHandler when plus icon is clicked", async () => {
    const user = userEvent.setup();
    render(amountInput);

    const icons = document.querySelectorAll("svg");
    const plusIcon = icons[1];

    //value is set to 2 - see config obj
    await user.click(plusIcon);
    expect(changeHandlerSpy).toHaveBeenCalledWith(3);
  });
});
