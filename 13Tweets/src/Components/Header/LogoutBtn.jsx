import React from "react";
import { logout } from "../../Store/authSlice";
import { useDispatch } from "react-redux";
import { AuthService } from "../../Appwrite/auth";

function LogoutBtn() {
  const dispatch = useDispatch();

  // Logout function
  logoutHandler = () => {
    AuthService.logout().then(() => {
      dispatch(logout());
    });
  };

  return ( 
  <button onClick={logoutHandler}>Logout</button>
)
}

export default LogoutBtn;
