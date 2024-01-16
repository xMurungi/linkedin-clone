import React, { useEffect } from "react";
import LoginComponent from '../Components/LoginComponent';
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../Components/Common/Loader";

export default function Login() {

  const nav = useNavigate();

  useEffect( ()=> {
    onAuthStateChanged(auth, (res) => {
      console.log(res);
      if(res?.accessToken){
        nav("/home");
        return <Loader />
      }else{
        return <Loader />
      }
    } );
}, [] );

  return (
    <LoginComponent/>
  )
}
