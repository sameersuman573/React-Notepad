import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  getAuth
} from "firebase/auth";



import {app} from "../firebase"
// import { auth } from "../firebase";
const auth = getAuth(app);
// An auth instances is created 
// The auth importance lies as it contains the data for authetication from configuration file

export const LoginAPI = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    console.log("error in LOGIN");
    return error;
  }
};



export const RegisterAPI = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    return response;
  } 
  catch (error) {
    console.log("error in Register");
    return error;
  }
};



export const LogoutAPI = () => {
  try {
    signOut(auth);
  } catch (error) {
    console.log("error in LOGOUT");
    return error;
  }
};



export const GoogleSignAPI = (email, password) => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth , googleProvider)
  } catch (error) {
    console.log("error in GOOGLESIGNIN");
    return error;
  }
};
