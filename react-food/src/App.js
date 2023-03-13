import Router from "./router/Router";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <Router></Router>;
    </React.StrictMode>
  );
}

export default App;
