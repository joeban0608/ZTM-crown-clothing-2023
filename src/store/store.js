import {
  applyMiddleware,
  compose,
  createStore,
} from "@reduxjs/toolkit";

import logger from "redux-logger";
import { rootReducer } from "./rootReducer";

const middlewares = [logger];
const composedEnhancers = compose(applyMiddleware(...middlewares));
export const store = createStore(rootReducer, undefined, composedEnhancers);
/* configureStore({
  reducer: {
    user: userReducer,
    shop: shopReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }).concat(logger),
});
 */
