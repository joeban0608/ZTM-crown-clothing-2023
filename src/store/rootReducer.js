import { combineReducers } from "redux";
import userReducer from "../features/userSlice";
import shopReducer from "../features/shopSlice";
export const rootReducer = combineReducers({
  user: userReducer,
  shop: shopReducer,
})