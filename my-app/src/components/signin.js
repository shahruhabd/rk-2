import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../css/signin.css'

const Signin = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    // e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    navigate('/')

    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="signin_countainer">
      <h2> Login </h2>
      <form className="form_signin_" onSubmit={onSubmit}>
        <input placeholder="Email" type="email" ref={emailRef} />
        <input placeholder="Password" type="password" ref={psdRef} />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default Signin;