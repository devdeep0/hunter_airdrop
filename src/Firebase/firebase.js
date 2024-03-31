// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAokc6Qyp_dUMvYa75xJzJ7-D3GnC33Jes",
  authDomain: "huntersnft-c8962.firebaseapp.com",
  projectId: "huntersnft-c8962",
  storageBucket: "huntersnft-c8962.appspot.com",
  messagingSenderId: "1060659348050",
  appId: "1:1060659348050:web:7cf562c0e4a7f7e568d58b",
  measurementId: "G-ZTTB3QF8MF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)