// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {connectFirestoreEmulator, getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDzx5a13RQmQOAbHfFym19a1APC_dWUzM0",
    authDomain: "psychinikki.firebaseapp.com",
    projectId: "psychinikki",
    storageBucket: "psychinikki.appspot.com",
    messagingSenderId: "675013330133",
    appId: "1:675013330133:web:4a91bdd58a2a46c3f0ce5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
import.meta.env.DEV && connectFirestoreEmulator(db, '127.0.0.1', 8080);
