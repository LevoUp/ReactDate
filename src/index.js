import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./components/App.jsx";
// import App from './App';


// Create a React app from scratch.
// Show a single h1 that says "Good Morning" if between midnight and 12pm.
// or "Good Afternoon" if between 6pm and midnight.
// Apply the "heading" style in the Styles.css.
// Dynamically change the color of the h1 using inline css styles.
// Morning = red, Afternoon = green, Night = blue.



ReactDOM.render(
  <App/>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();