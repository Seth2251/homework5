// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9wW3aQEBD38HOCkPFIeoKWcadvl_yCas",
  authDomain: "company-directory-b7caf.firebaseapp.com",
  projectId: "company-directory-b7caf",
  storageBucket: "company-directory-b7caf.firebasestorage.app",
  messagingSenderId: "1051351637363",
  appId: "1:1051351637363:web:34bc039320b5c19554b906",
  measurementId: "G-QWB0Z7CRXK"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
