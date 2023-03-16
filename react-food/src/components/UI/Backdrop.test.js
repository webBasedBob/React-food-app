import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Backdrop from "./Backdrop";

let portalRoot = document.getElementById("portal");

if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
}

const mockFn = jest.fn();

const backdrop = <Backdrop root={portalRoot} display={true} onClose={mockFn} />;

describe("Backdrop Component", () => {
  it("renders successfully on the root element provided in props.root", () => {
    render(backdrop);

    const backdropElm = screen.getAllByRole("generic")[1];

    expect(backdropElm).toHaveClass("backdrop");
  });
  it("executes onClose function if backdrop is clicked", () => {
    render(backdrop);

    const backdropElm = screen.getAllByRole("generic")[1];

    fireEvent(
      backdropElm,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );

    expect(mockFn).toHaveBeenCalled();
  });
});
