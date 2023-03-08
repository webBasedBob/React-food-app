import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { authSlice } from "./auth";
import { cartStore } from "./cart";
import { checkoutSlice } from "./checkout";
import { mealsSlice } from "./meals";
import { entertainmentSlice } from "./entertainment";
import { googleMapSlice } from "./googleMap";
import { restaurantsSlice } from "./restaurants";
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    cart: cartStore.reducer,
    meals: mealsSlice.reducer,
    checkout: checkoutSlice.reducer,
    entertainment: entertainmentSlice.reducer,
    googleMap: googleMapSlice.reducer,
    restaurants: restaurantsSlice.reducer,
  },
});

export default store;
