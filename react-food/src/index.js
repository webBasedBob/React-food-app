import ReactDOM from "react-dom/client";

import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux-store";
import React from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
