// External Imports
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Internal Imports
import reportWebVitals from "./reportWebVitals";
import App from "./App";

//Initialize firebase instance
const firebaseConfig = {
  apiKey: "AIzaSyBCjJ5Bul3K85JIMGF661X7tOzXbd53ohw",
  authDomain: "r6stats-6cca3.firebaseapp.com",
  projectId: "r6stats-6cca3",
  storageBucket: "r6stats-6cca3.appspot.com",
  messagingSenderId: "493627799132",
  appId: "1:493627799132:web:e153b4be00382de82bd899",
  measurementId: "G-5XYZ8GQK4M",
};

firebase.initializeApp(firebaseConfig);

if (true) {
  firebase.auth().useEmulator('http://localhost:9099/');
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
