import React from "react";
import { useState } from "react";
import { RegisterAPI } from "../Api/Authorization ";
import { useNavigate } from "react-router-dom";
import "../Sass/LoginComponent.scss";
import { toast } from "react-toastify";

export default function Registercomponent() {
  // credentials will be used to sigup function for the newly registerd users
  const [Credentails, setCredentials] = useState({});
  let navigate = useNavigate();

const register =  async () => {
  try {
    let res = await RegisterAPI(Credentails.email,Credentails.password)
    toast.success("Account Created!")
    navigate("/home")

  } catch (error) {
    console.log(error);
    toast.error("Cannot Create your Account")
  }
}
  // write any important function in try and catch block
   

  return (
    <div className=" login-wrapper">
      {/* <img className="" src={}  /> */}

      <div className="login-wrapper-inner">
        <h1 className="heading">Make the most of your professional life</h1>

        <div className="auth-inputs">
          <input
            onChange={(event) =>
              setCredentials({ ...Credentails, name: event.target.value })
            }
            type="name"
            className="common-input"
            placeholder="Your Name"
          />

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

        <button className="login-btn" onClick={register}>
        Agree & Join
         </button>
      </div>

      <hr className="hr-text" data-content="or"></hr>

      <div className="google-btn-container">
        <p className="go-to-signup">
          Already on LinkedIn{" "}
          <span className="join-now" onClick={() => navigate("/login")}>
          Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
