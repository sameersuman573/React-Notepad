import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOj1j1vw8qrvtogpqvtZwP5039f15QYYE",
  authDomain: "drive-2ceea.firebaseapp.com",
  projectId: "drive-2ceea",
  storageBucket: "drive-2ceea.appspot.com",
  messagingSenderId: "511130675803",
  appId: "1:511130675803:web:a23f90e8d2bab03f0e2d7e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }