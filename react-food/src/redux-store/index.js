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
      state.totalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      if (existingCartItem) {
        existingCartItem.amount =
          existingCartItem.amount + action.payload.amount;
      } else {
        state.items = state.items.concat(action.payload);
      }
    },
    remove(state, action) {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload
      );
      const existingItem = state.items[existingCartItemIndex];
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.amount === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.amount--;
      }
    },
  },
});
const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    dummy: dummySlice.reducer,
    cart: cartStore.reducer,
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

export default store;
