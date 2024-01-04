import React, { useState } from 'react';
import LinkedinLogo from "../Assets/LinkedinLogo.png";
import { loginAPI } from "../API/AuthAPI";
import "../Sass/LoginComponent.scss";

export default function LoginComponent() {
  const login = () => {
    loginAPI();
  }

  return (
    <div className='box'>
      <p>LinkedIn<img src={LinkedinLogo} alt="Logo" className='LinkedinLogo' /></p>
      <div className="login">
        <h1 className="header">Sign in</h1>
        <p className='sub-heading'>Stay updated on your professional world</p>
        <form action="">
          <input type="text" name='email' className="email-input" autoComplete='username' placeholder='Email or Phone' required />
          <input type='password' name='password' className="password-input" autoComplete='current-password' placeholder='Password' required />
          <button onClick={login} className="login-btn">Login</button>
        </form>
        <div className='or' >or</div>
        <button className='Googlebtn'> <span><img src={LinkedinLogo} alt="logo" /></span> Continue with Google</button>
      </div>
      <a target="_blank" href="https://icons8.com/icon/114445/linkedin-circled">LinkedIn Circled</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  )
}
