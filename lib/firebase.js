// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyASGV18T3JaAsII0IPaObYtkFLR3YvlLT4",
//   authDomain: "plateforme-hare.firebaseapp.com",
//   projectId: "plateforme-hare",
//   storageBucket: "plateforme-hare.appspot.com",
//   messagingSenderId: "267510178622",
//   appId: "1:267510178622:web:d7738aba7e0e048116426f"
// };

const firebaseConfig = {

  apiKey: "AIzaSyD1XO2tPm6x7y4o3XPH3IvSB-XUFgtsWbQ",

  authDomain: "plateforme-hare-c142e.firebaseapp.com",

  projectId: "plateforme-hare-c142e",

  storageBucket: "plateforme-hare-c142e.appspot.com",

  messagingSenderId: "374895311646",

  appId: "1:374895311646:web:58f5541195d653fdc8e70f",

  measurementId: "G-Q2L3HV8Z40"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const fs = getFirestore(app);