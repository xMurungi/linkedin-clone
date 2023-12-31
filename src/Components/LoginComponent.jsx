import React, { useState } from 'react';
import "../Sass/LoginComponent.scss"; 
import { loginAPI } from '../API/AuthAPI';

export default function LoginComponent() {
  const login = () => {
    loginAPI();
  }

  return (
    <div className="login"> 
      <div className="header">Welcome to LinkedIn </div>
      <form action="">
        <input type="text" name='email' className="email-input" autoComplete='username' placeholder='Email' required />
        <input type='password' name='password' className="password-input" autoComplete='current-password' placeholder='Password' required />
        <button onClick={login} className="login-btn">Login</button>
      </form>
    </div>
  )
}
