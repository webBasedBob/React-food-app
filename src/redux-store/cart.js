import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const cartStore = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalAmount: 0,
  },
  reducers: {
    add(state, action) {
      const newMealCartDuplicate = state.items.find((item) => {
        return (
          JSON.stringify({ ...item, amount: 0, key: 0, finalPrice: 0 }) ===
          JSON.stringify({
            ...action.payload,
            amount: 0,
            key: 0,
            finalPrice: 0,
          })
        );
      });
      const targetMealInCart = state.items.find((item) => {
        return item.id === action.payload.id;
      });
      if (newMealCartDuplicate) {
        newMealCartDuplicate.amount += action.payload.amount;
        newMealCartDuplicate.finalPrice += action.payload.finalPrice;
      } else if (targetMealInCart) {
        state.items.push({
          ...action.payload,
          key: action.payload.key + Math.random().toFixed(3) * 100,
        });
      } else {
        state.items.push(action.payload);
      }
      state.totalAmount = Number(
        (state.totalAmount + action.payload.finalPrice).toFixed(2)
      );
    },
    updateAmount(state, action) {
      let targetItem = state.items.find((item) => {
        return item.key === action.payload.key;
      });
      if (action.payload.operation === "increase") {
        targetItem.amount++;
      } else {
        targetItem.amount--;
      }
      if (targetItem.amount === 0) {
        state.items = state.items.filter((item) => {
          return item.key !== action.payload.key;
        });
      }
      let updatedPrice = targetItem.price;
      for (let key in targetItem.ingredients) {
        if (targetItem.ingredients[key].quantity === 2) {
          updatedPrice += targetItem.ingredients[key].price;
        }
      }
      const difference = Number(
        (updatedPrice * targetItem.amount - targetItem.finalPrice).toFixed(2)
      );
      targetItem.finalPrice = updatedPrice * targetItem.amount;
      state.totalAmount = Number((state.totalAmount + difference).toFixed(2));
    },
    delete(state, action) {
      const priceDifference = state.items.find((item) => {
        return item.key === action.payload;
      }).finalPrice;
      state.totalAmount = Number(
        (state.totalAmount - priceDifference).toFixed(2)
      );
      state.items = state.items.filter((item) => {
        return item.key !== action.payload;
      });
    },
    resetState(state, action) {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const cartActions = cartStore.actions;
