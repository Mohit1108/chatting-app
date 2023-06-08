import "./styles.css";
import React, { useRef, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/analytics";
import { auth, firestore } from "./Firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import SignIn from "./Auth/signIn";
import SignOut from "./Auth/signOut";

// Import Images
// import Landing from "./assets/Landing.jpg";
export default function App() {
  const [user] = useAuthState(auth);
  function ChatRoom() {
    const dummy = useRef();
    const messageRef = firestore.collection("messages");
    const query = messageRef.orderBy("createdAt").limit(100);
    const [messages] = useCollectionData(query, { idField: "id" });
    const [formValue, setFormValue] = useState("");
    const sendMessage = async (e) => {
      e.preventDefault();
      const { uid, photoURL, displayName } = auth.currentUser;
      await messageRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL,
        name: displayName,
      });
      setFormValue("");
      // dummy.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
      <>
        <div>
          {messages &&
            messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg}></ChatMessage>
            ))}
          <form onSubmit={sendMessage} className="Inputform">
            <input
              value={formValue}
              onChange={(e) => setFormValue(e.target.value)}
              placeholder="Type your message"
            ></input>
            <button
              className="submitButton"
              type="submit"
              disabled={!formValue}
            >
              Send
            </button>
          </form>
        </div>
      </>
    );
  }

  function ChatMessage(props) {
    const { text, uid, photoURL, name } = props.message;

    const messageClass = uid === auth.currentUser.uid ? "sent" : "recieve";
    return (
      <>
        <div className={`message ${messageClass}`}>
          <div className="userData">
            <img alt="name" src={photoURL} />
            <p className="messageText">{text}</p>
          </div>
          <p className="UserName">{name}</p>
        </div>
      </>
    );
  }

  return (
    <div className="App container">
      <header className="header">
        <h1>{user ? "Chit-Chat App" : "Chit-Chat App"}</h1>
        <SignOut />
      </header>
      <main className="bodyMain">
        <section>{user ? <ChatRoom /> : <SignIn />}</section>
      </main>
    </div>
  );
}
