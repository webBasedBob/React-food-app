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
    remainingTime: 20 * 60,
    deliveryStep: [],
    oneSecondInMiliseconds: 1000,
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
    decreaseRemainigTime(state, action) {
      switch (String(state.remainingTime)) {
        case "1100":
          state.deliveryStep.push("order received");
          break;
        case "750":
          state.deliveryStep.push("order finished");
          break;
        case "350":
          state.deliveryStep.push("order in delivery");
          break;
        case "1":
          state.deliveryStep.push("order delivered");
          break;
      }
      state.remainingTime =
        state.remainingTime - 1 > 0 ? state.remainingTime - 1 : 0;
    },
    speedUpTime(state, action) {
      state.oneSecondInMiliseconds = 10;
    },
  },
});
export const checkoutActions = checkoutSlice.actions;
