import React from "react";
import "./button.scss";
const Button = ({
  children,
  buttonType,
  isLoading = false,
  payment = "",
  ...otherProps
}) => {
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
      disabled={isLoading}
      className={`button-container ${BUTTON_TYPE_CLASSES[buttonType] ?? ""} ${payment}`}
      {...otherProps}
    >
      {isLoading ? <div className="loading" /> : children}
    </button>
  );
};

export default Button;
