// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getStorage} from "firebase/storage"
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXZbhFohkZ4CzgevfZsyW3za0DzPS432A",
  authDomain: "filesupload-37be1.firebaseapp.com",
  projectId: "filesupload-37be1",
  storageBucket: "filesupload-37be1.appspot.com",
  messagingSenderId: "953671751832",
  appId: "1:953671751832:web:2f546e79bd7875b47d18ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imagedb = getStorage(app)