import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import the necessary Firebase methods
import { getAnalytics } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBC8LHF_zJwU87bVZZ__WOlz2eLpaWnbCM",
  authDomain: "pinnacle-c5ab1.firebaseapp.com",
  databaseURL: "https://pinnacle-c5ab1-default-rtdb.firebaseio.com",
  projectId: "pinnacle-c5ab1",
  storageBucket: "pinnacle-c5ab1.firebasestorage.app",
  messagingSenderId: "344009728285",
  appId: "1:344009728285:web:db0da0591a4f58d10201f4",
  measurementId: "G-HGYFZBFG9M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app); // Initialize Realtime Database

export { db }; // Export db instance for use in your components
