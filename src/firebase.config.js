// firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyASa3XajYo023wnm2Ds3JTq00YRUxmO1Xs",
  authDomain: "oldwesttracker-5e31d.firebaseapp.com",
  projectId: "oldwesttracker-5e31d",
  storageBucket: "oldwesttracker-5e31d.appspot.com",
  messagingSenderId: "1093452700029",
  appId: "1:1093452700029:web:f888c430160b5569e69414"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);