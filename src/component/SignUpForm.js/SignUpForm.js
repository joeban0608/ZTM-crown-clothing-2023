import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../features/userSlice";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    conformPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  // console.log("formField", formFields);
  const { displayName, email, password, conformPassword } = formFields;
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
    if (password !== conformPassword) {
      alert("password not match");
      return;
    }
    try {
      const res = await createAuthUserWithEmailAndPassword(email, password);
      const { user } = res;
      dispatch(setCurrentUser(user));

      // createUserDocFromAuth = async (userAuth, additionalInfo = {})
      await createUserDocFromAuth(user, { displayName });
      resetFormFields();
    } catch (e) {
      if (e.code === "auth/email-already-in-use") {
        alert(`Can't create user, e-mail had already in use`);
      }
      console.log("user create with email and password has an error", e);
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          labelName={"Display Name"}
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></FormInput>
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
        <FormInput
          labelName={"Conform Password"}
          type="Conform Password"
          required
          onChange={handleChange}
          name="conformPassword"
          value={conformPassword}
        ></FormInput>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
