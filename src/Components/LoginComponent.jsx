import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
//import { Navigate } from '../../Helpers/useNavigate';
import { toast } from 'react-toastify';
import LinkedinLogo from "../Assets/LinkedinLogo.png";
import { GoogleSignInAPI, LoginAPI } from "../API/AuthAPI";
import "../Sass/LoginComponent.scss";
import GoogleButton from 'react-google-button';

export default function LoginComponent() {

  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({});

  const login = async () => {
    try {
      let res = await LoginAPI(credentials.email, credentials.password);
      localStorage.setItem('UserEmail', res.email);

      toast.success("Signed in to LinkedIn");
      navigate("/home");
      return res;
    } catch (err) {
      console.log(err);
      toast.error("Check your credentials");
    }
  };

  const GSignIn = () => {
    let response = GoogleSignInAPI();
    console.log(response);
    return response;
  };

  return (
    <div className='box'>
      <p><img src={LinkedinLogo} alt="Logo" className='LinkedinLogo' /></p>
      <div className="login">
        <h1 className="header">Sign in to Linkedin</h1>
        
          <input onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
            type="email" name='email' className="email-input" autoComplete='username' placeholder='Email or Phone' required />
          <input onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
            type='password' name='password' className="password-input" autoComplete='current-password' placeholder='Password' required />
          <button onClick={login} className="login-btn">Login</button>
        
        <hr className="hr-text gradient" data-content="or"/>
        <GoogleButton onClick={GSignIn} className='Googlebtn' />
        <p className='new'>New to LinkedIn?<a href=""><span className='join-now' onClick={ () => navigate('/register') } > Join now</span></a></p>
      </div>
      <a target="_blank" href="https://icons8.com/icon/114445/linkedin-circled">LinkedIn Circled</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a> 
    </div>
  );
}
