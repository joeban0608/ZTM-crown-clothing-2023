import { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { getCategoriesAndDocThunk } from "../features/category/categorySlice";
import { fetchCategoriesStart } from "../features/category/categorySlice";

const useGetCategoriesAndDoc = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getCategoriesAndDocThunk());
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
};
export default useGetCategoriesAndDoc;
