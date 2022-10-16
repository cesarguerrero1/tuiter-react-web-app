/*
  Cesar Guerrero
  10/15/22
  CS5610

  Assignment 6: React
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Import Bootstrap, Bootswatch, and FontAwesome via our Package Manager
import "bootstrap/dist/css/bootstrap.min.css"
import "bootswatch/dist/cyborg/bootstrap.min.css"
import 'fontawesome-free/css/all.min.css'

//This is basic Javascript manipulation of the DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

//Inject our HTML (From our JS File) into the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
