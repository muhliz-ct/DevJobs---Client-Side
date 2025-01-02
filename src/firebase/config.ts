// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2cicHerWHlD3ocF6vTTgn7v8N0NKgNHU",
  authDomain: "devjobs-acd3a.firebaseapp.com",
  projectId: "devjobs-acd3a",
  storageBucket: "devjobs-acd3a.firebasestorage.app",
  messagingSenderId: "133996276759",
  appId: "1:133996276759:web:7ea74b09b60d2744074052",
  measurementId: "G-2BF9G1DNRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
