import React, { Fragment, useState } from "react";
import axios from 'axios';
import { API } from '../../backend';
const api=process.env.REACT_APP_BACKEND;
export const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = event => setFormData({
      ...formData,
      [event.target.name]:event.target.value
  })

  const onSubmit = async  event =>{
      event.preventDefault();
      if(password!==password2){
          console.log("password mismatch!");
      }
      else{
          console.log("registering user")
        const newUser = {
            name,
            email,
            password
        };

        try {
           const config = {
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
              }
            }

            const body = JSON.stringify(newUser);
            console.log(body)
            console.log("checking api");


            const res= await axios({
                method: 'post', //you can set what request you want to be
                url: `http://localhost:5000/api/users/signup`,
                data: newUser,
                headers: {
                    "Access-Control-Allow-Origin":"*",
                    "Content-Type": "application/json",
                }
              })
            console.log(res.data);
        } catch (err) {
            console.log("got an error");
            console.error(err.message);

            console.error(err.response.data);
        }
    }
  }

  return (
    <Fragment>
      <h1 className="large text-primary">Sign Up</h1>
      <p className="lead">
        <i className="fas fa-user"></i> Create Your Account
      </p>
      <form className="form" onSubmit = {event => onSubmit(event)}>
        <div className="form-group">
          <input 
           type="text"
           placeholder="Name"
           name="name"
           value= {name}
           onChange= {event => onChange(event)}
           required />
        </div>
        <div className="form-group">
          <input type="email" 
          placeholder="Email Id"
          name="email"
          value= {email}
          onChange= {event => onChange(event)}
          required />
          {/* <small className="form-text">
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small> */}
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value= {password}
            onChange= {event => onChange(event)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value= {password2}
            onChange= {event => onChange(event)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <a href="login.html">Sign In</a>
      </p>
    </Fragment>
  );
};

export default Signup;
