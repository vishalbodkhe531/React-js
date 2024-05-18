// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sign-with-2.firebaseapp.com",
  projectId: "sign-with-2",
  storageBucket: "sign-with-2.appspot.com",
  messagingSenderId: "962037074237",
  appId: "1:962037074237:web:f876ee7145c3d4220b5d54",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
