// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD-tz8nE-XlBkqHF4-m9Rzh0W_UnzSprKY",
  authDomain: "nodewithfirsebase.firebaseapp.com",
  projectId: "nodewithfirsebase",
  storageBucket: "nodewithfirsebase.appspot.com",
  messagingSenderId: "4656901441",
  appId: "1:4656901441:web:1453ca583b8b05dbfd05c0",
  measurementId: "G-Z1LPW3XRYW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);