// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
   apiKey: "AIzaSyCnn2laAkF3lF-VpDHyYUXr-AU-ZNGKaI8",
   authDomain: "tiny-driver-toy.firebaseapp.com",
   projectId: "tiny-driver-toy",
   storageBucket: "tiny-driver-toy.appspot.com",
   messagingSenderId: "232154369391",
   appId: "1:232154369391:web:1df7d03772a6724bb7ac9a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
