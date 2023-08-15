// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDohr07exlc1gV9g1ICVA6KnTLTTvSKFm4",
  authDomain: "facepal-de84f.firebaseapp.com",
  projectId: "facepal-de84f",
  storageBucket: "facepal-de84f.appspot.com",
  messagingSenderId: "769520005324",
  appId: "1:769520005324:web:3ba4c7d9cf3eb7c0215269"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const authenthication = getAuth(app)

export {authenthication}