import React from 'react';
import { NavLink, Link, Route } from 'react-router-dom';
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
    
          <Link className="links" to="/"> Home </Link>
          <Link className="links" to="/AboutUs">About Us </Link>
            <Link className="links" to="/login"> Login </Link>
            <Link className="links" to="/register"> Sign Up </Link>
          </div>
        </nav>
      </header>
      <div className="appHeader">

      </div>
      <div className="form">

      {/* <Route exact path="/" component={Home} /> */}

      <Route exact path='/' component={() => { 
     window.location.href = 'https://keen-northcutt-4fb34f.netlify.com/'; 
     return null;
}}/>

<Route exact path='/AboutUs' component={() => { 
     window.location.href = 'https://keen-northcutt-4fb34f.netlify.com/about.html'; 
     return null;
}}/>

   
     <Route path="/login" component={Login}/>
     <Route path="/register" component={Register} />
     </div>
  
    
      </div>
  );
}

export default App;
