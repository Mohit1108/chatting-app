import React from "react";
import { auth, firestore } from "../Firebase/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";

export default function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log("Logged In Successfully");
      })
      .catch((error) => {
        console.log("Caught error Popup closed");
      });
  };
  return (
    <>
      <div className="btnGroup">
        <button className="signIn" onClick={signInWithGoogle}>
          <img
            className="googleIcon"
            alt="googleLogo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png"
          ></img>
          Sign up with Google
        </button>
      </div>
      <div className="textContainer">
        <h1>Welcome to ReactChat App</h1>
        <p>Let’s meet each other </p>
      </div>
    </>
  );
}
