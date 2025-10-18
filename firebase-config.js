// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional 
  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIxWN4_LoWveBn1CEosRWpTsAFH0gK7fc",
  authDomain: "than-hack-ip.firebaseapp.com",
  databaseURL: "https://than-hack-ip-default-rtdb.firebaseio.com",
  projectId: "than-hack-ip",
  storageBucket: "than-hack-ip.firebasestorage.app",
  messagingSenderId: "33972677823",
  appId: "1:33972677823:web:277fd9c07d70a7634fea0a",
  measurementId: "G-BV6S0BLCVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

// Export the initialized services
export { app, analytics, db };