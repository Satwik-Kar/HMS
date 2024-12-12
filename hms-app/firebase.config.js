// firebase.js

// Import the required Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvxia-IEUUXJnFmjnx_bYbiNAOo_b7pEQ",
  authDomain: "hms-app-5d1a6.firebaseapp.com",
  projectId: "hms-app-5d1a6",
  storageBucket: "hms-app-5d1a6.firebasestorage.app",
  messagingSenderId: "61497255595",
  appId: "1:61497255595:web:748bb94071f2c86e6979ee",
  measurementId: "G-5TY2RDNCV4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// Initialize Analytics (if needed)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, analytics,db };
