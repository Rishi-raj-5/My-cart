import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKvUnmxx33Ttq7ZinSQI7KBmIvNiCcYB8",
  authDomain: "cart-48003.firebaseapp.com",
  projectId: "cart-48003",
  storageBucket: "cart-48003.appspot.com",
  messagingSenderId: "159551177561",
  appId: "1:159551177561:web:4b6d1484d3a404ad520248"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.render(<App />, document.getElementById('root'));
