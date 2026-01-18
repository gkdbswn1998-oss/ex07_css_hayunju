import { configureStore } from "@reduxjs/toolkit";
import inputSlice from "./inputSlice";
import authSlice from "./authSlice";
import memberDataSlice from "./memberDataSlice";

export const store = configureStore({
  reducer: {
    input: inputSlice,
    auth: authSlice,
    member: memberDataSlice,
  }
});