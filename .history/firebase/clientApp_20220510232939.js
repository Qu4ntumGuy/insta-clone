import { initializeApp, getApps, getApp } from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PORJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

// if(!firebase.app.length){
//     firebase.initializeApp(clientCredentials);
// }
const app = !getApps().length ? initializeApp(clientCredentials) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};
export default firebase;