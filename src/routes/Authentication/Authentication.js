import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SignInForm from "../../component/SignInForm/SignInForm";
import SignUpForm from "../../component/SignUpForm.js/SignUpForm";
import { setCurrentUser } from "../../features/userSlice";
import { createUserDocFromAuth, onAuthStateChangedListener } from "../../utils/firebase/firebase";
import "./authentication.scss";
const Authentication = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unSubscribe = onAuthStateChangedListener((user) => {
      console.log("user", user);
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unSubscribe;
  }, []);

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
