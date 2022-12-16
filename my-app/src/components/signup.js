import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";
import '../css/signin.css'

const Signup = () => {
  let navigate = useNavigate();
  const emailRef = useRef();
  const nameRef = useRef();
  const psdRef = useRef();
  const { registerUser } = useUserContext();

  const onSubmit = (e) => {
    const email = emailRef.current.value;
    const name = nameRef.current.value;
    const password = psdRef.current.value;
    if (email && password && name) registerUser(email, password, name);
    navigate("/")
  };

  return (
    <div className="signin_section">
      <h2 className="signin_section_label"> New User</h2>
      <form className="signin_section_form" onSubmit={onSubmit}>
        <input className="signin_section_input" placeholder="Email" type="email" ref={emailRef} />
        <input className="signin_section_input" placeholder="Name" type="name" ref={nameRef} />
        <input className="signin_section_input" placeholder="Password" type="password" ref={psdRef} />
        <button className="signin_section_submit" type="submit">Register</button>
      </form>
    </div>
  );
};

export default Signup;