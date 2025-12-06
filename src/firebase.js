import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3Otz2c8xi9dyRPHJfUxx3c9-3HPC54vU",
  authDomain: "auth-assignment-f199d.firebaseapp.com",
  projectId: "auth-assignment-f199d",
  storageBucket: "auth-assignment-f199d.firebasestorage.app",
  messagingSenderId: "116075778086",
  appId: "1:116075778086:web:956efd48f41376974716e7",
  measurementId: "G-K2HGY55NTG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
