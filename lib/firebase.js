// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASGV18T3JaAsII0IPaObYtkFLR3YvlLT4",
  authDomain: "plateforme-hare.firebaseapp.com",
  projectId: "plateforme-hare",
  storageBucket: "plateforme-hare.appspot.com",
  messagingSenderId: "267510178622",
  appId: "1:267510178622:web:d7738aba7e0e048116426f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const fs = getFirestore(app);