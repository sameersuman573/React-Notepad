import React, { useState } from "react";
import LoginComponent from "../Components/LoginComponent";
import { LoginAPI } from "../API/AuthApi";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import Loader from "../Components/Common/Loader/loader";

export default function Login() {
  const [loading, setloading] = useState(true);
  let navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/home");
      } else {
        setloading(false);
      }
    });
  }, []);

  return loading ? <Loader /> : <LoginComponent />;
}
