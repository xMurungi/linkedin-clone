import React from "react";
import { useState } from "react";
import GoogleButton from "react-google-button";
import { useNavigate } from "react-router-dom";
import { RegisterAPI, GoogleSignInAPI } from "../API/AuthAPI";
import { toast } from 'react-toastify';
import "../Sass/RegisterComponent.scss";

export default function RegisterComponent() {

  const nav = useNavigate({});

  const [credentials, setCredentials] = useState({});
  
  const register = async () => {
    try {
      let res = await RegisterAPI(credentials.email, credentials.password);
      localStorage.setItem('UserEmail', res.user.email);
      console.log(res.user.email);
      toast.success("Registered to LinkedIn");
      nav("/home");
      return res;
    } catch (err) {
      console.log(err);
      toast.error("Can not create account");
    }
  };

  const GSignIn = () => {
    let response = GoogleSignInAPI();
    return response;
  };

  return (
      <div className='box'>
        <div className="login">
          <h1 className="header2">Register to to LinkedIn</h1>
        
           <input onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
              type="text" name='name' className="name-input" autoComplete='name' placeholder='Your name' required />
            <input onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
              type="email" name='email' className="email-input" autoComplete='username' placeholder='Email or Phone' required />
            <input onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
              type='password' name='password' className="password-input" autoComplete='current-password' placeholder='Password (6 or more characters)' required />
            
            <button onClick={register} className="login-btn">Agree & Join</button>
        
          <hr className="hr-text gradient" data-content="or"/>
          <GoogleButton onClick={GSignIn} className='Googlebtn' />
          <p className="Already" >Already on Linkedin? <a href=""> <span onClick={ () => { nav("/") } } > Sign in</span> </a> </p>
        </div>
    </div>
  );
}
