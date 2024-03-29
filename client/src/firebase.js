// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "ecoswift-d4815.firebaseapp.com",
  projectId: "ecoswift-d4815",
  storageBucket: "ecoswift-d4815.appspot.com",
  messagingSenderId: "737687901945",
  appId: "1:737687901945:web:636b90f6237f19ff7e3428"
};

// Initialize Firebase
export  const app = initializeApp(firebaseConfig);

