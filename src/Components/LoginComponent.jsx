import React from 'react';
import "../Sass/LoginComponent.scss"; 
import { loginAPI } from '../API/AuthAPI';

export default function LoginComponent() {
  const login = () => {
    loginAPI();
  }

  return (
    <div className="login"> 
      <div className="header">Welcome to LinkedIn </div>
      <input type="text" className="email-input" placeholder='Email' />
      <input type='password' className="password-input" placeholder='Password' />
      <button onClick={login} className="login-btn">Login</button>
    </div>
  )
}
