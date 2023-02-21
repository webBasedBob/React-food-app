// import redux, { createStore } from "redux";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut,
//   sendPasswordResetEmail,
//   onAuthStateChanged,
// } from "firebase/auth";

// // const createAccount = async (email, password) => {
// //   try {
// //     let response = await createUserWithEmailAndPassword(auth, email, password);
// //     return response;
// //   } catch (error) {
// //     console.log(error);
// //   }
// // };
// // const firebaseConfig = {
// //   apiKey: "AIzaSyB4tPxU7HnHpD442PVCTvSrgQkMKjtnGFU",
// //   authDomain: "react-course-proje.firebaseapp.com",
// //   databaseURL:
// //     "https://react-course-proje-default-rtdb.europe-west1.firebasedatabase.app",
// //   projectId: "react-course-proje",
// //   storageBucket: "react-course-proje.appspot.com",
// //   messagingSenderId: "242113916631",
// //   appId: "1:242113916631:web:5a9673219112ba76898a92",
// //   measurementId: "G-XLN5B05X9C",
// // };

// // const app = initializeApp(firebaseConfig);
// // const auth = getAuth(app);

// // The reducers must be pure fumctons - no side effects
// //for side effects, like the one we have here, we need to use a middleware.
// const authReducer = (
//   state = { loggedIn: false, user: null, displayAuthModal: false },
//   action
// ) => {
//   if (action.type === "log-in") {
//     let prevState = structuredClone(state);
//     prevState.user = action.userCredentials.email;
//     console.log(prevState);
//     return prevState;
//   }
//   if (action.type === "sign-in") {
//     let prevState = structuredClone(state);
//     prevState.user = "dummy@email";
//     console.log(prevState);
//     return prevState;
//     // // console.log(prevState);
//     // createAccount(
//     //   action.userCredentials.email,
//     //   action.userCredentials.password
//     // ).then((response) => {
//     //   console.log(response.user.email);
//     //   prevState.user = response.user.email;
//     //   console.log(prevState);
//     //   return prevState;
//     //   // return { user: response.user.email };
//     // });
//   }
//   if (action.type === "display-auth-modal") {
//     console.log(action.type);
//     return { ...state, displayAuthModal: true };
//   }
//   if (action.type === "close-auth-modal") {
//     console.log(action.type);
//     return { ...state, displayAuthModal: false };
//   }

//   return state;
// };

// const store = createStore(authReducer);
// export default store;

import redux, { createStore } from "redux";
import { createSlice, createReducer, configureStore } from "@reduxjs/toolkit";
const authSlice = createSlice({
  name: "auth",
  initialState: { loggedIn: false, user: null, displayAuthModal: false },
  reducers: {
    logIn(state, action) {
      state.loggedIn = true;
      state.user = action.payload.email;
    },
    signIn(state, action) {
      state.loggedIn = true;
      state.user = action.payload.email;
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

export const authActions = authSlice.actions;
export const cartActions = cartStore.actions;

export default store;
