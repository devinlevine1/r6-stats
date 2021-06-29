// External Imports
import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/auth";

// Internal Imports
import reportWebVitals from "./reportWebVitals";
import App from "./App";

//Initialize firebase instance
console.log(process.env);
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

if (process.env.REACT_APP_MODE === 'DEVELOPMENT') {
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
