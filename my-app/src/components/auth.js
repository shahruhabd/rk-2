import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";
import '../css/signin.css'

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
      <div>
        {!index ? <Signin /> : <Signup />}
        <p className="help" onClick={toggleIndex}>
          {!index ? "New user? Click here " : "Already have an acount?"}
        </p>
      </div>
  );
};

export default Auth;