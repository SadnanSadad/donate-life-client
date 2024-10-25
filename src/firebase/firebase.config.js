// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTNeKbw--zf2P9evsfqFgIeeEv_qovhAs",
  authDomain: "donate-life-4f3f9.firebaseapp.com",
  projectId: "donate-life-4f3f9",
  storageBucket: "donate-life-4f3f9.appspot.com",
  messagingSenderId: "230849656955",
  appId: "1:230849656955:web:495217fd7ae20fa6678ade"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);