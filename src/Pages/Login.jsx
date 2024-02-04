import React, { useEffect, useState } from "react";
import LoginComponent from '../Components/LoginComponent';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../Components/Common/Loader";

export default function Login() {

  const [Loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect( ()=> {
    onAuthStateChanged(auth, (res) => {
      console.log(res);
      console.log(res.email);
      localStorage.setItem('UserEmail', res.email);
      if(res?.accessToken){
        nav("/home");
        return <Loader />
      }else{
        setLoading(false);
      }
    } );
}, [] );

  return (
    Loading? <Loader/> : <LoginComponent/> 
  )
}
