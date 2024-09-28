import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/Store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";



// Importing all pages
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx"
import Signup from "./Pages/Signup.jsx";
import Addpost from "./Pages/Addpost.jsx";
import Allpost from "./Pages/Allpost.jsx";
import Editpost from "./Pages/Editpost.jsx";
import { Authlayout } from "./Components/index.js";
// import Post from "./Pages/";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: (
          <Authlayout authentication={false}>
            <Login />
          </Authlayout>
        ),
      },

      {
        path: "/signup",
        element: (
          <Authlayout authentication={false}>
            <Signup />
          </Authlayout>
        ),
      },

      {
        path: "/all-posts",
        element: (
          <Authlayout>
            <Allpost />
          </Authlayout>
        ),
      },

      {
        path: "/add-post",
        element: (
          <Authlayout>
            <Addpost />
          </Authlayout>
        ),
      },

      {
        path: "/editpost/:slug",
        element: (
          <Authlayout>
            <Editpost />
          </Authlayout>
        ),
      },

      // {
      //   path: "/post/:slug",
      //   element:<Post/>
      // }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
