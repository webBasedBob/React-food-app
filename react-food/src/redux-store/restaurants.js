import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    restaurants: [],
    modalIsVisible: false,
  },
  reducers: {
    storeRestaurants(state, action) {
      state.restaurants = action.payload;
    },
    hideModal(state, action) {
      state.modalIsVisible = false;
    },
    showModal(state, action) {
      state.modalIsVisible = true;
    },
  },
});

export const getRestaurants = createAsyncThunk(
  "restaurants/getRestaurants",
  async (latLng, mapObj, mapState) => {
    const location = new window.google.maps.LatLng(latLng);
    const request = {
      query: "shawarma",
      openNow: true,
      location: location,
      radius: 500,
    };
    console.log(window.google.maps);
    let result;
    const callback = (results, status) => {
      let filteredResults = results.filter((address) => {
        return address.formatted_address.includes(mapState.city);
      });
      result = filteredResults;
    };
    let service = new window.google.maps.places.PlacesService(mapObj);
    service.textSearch(request, callback);
    return result;
  }
);

export const restaurantsActions = restaurantsSlice.actions;
