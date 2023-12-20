// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-ca6d7.firebaseapp.com",
  projectId: "real-estate-marketplace-ca6d7",
  storageBucket: "real-estate-marketplace-ca6d7.appspot.com",
  messagingSenderId: "302408586066",
  appId: "1:302408586066:web:a32d2c32dcd7ec2a48208b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);