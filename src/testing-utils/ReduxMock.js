import { render } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { createSlice, createReducer, createAsyncThunk } from "@reduxjs/toolkit";
import store from "../redux-store/index";
export const getAddressFromCoords = createAsyncThunk(
  "googleMap/getAddressFromCoords",
  async (latLng) => {
    try {
      const state = store.getState();
      const reverseGeoCodingUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latLng.lat},${latLng.lng}&key=${state.googleMap.API_KEY}`;
      let response = await fetch(reverseGeoCodingUrl);
      let jsonResponse = await response.json();
      let normalizedResult = jsonResponse.results[0].formatted_address
        .split(" ")
        .filter((word) => {
          return !word.includes("+");
        })
        .join(" ");
      let city = jsonResponse.results[0].address_components.filter((elm) => {
        return elm.types[0] === "locality";
      })[0].long_name;
      store.dispatch(getBoundsFromAddress(normalizedResult));
      return { address: normalizedResult, city: city };
      // return jsonResponse.results[0].formatted_address;
    } catch (err) {
      //with null returned, the component containing this data will not be rendered
      console.log(err);
      return null;
    }
  }
);
export const getBoundsFromAddress = createAsyncThunk(
  `googleMap/getBoundsFromAddress`,
  async (address) => {
    if (address === "") return;
    try {
      const state = store.getState();
      const geocodinfUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${state.googleMap.API_KEY}`;
      let response = await fetch(geocodinfUrl);
      let jsonResponse = await response.json();
      const bounds = {
        east: jsonResponse.results[0].geometry.viewport.northeast.lng,
        north: jsonResponse.results[0].geometry.viewport.northeast.lat,
        south: jsonResponse.results[0].geometry.viewport.southwest.lat,
        west: jsonResponse.results[0].geometry.viewport.southwest.lng,
      };
      return bounds;
    } catch (err) {
      return;
    }
  }
);
export const getCoordsFromAddress = createAsyncThunk(
  "googleMap/getCoordsFromAddress",
  async (address) => {
    if (address === "") return;
    try {
      const addressQueryString = address
        .trim()
        .split(" ")
        .reduce((acc, currVal) => {
          return acc + "%20" + currVal;
        });
      const state = store.getState();
      const geocodinfUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${addressQueryString}&key=${state.googleMap.API_KEY}`;
      let response = await fetch(geocodinfUrl);
      let jsonResponse = await response.json();
      if (jsonResponse.results.length === 0) return;
      let latLng = jsonResponse.results[0].geometry.location;
      const pula = jsonResponse.results[0].geometry.bounds;
      const bounds = {
        east: jsonResponse.results[0].geometry.viewport.northeast.lng,
        north: jsonResponse.results[0].geometry.viewport.northeast.lat,
        south: jsonResponse.results[0].geometry.viewport.southwest.lat,
        west: jsonResponse.results[0].geometry.viewport.southwest.lng,
      };
      return {
        latLng: latLng,
        bounds: bounds,
      };
    } catch (err) {
      return { lat: 0, lng: 0 };
    }
  }
);
export const googleMapSlice = createSlice({
  name: "googleMap",
  initialState: {
    API_KEY: "AIzaSyB4tPxU7HnHpD442PVCTvSrgQkMKjtnGFU",
    locationCoords: { lat: 0, lng: 0 },
    locationType: "global",
    address: null,
    markerPosition: { lat: 0, lng: 0 },
    bounds: {
      east: 90,
      north: 90,
      south: -90,
      west: -90,
    },
    city: null,
    modalIsShown: false,
  },
  reducers: {
    setLocationCoords(state, action) {
      navigator.geolocation.getCurrentPosition((geolocationData) => {
        console.log(geolocationData);
        state.locationCoords = {
          lat: geolocationData.coords.latitude,
          lng: geolocationData.coords.longitude,
        };
      });
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setMarkerPosition(state, action) {
      state.markerPosition = action.payload;
    },

    setBounds(state, action) {
      state.bounds = action.payload;
    },
    displayModal(state, action) {
      state.modalIsShown = true;
    },
    hideModal(state, action) {
      state.modalIsShown = false;
    },
    resetState(state, action) {
      state.locationCoords = { lat: 0, lng: 0 };
      state.locationType = "global";
      state.address = null;
      state.markerPosition = { lat: 0, lng: 0 };
      state.bounds = {
        east: 90,
        north: 90,
        south: -90,
        west: -90,
      };
      state.city = null;
      state.modalIsShown = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAddressFromCoords.fulfilled, (state, action) => {
      state.address = action.payload?.address;
      state.city = action.payload?.city;
    });
    builder.addCase(getCoordsFromAddress.fulfilled, (state, action) => {
      if (action.payload) {
        state.locationCoords = action.payload.latLng;
        state.bounds = action.payload.bounds;
      }
    });
    builder.addCase(getBoundsFromAddress.fulfilled, (state, action) => {
      if (action.payload) {
        state.bounds = action.payload;
      }
    });
  },
});

const googleMapActions = googleMapSlice.actions;

const AllTheProviders = ({ children }) => {
  const store = configureStore({
    reducer: {
      googleMap: googleMapSlice.reducer,
    },
  });
  return (
    <React.StrictMode>
      <Provider store={store}>{children}</Provider>
    </React.StrictMode>
  );
};

const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
