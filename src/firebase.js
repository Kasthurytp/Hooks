import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDokZqEIKpnmCA2r7u5FU2xuRXfWAXRfH0",
  authDomain: "hooks-aa905.firebaseapp.com",
  projectId: "hooks-aa905",
  storageBucket: "hooks-aa905.appspot.com",
  messagingSenderId: "714254214617",
  appId: "1:714254214617:web:9b7dbecd7fb3d28904a5c8"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };