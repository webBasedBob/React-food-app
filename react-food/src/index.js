import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import authStore from "./redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={authStore}>
    <App />
  </Provider>
);
