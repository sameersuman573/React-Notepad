import { configureStore } from "@reduxjs/toolkit";
import Authslice from "./Authslice";
import Todoslice from "./Todoslice";
import SearchSlice from "./SearchSlice";

const store = configureStore({
  reducer: {
    auth: Authslice,
    Todo: Todoslice,
    Search: SearchSlice,
  },
});

export default store;
