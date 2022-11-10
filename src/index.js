import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";




  import firebase from "firebase";
  import "firebase/firestore";
  
  const firebaseConfig = {
    

apiKey: "AIzaSyBKvUnmxx33Ttq7ZinSQI7KBmIvNiCcYB8",
authDomain: "cart-48003.firebaseapp.com",
projectId: "cart-48003",
storageBucket: "cart-48003.appspot.com",
messagingSenderId: "159551177561",
appId: "1:159551177561:web:4b6d1484d3a404ad520248"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
