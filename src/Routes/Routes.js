import React from "react";
import { Route } from "react-router-dom";

import Login from "../Login/Login";

//import components here


function Routes () {
    return (
        <div>
            <Route exact path="/" component={Login} />
           
        </div>
    )
}
export default Routes;