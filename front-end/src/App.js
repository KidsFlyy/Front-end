import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import AdminLogin from './components/AdminLogin';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
     <div className="App">
     <h1> KidsFly! </h1>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <Switch> 
       <Route exact path="/login" component={AdminLogin} />
       {/* <PrivateRoute exact path="/" component={} /> 
      //this is the cards for the CRUD comp.  */}
      </Switch>
     </div>
   </Router>
  );
}

export default App;
