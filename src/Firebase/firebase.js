// Import the functions you need from the SDKs you need

import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: "AIzaSyBHfgJOBT1lEobMsiIJy9BduN5dc9QVmSI",
  authDomain: "cundashboard-profesores.firebaseapp.com",
  projectId: "cundashboard-profesores",
  storageBucket: "cundashboard-profesores.appspot.com",
  messagingSenderId: "1054653493805",
  appId: "1:1054653493805:web:327244baf56b4fde34fea4"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export default app;


