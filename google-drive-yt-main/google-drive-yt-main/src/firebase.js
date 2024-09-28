


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOj1j1vw8qrvtogpqvtZwP5039f15QYYE",
  authDomain: "drive-2ceea.firebaseapp.com",
  projectId: "drive-2ceea",
  storageBucket: "drive-2ceea.appspot.com",
  messagingSenderId: "511130675803",
  appId: "1:511130675803:web:a23f90e8d2bab03f0e2d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Imagedb = getStorage(app);
