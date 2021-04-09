import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDLMUebn5F0jtiR2_AtXcJwpS6iQ57svg8",
  authDomain: "whatsup-clone-nextjs.firebaseapp.com",
  projectId: "whatsup-clone-nextjs",
  storageBucket: "whatsup-clone-nextjs.appspot.com",
  messagingSenderId: "297037673435",
  appId: "1:297037673435:web:5082a102d833491ef1adfe",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
