import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCLbJ-ZgWP3IllUmjkIXaWYpYl3R96pYxk",
  authDomain: "portifolio-9c1fe.firebaseapp.com",
  projectId: "portifolio-9c1fe",
  storageBucket: "portifolio-9c1fe.appspot.com",
  messagingSenderId: "561173862359",
  appId: "1:561173862359:web:b1316df3e23c983ecf9d92",
  measurementId: "G-4KXPZZPDRF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);
export default db