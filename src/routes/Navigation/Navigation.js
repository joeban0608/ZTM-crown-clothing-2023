import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../component/CartDropdown/CartDropdown";
import CartIcon from "../../component/CartIcon/CartIcon";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

const Navigation = () => {
  /*
    <Fragment></Fragment> === <></> 
   */
  const { currentUser } = useSelector((state) => state.user);
  const { isCartOpen } = useSelector((state) => state.shop);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
