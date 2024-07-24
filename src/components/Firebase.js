// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Corrected the typo
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXnxBot6CJjBsndqJOcepSDkxydVVH-W8",
  authDomain: "loginform-4eeed.firebaseapp.com",
  projectId: "loginform-4eeed",
  storageBucket: "loginform-4eeed.appspot.com",
  messagingSenderId: "732840001256",
  appId: "1:732840001256:web:7938492c8b3e78a2d5935d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(); // Pass the app to getAuth
export const db = getFirestore(app);
export default app;
