import { combineReducers } from "redux";
import userReducer from "../features/userSlice";
import cartReducer from "../features/cartSlice";
import categoryReducer from "../features/category/categorySlice";
export const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  category: categoryReducer,
});
