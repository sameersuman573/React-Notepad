import React, { useState, useContext } from "react";
import UserContext from "../Context/UserContext";

// do refer to usercontext provider
// To fetch values from the Usercontext we use usecontext


function Login() {
  // to change or write username or password
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");



  // this is how we send the data when we write something as it is setting username -password
  // to fetch the value inside usercontext -- usecontext will help us
  // in user context-- we have created a context
  const { setuser } = useContext(UserContext);
  const handlesubmit = (e) => {
    // by default when you submit then value goes somewhre by url so we use default
    e.preventDefault()
    setuser({username,password})
  }



  // the way of getting the data is written in profile



  return (
    <div>
      <h2>Login</h2>

      <input type="text"
        // to control the usestate value
        value={username}
        onChange={(e) => setusername(e.target.value)}
        placeholder="username" />
        {"  "}



      {/* // to control the usestate value */}
      <input
        type="text"
        value={password}
        onChange={(e) => setpassword(e.target.value)}
        placeholder="password"
      />

      <button onClick={handlesubmit}>submit</button>
    </div>

  );
}

export default Login;
