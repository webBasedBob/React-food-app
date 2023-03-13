import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const checkoutSlice = createSlice({
  name: "cart",
  initialState: {
    checkoutModalIsVisible: false,
  },
  reducers: {
    displayModal(state, action) {
      state.checkoutModalIsVisible = true;
    },
    hideModal(state, action) {
      state.checkoutModalIsVisible = false;
    },
    resetState(state, action) {
      state.checkoutModalIsVisible = false;
    },
    setFinalOrder(state, action) {
      state.finalOrder = action.payload;
    },
  },
});
export const checkoutActions = checkoutSlice.actions;
