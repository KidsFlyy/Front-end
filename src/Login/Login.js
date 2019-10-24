import React, { useState, useEffect } from 'react';
import { Form, Field, Formik, withFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
// import Routes from "./Routes";





function Login({errors, touched, status, props}){
    const [auth, setAuth] = useState([]);

    return(
        <div className="loginForm">
     
       <Form>

           <Field
           component="input"
           type="text"
           name="userName"
           placeholder="User Name"
           />
           {touched.userName && errors.userName && (
               <p className="error">{errors.userName}</p>
           )}
            <Field
            component="input"
            type="password"
            name="password"
            placeholder="Password"
            />
            {touched.password && errors.password && (
                <p className="error">{errors.password}</p>
            )}
            <button type="submit" onClick={(prop) => props.history.push("/request")}>Login</button>
            

       </Form>
           
       </div>
       
    )
}

const propsToValuesMap = withFormik({
    mapPropsToValues({userName, password}){
        return {
            userName: userName || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        userName: Yup.string().required("User name is required"),
        password: Yup.string().required("Password is required")
    })   
});

// useEffect( () => {
    
//     axios
//     .post("https://kids-fly-backend.herokuapp.com")

//     .then(res => {
//       console.log(res.data); // Data was created successfully and logs to console
//     })
//     .catch(err => {
//       console.log(err); // There was an error creating the data and logs to console
//     });
//   }
// (Login);

const LoginFormik = propsToValuesMap(Login);



export default Login;