// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBzf9Uq_qT8JYedVuTPJJvuPQ0pHaiROk",
  authDomain: "contactapp-9e787.firebaseapp.com",
  projectId: "contactapp-9e787",
  storageBucket: "contactapp-9e787.firebasestorage.app",
  messagingSenderId: "654054989495",
  appId: "1:654054989495:web:d0b44615e86ee56440f732",
  measurementId: "G-7SX4W8GQP3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app);