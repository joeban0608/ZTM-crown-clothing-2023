import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/Navigation/Navigation";
import Shop from "./routes/Shop/Shop";
import SignIn from "./routes/SignIn/SignIn";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
