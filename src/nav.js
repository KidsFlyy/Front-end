import React from "react";
import {BrowserRouter as Router, Route, Link } from "react-router-dom";


function Home(props){
    return<h3>Home</h3>
}

function Login(props) {
    return<h3>Login</h3>

}

function NavBar () {
    return (
<div className="NavigationBar">

<header className="App-header">


<Router>
<Link to="/">Home</Link>
<Link to="/Login">Login</Link>

<Route exact path="/" component={Home} />
<Route path="/login" component={Login} />
</Router>

</header>
</div>
    );
}

export default NavBar;