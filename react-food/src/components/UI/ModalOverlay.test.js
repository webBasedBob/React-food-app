import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import ModalOverlay from "./ModalOverlay";

let portalRoot = document.getElementById("portal");

if (!portalRoot) {
  portalRoot = document.createElement("div");
  portalRoot.setAttribute("id", "overlays");
  document.body.appendChild(portalRoot);
}

const overlay = (
  <ModalOverlay root={portalRoot} display={true}>
    <p>first</p>
    <p>second</p>
  </ModalOverlay>
);

describe("ModalOverlay Component", () => {
  it("renders successfully on the root element provided in props.root", () => {
    render(overlay);

    const overlayElm = screen.getAllByRole("generic")[1];

    expect(overlayElm).toHaveClass("modal");
  });
  it("is not rendered if props.display is false", () => {
    const overlay = <ModalOverlay root={portalRoot} display={false} />;

    render(overlay);

    const overlayElm = screen.queryAllByRole("generic")[1];
    expect(overlayElm).not.toHaveClass("modal");
  });
  it("renderes props.children as childnodes", () => {
    render(overlay);

    const overlayElm = screen.queryAllByRole("generic")[1];
    const child1 = screen.getByText("first");
    const child2 = screen.getByText("second");

    expect(overlayElm).toContainElement(child1);
    expect(overlayElm).toContainElement(child2);
  });
});
