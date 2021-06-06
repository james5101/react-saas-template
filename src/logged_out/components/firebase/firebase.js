import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBKwFnZUf0CQxcYpa9_uvcPVhVaF2jv-E8",
  authDomain: "react-firebase-ea483.firebaseapp.com",
  projectId: "react-firebase-ea483",
  storageBucket: "react-firebase-ea483.appspot.com",
  messagingSenderId: "793944324091",
  appId: "1:793944324091:web:d4aeae132899c891e23d5e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
