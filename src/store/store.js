import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import shopReducer from "../features/shopSlice";
import logger from "redux-logger";

export const store = configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});
