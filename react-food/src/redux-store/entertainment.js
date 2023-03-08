import {
  createSlice,
  createReducer,
  configureStore,
  createAsyncThunk,
} from "@reduxjs/toolkit";

export const entertainmentSlice = createSlice({
  name: "entertainment",
  initialState: {},
  reducers: {},
});

export const entertainmentActions = entertainmentSlice.actions;
