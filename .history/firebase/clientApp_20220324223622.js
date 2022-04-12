import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const clientCredentials = {
  apiKey: "AIzaSyCpRBbl5bx6c5pi6gsbvH43AeZ8CWmcSvA",
  authDomain: "fir-insta-5fae3.firebaseapp.com",
  projectId: "fir-insta-5fae3",
  storageBucket: "fir-insta-5fae3.appspot.com",
  messagingSenderId: "111988772173",
  appId: "1:111988772173:web:e4c5b599de3a744a5cfb04"
};

if(!firebase.app.length){
    firebase.initializeApp(clientCredentials);
}

export default firebase;