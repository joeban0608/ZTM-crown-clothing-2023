import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocAsync } from "../../utils/firebase/firebase";
import {
  fetchCategoriesFailed,
  fetchCategoriesStart,
  fetchCategoriesSuccess,
} from "./categorySlice";

// export const fetchCategoriesAsync = () => async (dispatch) => {
//   dispatch(fetchCategoriesStart());
//   try {
//     const categoriesTable = await getCategoriesAndDocAsync("categories");
//     dispatch(fetchCategoriesSuccess(categoriesTable));
//   } catch (e) {
//     dispatch(fetchCategoriesFailed(e));
//     console.log("e", e);
//   }
// };

export function* fetchCategories() {
  try {
    const categoriesTable = yield call(getCategoriesAndDocAsync, "categories");
    yield put(fetchCategoriesSuccess(categoriesTable));
  } catch (e) {
    console.log("fetchCategories error: ", e);
    yield put(fetchCategoriesFailed(e));
  }
}

export function* onFetchCategories() {
  yield takeLatest(fetchCategoriesStart, fetchCategories);
}

export function* categoriesSage() {
  yield all([call(onFetchCategories)]);
}
