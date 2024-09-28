import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


// Import all pages or components which you want to navigate
import Home from './Pages/Home.jsx'
import { Authlayout, Login } from "./Components/index.js";
 import Signup from './Pages/Signup.jsx'
import Addpost from './Pages/Addpost.jsx'
import Editpost from './Pages/Editpost.jsx'
import Post from "./Pages/Post.jsx"
import AllPosts from './Pages/Allposts.jsx'



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
                <Authlayout authentication>
                    {" "}
                    <AllPosts />
                </Authlayout>
            ),
        },

        {
            path: "/add-post",
            element: (
                <Authlayout authentication>
                    {" "}
                    <Addpost />
                </Authlayout>
            ),
        },

        {
            path: "/edit-post/:slug",
            element: (
                <Authlayout authentication>
                    {" "}
                    <Editpost />
                </Authlayout>
            ),
        },

        {
            path: "/post/:slug",
            element: <Post />,
        },

    ],
},
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
