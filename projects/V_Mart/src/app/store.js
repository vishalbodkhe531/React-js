import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./data/userSlice";

export const store = configureStore({
  reducer: { Cart: userReducers },
});
