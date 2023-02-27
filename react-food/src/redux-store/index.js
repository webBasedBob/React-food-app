import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
import { FIREBASE } from "../CONFIG";
import { createSlice, createReducer, configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const auth = getAuth(FIREBASE);

const authSlice = createSlice({
  name: "auth",
  initialState: { loggedIn: false, user: null, displayAuthModal: false },
  reducers: {
    logIn(state, action) {
      state.loggedIn = true;
      state.user = action.payload;
    },
    signIn(state, action) {
      state.loggedIn = true;
      state.user = action.payload;
    },
    logOut(state, action) {
      state.loggedIn = false;
      state.user = null;
    },
    displayModal(state, action) {
      state.displayAuthModal = true;
    },
    hideModal(state, action) {
      state.displayAuthModal = false;
    },
  },
});
const dummySlice = createSlice({
  name: "dummy",
  initialState: { loggedIn: false, user: null, displayAuthModal: false },
  reducers: {
    cacat() {
      console.log("si pisat");
    },
  },
});

const cartStore = createSlice({
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
  },
});

const mealsSlice = createSlice({
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

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dummy: dummySlice.reducer,
    cart: cartStore.reducer,
    meals: mealsSlice.reducer,
  },
});

export const logInAction = (userCredentials) => {
  return async (dispatch) => {
    const logIn = async (email, password) => {
      return await signInWithEmailAndPassword(auth, email, password);
    };
    try {
      await logIn(userCredentials.email, userCredentials.password);
      dispatch(authSlice.actions.logIn(userCredentials.email));
    } catch (error) {
      console.log(error);
    }
  };
};

export const signUpAction = (userCredentials) => {
  return async (dispatch) => {
    const signUp = async (email, password) => {
      return await createUserWithEmailAndPassword(auth, email, password);
    };
    try {
      await signUp(userCredentials.email, userCredentials.password);
      dispatch(authSlice.actions.signIn(userCredentials.email));
    } catch (error) {
      console.log(error);
    }
  };
};
export const authActions = authSlice.actions;
export const cartActions = cartStore.actions;
export const mealsActions = mealsSlice.actions;
export default store;
