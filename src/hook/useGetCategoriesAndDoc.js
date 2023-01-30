import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getCategoriesAndDocThunk,
} from "../features/shopSlice";

const useGetCategoriesAndDoc = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategoriesAndDocThunk());
    // getCategoriesAndDocAsync(dispatch);
  }, [dispatch]);
};
export default useGetCategoriesAndDoc;
