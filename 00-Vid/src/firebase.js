// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAM372TIKtfJPIx4LUTuKvrb2ScPMe6KP8",
  authDomain: "vidmac-84cde.firebaseapp.com",
  projectId: "vidmac-84cde",
  storageBucket: "vidmac-84cde.appspot.com",
  messagingSenderId: "323419548420",
  appId: "1:323419548420:web:2e2612633ec9027beefe51"
};


// Initialize Firebase FUnctina
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)




export {auth , app , firestore , storage};
