// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3x3EiVB5Y3BNXbe8h4p9VAfCqys_sZIQ",
  authDomain: "todolist-application-3472b.firebaseapp.com",
  projectId: "todolist-application-3472b",
  storageBucket: "todolist-application-3472b.appspot.com",
  messagingSenderId: "182057752914",
  appId: "1:182057752914:web:cda3d2099644653e0ac28b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();