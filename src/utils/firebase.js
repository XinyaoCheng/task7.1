// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, signInWithPopup, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUaRtmWAl4C4la-AIUG2tYWc8p5cgnpwQ",
  authDomain: "sit313-web-app.firebaseapp.com",
  projectId: "sit313-web-app",
  storageBucket: "sit313-web-app.appspot.com",
  messagingSenderId: "23064500827",
  appId: "1:23064500827:web:f61dce8b92bdd249123d7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});

export const auth = getAuth(app);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(app);