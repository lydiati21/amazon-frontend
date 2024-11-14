// import firebase from "firebase/compat/app";
// // auth
// import { getAuth } from "firebase/auth";
// import "firebase/compat/firestore";
// import "firebase/compat/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA-IQDPQrWwtapk60VSoSCuh7vEBWQrJgQ",
//   authDomain: "clone-38286.firebaseapp.com",
//   projectId: "clone-38286",
//   storageBucket: "clone-38286.appspot.com",
//   messagingSenderId: "947908360353",
//   appId: "1:947908360353:web:314e96ac93efd7ac72d8e0",
// };

// // Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const db = app.firestore();


// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA1EI3cdStyJ-YFuYml3GHyexv4pri6Ai4",
  authDomain: "clone-4e810.firebaseapp.com",
  projectId: "clone-4e810",
  storageBucket: "clone-4e810.firebasestorage.app",
  messagingSenderId: "921846078739",
  appId: "1:921846078739:web:aeabe74d51f92dcd000ee6"
};

// Initialize Firebase
const app =firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();