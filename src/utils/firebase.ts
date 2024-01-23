// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAca-Y5XvB0LE-74F4XRrNKPSM302jDsc8",
  authDomain: "kaares-1e53d.firebaseapp.com",
  projectId: "kaares-1e53d",
  storageBucket: "kaares-1e53d.appspot.com",
  messagingSenderId: "849849167386",
  appId: "1:849849167386:web:c9cc05a6b56609856a2ba3",
  measurementId: "G-389L6WQG7D"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);