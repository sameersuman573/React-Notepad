import React from "react";
import "./LoginSignup.css";
import { useState } from "react";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {

const [action, setaction] = useState("Sign Up")

  return (
    <div className="container">

      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>

        <div className="inputs">
        {action==="login"? <div>

        <div className="inputs">
          <div className="input">
            <img src={email_icon} alt=""></img>
            <input type="email" placeholder="Email-Id"></input>
          </div>
        </div>

        </div> : 
          

        

        <div className="inputs">
          <div className="input">
            <img src={password_icon} alt=""></img>
            <input type="password" placeholder="PassWord"></input>
          </div>
        </div>
      </div>

        {action==="Sign Up"?<div></div>}

<div className="forgot-password">Lost password <span>click here</span></div>
<div className="submit-container">
    <div className={action==="login"? "submit gray" : "submit"}onClick={() => {setaction("Sign Up")}}>Sign-Up</div>
    <div className={action==="signup"? "submit gray" : "submit"}onClick={() => {setaction("Login")}}>Login</div>
</div>

    </div>
  );
};

export default LoginSignup;
