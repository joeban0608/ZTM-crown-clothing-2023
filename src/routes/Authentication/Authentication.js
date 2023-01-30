import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SignInForm from "../../component/SignInForm/SignInForm";
import SignUpForm from "../../component/SignUpForm.js/SignUpForm";
import "./authentication.scss";

const Authentication = () => {
  
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
