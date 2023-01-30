import { applyMiddleware, compose, createStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import { rootReducer } from "./rootReducer";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

/*
  透過 redux-persist 存入 localStorage 
  blacklist  將你不想存入 local 的 rootReducer/reducer 寫入
  這邊 black user 是因為, Auth 是透過監聽 firebase 去做改變, 不需要將 user 存入 local storage 
*/
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

const composedEnhancers = compose(applyMiddleware(...middlewares));

// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);
