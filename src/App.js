import React from 'react';
import { Link, Route } from 'react-router-dom';
import Login from './Login/Login'
import './App.css';
import Register from './Register/Register';




function App() {
  // const [ RequestForm, setRequestForm] = React.useState("");

  return (
    <div className="App">
      <header>
        <nav>
          <div className='nav-links'>
            <Link className="links" to="/parent">Home</Link>
            {/* <NavLink exact className="some-link" to="/">Request form</NavLink> */}
            <Link className="links" to="/login">Login</Link>
            <Link className="links" to="/register">Register</Link>
          </div>
        </nav>
      </header>
      <div className="appHeader">
      <h1>Login</h1>
      </div>
      <div className="form">

     <Route path="/login" component={Login}/>
     <Route path="/register" component={Register} />
     </div>
  
    
      </div>
  );
}

export default App;
