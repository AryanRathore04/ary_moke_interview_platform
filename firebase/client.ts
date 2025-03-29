// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAUcgPLVJdvKyRPsOpLSz2GWNwQ5U3WmAc",
  authDomain: "prepwise-b2486.firebaseapp.com",
  projectId: "prepwise-b2486",
  storageBucket: "prepwise-b2486.firebasestorage.app",
  messagingSenderId: "924893415382",
  appId: "1:924893415382:web:286368de9c6c6455214677",
  measurementId: "G-KRW7H617Q4",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
