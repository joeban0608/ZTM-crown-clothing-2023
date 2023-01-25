import React, { useState } from "react";
import {
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignInForm.scss";

const SignInForm = () => {
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log("formField", formFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    const onChangeForm = {};
    onChangeForm[name] = value;
    setFormFields({ ...formFields, ...onChangeForm });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signInAuthUserWithEmailAndPassword(email, password);
      const { user } = res;
      resetFormFields();
    } catch (e) {
      switch (e.code) {
        case "auth/wrong-password":
        case "auth/user-not-found":
          alert("incorrect password or email");
          break;
        default:
          console.log("error", e);
      }
      console.log("user sign in email and password has an error", e);
    }
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelName={"Email"}
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></FormInput>
        <FormInput
          labelName={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></FormInput>
        <div className="signIn-button-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signInWithGoogle} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
