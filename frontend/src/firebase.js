// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAk410gcDN_K_52BseQ8lmMYjJsMBKCwsI",
  authDomain: "thetoe-59422.firebaseapp.com",
  projectId: "thetoe-59422",
  storageBucket: "thetoe-59422.appspot.com",
  messagingSenderId: "621058299391",
  appId: "1:621058299391:web:5f0636ca16e2e0eb8783ca",
  measurementId: "G-FWXTDNY5NM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};