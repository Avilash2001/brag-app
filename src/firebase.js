import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_FIREBASE_APP_ID,
  apiKey: "AIzaSyC6CVCZR8oBka81PgBuz1W9O2OBJ6qQdz4",
  authDomain: "auth-development-bde35.firebaseapp.com",
  projectId: "auth-development-bde35",
  storageBucket: "auth-development-bde35.appspot.com",
  messagingSenderId: "112894900703",
  appId: "1:112894900703:web:4d861cac6ac6d643e9ac6a",
});

export const auth = app.auth();
export default app;
