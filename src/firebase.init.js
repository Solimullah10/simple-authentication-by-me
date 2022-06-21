// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdKYRaYRZ-b7m2gr68aBmt3z0ntk_sVGo",
    authDomain: "simple-authentication-by-me.firebaseapp.com",
    projectId: "simple-authentication-by-me",
    storageBucket: "simple-authentication-by-me.appspot.com",
    messagingSenderId: "722955776583",
    appId: "1:722955776583:web:ac1fc33a6a4dea850d7762"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;