// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { ref, push, onValue } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChU5p2aomxQyezHRRV3LWRuLIOtqXPRXs",
  authDomain: "assignment-01-55aa5.firebaseapp.com",
  projectId: "assignment-01-55aa5",
  storageBucket: "assignment-01-55aa5.appspot.com",
  databaseURL:
    "https://assignment-01-55aa5-default-rtdb.asia-southeast1.firebasedatabase.app/",
  messagingSenderId: "521614812027",
  appId: "1:521614812027:web:a46607bfceea75653513de",
  measurementId: "G-1ZZTVKNEK9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, database, analytics, ref, push, onValue };
