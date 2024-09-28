// state management - redux
// store - it needs all reducers

import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    // auth is the name of slice
    // add more slices here for posts - assignment
  },
});

export default store;

 