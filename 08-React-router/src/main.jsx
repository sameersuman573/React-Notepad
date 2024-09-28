import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// It is a react third party library

// very Important Import
// Importing all routes method
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";


// Import all pages
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import User from "./Components/User/User.jsx";
import Github, { githubinfoloader } from "./Components/Github/Github.jsx";






// const router = createBrowserRouter([{},{}])

// very important method - to  create browser router

// const router = createBrowserRouter([
//   {
//     // adding props
//     path: '/',
//     element: <Layout/>,
//     children: [

//       {
//         // on slash displaying home element
//         path: "",
//         // element that will be rendered
//         element: <Home/>
//       },

//       {
//         path: "about",
//         element: <About/>
//       },

//       {
//         path: "contact",
//         element: <Contact/>
//       }

//     ]
//   }
// ])








// Another IMPORTANT Method - TO CREATE BROWSER ROUTER

// important imports
//   Route,
//   RouterProvider,
//   createBrowserRouter,
//   createRoutesFromElements

const router = createBrowserRouter(
  createRoutesFromElements(

    //  we have not passed here header and footer because it is passed in layout components
    <Route path="/" element={<Layout />} >

    {/* All routes will be under layout */}


      <Route path="" element={<Home/>} />
      <Route path="about" element={<About />} />
      {/* to make inner routing  it is possible just embeed it as we have embeeded other path inside layouts*/}
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
       <Route
        loader={githubinfoloader}
        path="github"
        element={<Github/>}/>

       
       
        </Route>

       

   
  )
);



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
