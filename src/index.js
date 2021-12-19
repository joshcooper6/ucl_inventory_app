import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
const root = document.getElementById('root')
import { BrowserRouter as Router } from 'react-router-dom'
import { getPerformance } from "firebase/performance";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBf5VScA0HHpbV2VNnssv-uwAcvkVf5__w",
    authDomain: "ucl-inventory.firebaseapp.com",
    projectId: "ucl-inventory",
    storageBucket: "ucl-inventory.appspot.com",
    messagingSenderId: "183086643763",
    appId: "1:183086643763:web:6fa782663ab9ef852b8146",
    measurementId: "G-78FG6NL59J"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const perf = getPerformance(app);

ReactDOM.render(<Router><App /></Router>, root)