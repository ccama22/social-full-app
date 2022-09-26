// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDoSpU06ABIAS7-DsjToPjWb8JN7Ld6F_w",
  authDomain: "social-full-app.firebaseapp.com",
  projectId: "social-full-app",
  storageBucket: "social-full-app.appspot.com",
  messagingSenderId: "330879898117",
  appId: "1:330879898117:web:ecedff570027f62b9e026c",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
