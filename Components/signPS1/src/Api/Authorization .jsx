import React from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

export default function Authorization() {
  const LoginAPI = () => {
    try {
      let response = signInWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      return error;
    }
  };

  const RegisterAPI = () => {
    try {
      let response = createUserWithEmailAndPassword(auth, email, password);
      return response;
    } catch (error) {
      return error;
    }
  };

  const GoogleSignAPI = () => {
    try {
      let googleprovider = new GoogleAuthProvider();
      let response = signInWithPopup(auth, googleprovider);
    } catch (error) {
      return error;
    }
  };
}
