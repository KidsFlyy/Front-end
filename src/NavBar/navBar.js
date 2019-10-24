import React, { Component } from "react";
 
class Navbar extends Component {
    render() {
        return (
            <div>
              <ul id="nav">

                <li><a href="#">KidsFly Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
        );
    }
}

export default Navbar;