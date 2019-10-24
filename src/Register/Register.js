import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from "formik";
// import axios from "axios";
import * as Yup from "yup";
// import Routes from "./Routes/Routes";





function Register({errors, touched, status, props}){
    const [auth, setAuth] = useState([]);

    return(

        

        <div className="RegisterForm">
     
       <Form>
       <Field
           component="input"
           type="text"
           name="fullName"
           placeholder="Enter Full Name"
           />
           {touched.fullName && errors.fullName && (
               <p className="error">{errors.fullName}</p>
           )}
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
    mapPropsToValues({fullName,userName, password}){
        return {
            fullName: fullName || "",
            userName: userName || "",
            password: password || ""
        };
    },

    validationSchema: Yup.object().shape({
        fullName: Yup.string().required("Full Name is required"),
        userName: Yup.string().required("User name is required"),
        password: Yup.string().required("Password is required")
    })   
});

const LoginFormik = propsToValuesMap(Register);



export default LoginFormik;