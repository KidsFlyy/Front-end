import React from "react";
import reactDOM from "react-dom";


class App extends React.Component {

    constructor(pops) {
        super(props);
        this.state = {};

    )
    this.render() {

        return ( 
            <div className="root-container" >

            <div className="box-controller" >
            <div className="controller">
            Login
            </div>
            <div className="controller">
            Register
            </div>
            </div>         
            
            <div className = "box-container" >



            </div>

            </div>

        );
    }
}

class LoginBox extends React.Component {

    constructor(pops) {
        super(props);
        this.state = { };
    }

render() {

    <div className="inner-container">
<div className="box">

<div className="input-group">
<label htmlFor="username">Username</label>
<input type="text" name="username" className="login-input" placeholder="Username" />
</div>


<div className="input-group">
<label htmlFor="password">Password</label>
<input type="password" name="password" className="login-input placeholder="Password" />
</div>

<button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>
</div>

    </div>
}
}




reactDOM.render( < App / > , document.getElementById("root"));