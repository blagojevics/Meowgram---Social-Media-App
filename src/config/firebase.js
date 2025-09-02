import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAQcdcOEmLA4PEVWtcUM5ehTmP2zMkbdfM",
  authDomain: "meowgram-cdd7c.firebaseapp.com",
  projectId: "meowgram-cdd7c",
  storageBucket: "meowgram-cdd7c.firebasestorage.app",
  messagingSenderId: "284043381940",
  appId: "1:284043381940:web:36f307344a02feaed81be1",
  measurementId: "G-0LJ1SX9W56",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics (optional, only works in browser with enabled analytics)
const analytics = getAnalytics(app);

// Auth
export const auth = getAuth(app);

// Firestore
export const db = getFirestore(app);

// Storage
export const storage = getStorage(app);

// Google Provider
export const googleProvider = new GoogleAuthProvider();
