import { configureStore } from "@reduxjs/toolkit";
import {charactersSlice} from "./characters-slice";

const store = configureStore({
  reducer: {
    characters: charactersSlice.reducer,
  },
});

export default store;
