# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh






<!--
 Install all dependencies
1. Create firebase project and save its data in firebase config
Also take refrence from firebaseconfig file
firebase install
# npm i sass
$ npm install --save react-toastify
import google button - npm install --save react-google-button
import fonts - 
<style>
@import url('https://fonts.googleapis.com/css2?family=Aboreto&display=swap')
</style>

 -->
1. create all pages such as HOME , LOGIN , REGISTER and import all the their component 
first create the basic structure of the pages
then add the function  and usestates

2. make each component 
The register and login component will be very much same 
Then make the Home component 
Along with the CSS
import GoogleButton from "react-google-button";

3. make a authorization for all such pages
import { signInWithEmailAndPassword , createUserWithEmailAndPassword, GoogleAuthProvider,signInWithPopup} from "firebase/auth";

4. make a route for all such pages

5. In the route page
import { createBrowserRouter } from "react-router-dom";
after import all pages whom you wnat to travel

then write function with path and element



In the main page do this 
# routing
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
And where you are creating routes paste this
 
# toast
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

