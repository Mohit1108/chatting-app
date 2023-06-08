import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";

// Importing Firebase Hook
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp({
  apiKey: "AIzaSyBDLbORHzrnmJxw67Te7nxc1070YOikkEs",
  authDomain: "reactchat-812be.firebaseapp.com",
  projectId: "reactchat-812be",
  databaseUL: "https://reactchat-812be.firebaseio.com",
  storageBucket: "reactchat-812be.appspot.com",
  messagingSenderId: "429432058607",
  appId: "1:429432058607:web:540f9466f1b04d59ada11a",
  measurementId: "G-87R429TRW6",
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
