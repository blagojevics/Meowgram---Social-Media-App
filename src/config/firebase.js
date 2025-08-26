import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQcdcOEmLA4PEVWtcUM5ehTmP2zMkbdfM",

  authDomain: "meowgram-cdd7c.firebaseapp.com",

  projectId: "meowgram-cdd7c",

  storageBucket: "meowgram-cdd7c.firebasestorage.app",

  messagingSenderId: "284043381940",

  appId: "1:284043381940:web:36f307344a02feaed81be1",

  measurementId: "G-0LJ1SX9W56",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
