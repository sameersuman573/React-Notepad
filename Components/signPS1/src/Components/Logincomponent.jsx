import React from "react";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { LoginAPI, GoogleSignAPI } from "../Api/Authorization ";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function Logincomponent() {
  const [Credentails, setCredentials] = useState({});
  let navigate = useNavigate();

  // write any important function in try and catch block
  const login = async () => {
    try {
      let response = await LoginAPI(Credentails.email, Credentails.password);
      // way to write toast
      toast.success("You are logged in");
    } catch (error) {
      console.log(error);
      toast.error("unable to sign in now");
    }
  };

  // sign in using Google email directly from your computer log
  const googleSignIn = () => {
    let response = GoogleSignAPI();
    console.log(response);
  };

  return (
    <div className=" login-wrapper">
      {/* <img className="" src={}  /> */}

      <div className="login-wrapper-inner">
        <h1 className="heading">SIgn In</h1>
        <p className="sub-heading">Stay Upadted On your professional world</p>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...Credentails, email: event.target.value })
            }
            type="email"
            className="common-input"
            placeholder="Email or phone"
          />

          <input
            onChange={(event) =>
              setCredentials({ ...Credentails, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password"
          />
        </div>

        <button className="login-btn" onClick={login}>
          Sign In
        </button>
      </div>

      <hr className="hr-text" data-content="or"></hr>

      <div className="google-btn-container">
        <GoogleButton className="google-btn" onClick={googleSignIn} />
      </div>

      <div className="go-to-signup">
        <p>
          New To Linkedin{" "}
          <span className="join-now" onClick={() => navigate("/register")}>
           ?... Join Now 
          </span>
        </p>
      </div>
    </div>
  );
}
