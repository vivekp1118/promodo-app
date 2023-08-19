import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDDYaJtXt8eZOWFocUbPlSYNIZRaqxyKu8",
  authDomain: "mtechzilla-ass1.firebaseapp.com",
  projectId: "mtechzilla-ass1",
  storageBucket: "mtechzilla-ass1.appspot.com",
  messagingSenderId: "392487949745",
  appId: "1:392487949745:web:96fadff68513526a7a5990"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {app, auth}