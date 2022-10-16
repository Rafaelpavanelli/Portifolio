import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyD2q-Zw2r8lEanYnvKeESzcTfaJB5pmf9E",
  authDomain: "test-81b5b.firebaseapp.com",
  projectId: "test-81b5b",
  storageBucket: "test-81b5b.appspot.com",
  messagingSenderId: "286252404953",
  appId: "1:286252404953:web:929399c07850d77f61aec8",
  measurementId: "G-2TKXWHJFJC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Storage = getStorage(app);
export default Storage;