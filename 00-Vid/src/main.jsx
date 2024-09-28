import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import ColorMode from "./Components/ColorMode/ColorMode.jsx"

// Import the Routing Functionalities
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Routes,
} from "react-router-dom";

// Import All pages which you want to Route
import Layout from "./Layout.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contactus from "./Components/Contactus/Contactus.jsx";
import Github, { githubinfoloader } from "./Components//Github/Github.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Workspace from "./Components/Workspace/Workspace.jsx";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import ToggleColorMode from "./Components/ColorMode/ColorMode.jsx"; // Import the ColorMode component

const router = createBrowserRouter(
  createRoutesFromElements(
    // <Routes>
    
    <Route path="/" element={<Layout />}>
      {/* All things are rendered under Layout */}
      <Route index element={<Login />} /> Set the default route to Login page
      <Route path="/Home" element={<Home />} />
      <Route path="/Contact" element={<Contactus />} />
      <Route path="/About" element={<About />} />
      {/* <Route path="/Github" loader={githubinfoloader} element={<Github/>} /> */}
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Workspace" element={<Workspace/>} />
    </Route>
    // </Routes>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* <App /> */}
    <Provider store={store}>
      <RouterProvider router={router} >
      <Header/>
        <ToggleColorMode/>
      </RouterProvider>
    </Provider>
    <ToastContainer />
  </>
);
