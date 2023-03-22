import Router from "./router/Router";
import { useSelector } from "react-redux";
import Auth from "./components/Auth/Auth";
import React from "react";
import { LoadScript } from "@react-google-maps/api";
function App() {
  const mapState = useSelector((state) => state.googleMap);
  const libraries = ["places"];

  return (
    <React.StrictMode>
      <LoadScript libraries={libraries} googleMapsApiKey={mapState.API_KEY}>
        <Router></Router>;
      </LoadScript>
    </React.StrictMode>
  );
}

export default App;
