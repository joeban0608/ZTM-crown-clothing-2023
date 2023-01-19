import React from "react";
import "./button.scss";
const Button = ({ children, buttonType, ...otherProps }) => {
  /* 
  default
  inverted
  google sign in
  */
  const BUTTON_TYPE_CLASSES = {
    google: "google-sign-in",
    inverted: "inverted",
  };
  return (
    <button
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType] ?? ""}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
