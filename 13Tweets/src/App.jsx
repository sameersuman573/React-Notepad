import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
// import Header from "./Components/Header/Header";
// import Footer from "./Components/Footer/Footer";
import { login, logout } from "./Store/authSlice";
import { useDispatch } from "react-redux";
// import { Outlet } from "react-router-dom";
 import { AuthService } from "./Appwrite/auth";
function App() {
  console.log(import.meta.env.REACT_APP_APPWRITE_URL);

  const [loading, setloading] = useState(true);
  const dispatch = useDispatch();

  // Now we will call useffect hook it will authenticate whether our user is signed in or not whne the main page loads
  useEffect(() => {
    // Now we have made the Authservice Object so we will use it to acces the diffrent services provided for user Authentication
    // call a service to get currentuser
    AuthService.getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      })

      .finally(() => setloading(false));
  }, []);

   return !loading ? (
    <div>
      <div>
          {/* <Header />
        <main>
        <Outlet />
        </main>
        <Footer /> */}
      </div>
    </div>
  ) : null;
}

export default App;
