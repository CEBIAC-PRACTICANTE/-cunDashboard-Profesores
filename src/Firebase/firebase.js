// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBWAmFwf0UcUf0d6dqk_imNYG0w3gLchgA",
  authDomain: "dashdemo-d627b.firebaseapp.com",
  projectId: "dashdemo-d627b",
  storageBucket: "dashdemo-d627b.appspot.com",
  messagingSenderId: "34001233054",
  appId: "1:34001233054:web:56a1eec26fc6d6d45ac78f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export default app;