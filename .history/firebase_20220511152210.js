// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpRBbl5bx6c5pi6gsbvH43AeZ8CWmcSvA",
  authDomain: "fir-insta-5fae3.firebaseapp.com",
  projectId: "fir-insta-5fae3",
  storageBucket: "fir-insta-5fae3.appspot.com",
  messagingSenderId: "111988772173",
  appId: "1:111988772173:web:e4c5b599de3a744a5cfb04"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };