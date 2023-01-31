import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesAndDocAsync } from "../../utils/firebase/firebase";

// export const getCategoriesAndDocThunk = createAsyncThunk(
//   "category/fetchCategories",
//   async () => {
//     return await getCategoriesAndDocAsync("categories");
//   }
// );

const initialState = {
  categoriesTable: {},
  isLoading: false,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    // action
    fetchCategoriesStart: (state) => {
      return {
        ...state,
        isLoading: true,
      };
    },
    fetchCategoriesSuccess: (state, action) => {
      return {
        ...state,
        categoriesTable: action.payload,
        isLoading: false,
      };
    },
    fetchCategoriesFailed: (state, action) => {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    },
  },
  // extraReducers: {
  //   [getCategoriesAndDocThunk.pending]: (state) => {
  //     state.isLoading = true;
  //   },
  //   [getCategoriesAndDocThunk.fulfilled]: (state, { payload }) => {
  //     console.log("payload", payload);
  //     state.isLoading = false;
  //     state.categoriesTable = payload;
  //   },
  //   [getCategoriesAndDocThunk.rejected]: (state) => {
  //     state.isLoading = false;
  //     state.categoriesTable = {};
  //   },
  // },
});

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

// Action creators are generated for each case reducer function
export const {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailed,
} = categorySlice.actions;

export default categorySlice.reducer;
