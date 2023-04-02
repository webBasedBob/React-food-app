import { FIREBASE } from "../CONFIG";
import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged,
} from "firebase/auth";
const auth = getAuth(FIREBASE);
export const authSlice = createSlice({
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
