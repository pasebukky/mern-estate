// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-70525.firebaseapp.com",
  projectId: "mern-estate-70525",
  storageBucket: "mern-estate-70525.appspot.com",
  messagingSenderId: "78090561118",
  appId: "1:78090561118:web:2bf82e0e3e086ffed276cf"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);