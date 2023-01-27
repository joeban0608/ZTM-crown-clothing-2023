import { Route, Routes } from "react-router-dom";
import Authentication from "./routes/Authentication/Authentication";
import Checkout from "./routes/Checkout/Checkout";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";
// import { ONCE_SHOP_DATA } from "./config/onceShopData";
// import { addCollectionAndDoc } from "./utils/firebase/firebase";
// import { useEffect } from "react";

const App = () => {
  /*  
  一次性存入資料進 firebase
  useEffect(() => {
      addCollectionAndDoc("categories", ONCE_SHOP_DATA);
    }, []); 
  */

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
