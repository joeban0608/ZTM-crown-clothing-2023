import { Route, Routes } from "react-router-dom";
import useGetCategoriesAndDoc from "../../hook/useGetCategoriesAndDoc";
import CategoriesPreview from "./CategoriesPreview/CategoriesPreview";
import Category from "./Category/Category";
import "./shop.scss";

const Shop = () => {
  useGetCategoriesAndDoc();

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
