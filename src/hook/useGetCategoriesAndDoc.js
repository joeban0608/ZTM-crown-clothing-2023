import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategoriesAndDocAsync } from "../features/shopSlice";

const useGetCategoriesAndDoc = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getCategoriesAndDocAsync(dispatch);
  }, []);
}
export default useGetCategoriesAndDoc