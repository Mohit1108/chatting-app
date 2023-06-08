import React from "react";
import { auth, firestore } from "../Firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";

export default function SignOut() {
  return (
    auth.currentUser && (
      <button className="signOut" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}
