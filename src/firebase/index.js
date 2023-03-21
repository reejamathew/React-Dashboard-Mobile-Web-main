import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlc5ZEh_KLw4Gv8J3Grt5Z5H0VT6QcM_M",
  authDomain: "react-3807c.firebaseapp.com",
  projectId: "react-3807c",
  storageBucket: "react-3807c.appspot.com",
  messagingSenderId: "832599714750",
  appId: "1:832599714750:web:65c8d97d1b53669c94a7ef"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const db =  getFirestore(app);
export const storage =  getStorage();