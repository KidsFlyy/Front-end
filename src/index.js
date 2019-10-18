import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './login.scss'
import App from './App';
import LoginApp from './Login/LoginApp';
import NavBar from "./nav.js"
import {BrowserRouter as Router } from "react-router-dom";

import * as serviceWorker from './serviceWorker';

export default function FullPage() {
    return <main>
    <NavBar/>    
      <LoginApp />
 </main>
  }


ReactDOM.render(
    <Router>
<App />
</Router>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
