import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import "./App.css";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Footer, Header } from "./Components";
import { Outlet } from "react-router-dom";





function App() {
  // to get the access of .env file - import.meta.env
  // always ensure after doing this to restart the project
  // while deploying write this vite as we have made our app from vite
  // if app is created using react vite then write ".meta.env.VITE_REACT_APP_APPWRITE_URL"

  //  console.log(import.meta.env.VITE_REACT_APP_APPWRITE_URL);

  //  major work
  // after application is loaded check user is logged in and so he can or cannot see the post
  // we will make a loading state - when fetching the data from application it take time so if data is loaded so we will show data either will show loading

  const [loading, setloading] = useState(true);
  // there will be a state change so we will use a dispatch
  const dispatch = useDispatch();

  // using useeffect ask either user is logged in or not from authservice

  useEffect(() => {
    authService
      // method to get current user in auth file
      .getCurrentUser()
      .then((userdata) => {
        // whenver application will be loaded either it would be loggedin or logout so our state would be always be updated
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      })
      // finally always runs whatever be the situation
      .finally(() => setloading(false));
  }, []);
  // useffect also consist of dependency

  {
    /* conditional rendering */
  }

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>
          {/* It comes from react router dom */}
         TODO: <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;

// const [load, setload] = useState(true)

// const dispatch = useDispatch();
// useEffect(() => {
//   // we have made authservice in the auth file a an object so that it can take values

//   AuthService
//   .getCurrentUser()
//   .then((userdata) => {
//     if(userdata) {
//       dispatch(login(userdata));
//     }
//     else{
//       dispatch(logout())
//     }
//   })
//   .finally(() => setloading(false))
// }, [])

// return !loading ? (
// <div></div>
// )
// : null
