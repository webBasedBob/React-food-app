import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const mealsSlice = createSlice({
  name: "meals",
  initialState: {
    meals: [],
    currentMeal: {},
    expandedMealIsShown: false,
    sauces: [
      "mayo",
      "garlic sauce",
      "spicy sauce",
      "remoulade",
      "tzatiki",
      "mexican",
      "arabic",
      "ketchup",
    ],
  },
  reducers: {
    setMeals(state, action) {
      state.meals = action.payload;
    },
    setCurrentMeal(state, action) {
      const targetMeal = {
        ...state.meals.find((meal) => meal.id === action.payload),
      };
      targetMeal.sauces = [];
      let transformedIngredients = {};
      for (let key in targetMeal.ingredients) {
        transformedIngredients[targetMeal.ingredients[key]] = {
          quantity: 1,
          price: 0.99,
        };
      }
      targetMeal.amount = 1;
      targetMeal.ingredients = transformedIngredients;
      targetMeal.finalPrice = targetMeal.price;
      targetMeal.key = targetMeal.id;
      state.currentMeal = targetMeal;
      state.expandedMealIsShown = true;
    },
    hideExpandedMeal(state, action) {
      state.expandedMealIsShown = false;
    },
    addSauce(state, action) {
      state.currentMeal.sauces = [...state.currentMeal.sauces, action.payload];
    },
    removeSauce(state, action) {
      const filteredSauces = state.currentMeal.sauces.filter((sauce) => {
        return sauce !== action.payload;
      });
      state.currentMeal.sauces = [...filteredSauces];
    },
    updateIngredient(state, action) {
      const updatedAmount =
        action.payload.amount < 0
          ? 0
          : action.payload.amount > 2
          ? 2
          : action.payload.amount;
      state.currentMeal.ingredients[action.payload.ingredient].quantity =
        updatedAmount;
    },
    updateFinalPrice(state, action) {
      let updatedPrice = state.currentMeal.price;
      for (let key in state.currentMeal.ingredients) {
        if (state.currentMeal.ingredients[key].quantity === 2) {
          updatedPrice += state.currentMeal.ingredients[key].price;
        }
      }
      state.currentMeal.finalPrice = updatedPrice * state.currentMeal.amount;
    },
    updateAmount(state, action) {
      state.currentMeal.amount = Math.max(action.payload, 1);
    },
  },
});

export const mealsActions = mealsSlice.actions;
