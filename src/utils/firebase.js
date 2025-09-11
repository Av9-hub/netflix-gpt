// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_rIB7VIV-habZL09wVMSINw3iXJeBSLg",
  authDomain: "netflixgpt-54a29.firebaseapp.com",
  projectId: "netflixgpt-54a29",
  storageBucket: "netflixgpt-54a29.firebasestorage.app",
  messagingSenderId: "404590607732",
  appId: "1:404590607732:web:2cf49a63823f3715dc0021",
  measurementId: "G-LXDN7EPM30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();