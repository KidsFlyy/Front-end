import React from 'react';
import axios from "axios";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {CardWrapper, CardHeader,CardHeading,CardBody,
 CardFieldset,CardInput
  ,CardButton,CardLink
} from "./AdminSC"; 



class AdminLogin extends React.Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

   login = e => {
    e.preventDefault();
    axiosWithAuth()
      .post('/login', this.state.credentials)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/protected'); //this is where the auth login will take me.
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
        <CardWrapper>

        <CardHeader>
          <CardHeading> Admin Login </CardHeading>
        </CardHeader>

        <CardBody>

          <CardFieldset>
            <CardInput placeholder="Username" type="text" required />
          </CardFieldset>

          <CardFieldset>
            <CardInput placeholder="Password" type="password" required />
          </CardFieldset>

          <CardFieldset>
            <CardButton type="button">Sign In</CardButton>
          </CardFieldset>

          <CardFieldset>
            <CardLink> Add link here later to reg page... </CardLink>
          </CardFieldset>

        </CardBody>

      </CardWrapper>
      </form>
      </div>
    );
  }
 }
 export default AdminLogin;
 
 
