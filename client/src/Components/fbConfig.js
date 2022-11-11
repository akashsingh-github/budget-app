import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyA6IwN2s3HjciIGsQrK8waCRnIoA1yunIg",
  authDomain: "chatting-1fc25.firebaseapp.com",
  projectId: "chatting-1fc25",
  storageBucket: "chatting-1fc25.appspot.com",
  messagingSenderId: "529768898765",
  appId: "1:529768898765:web:623d006beb5d467c01c984",
  measurementId: "G-8SY720C4ES",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);
