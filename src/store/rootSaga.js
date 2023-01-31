import { all, call } from "redux-saga/effects";
import { categoriesSage } from "../features/category/categorySaga";

export function* rootSaga() {
  yield all([call(categoriesSage)]);
}
