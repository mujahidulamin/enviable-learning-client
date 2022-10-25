// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9bQ1AEhBEmHRSjV1LLWHn6D6j8-HImQo",
  authDomain: "enviable-learning.firebaseapp.com",
  projectId: "enviable-learning",
  storageBucket: "enviable-learning.appspot.com",
  messagingSenderId: "1036633111448",
  appId: "1:1036633111448:web:6e6ba41f35e4405e6509ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;