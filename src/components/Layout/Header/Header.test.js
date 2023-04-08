import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import Header from "./Header";
import { Provider } from "react-redux";
import store from "../../../redux-store/index";

import Router from "../../../router/Router";
describe("header Component", () => {
  it("renders successfully", () => {
    // render(
    //   <Router>
    //     <Provider store={store}></Provider>
    //   </Router>
    // );
  });
});
