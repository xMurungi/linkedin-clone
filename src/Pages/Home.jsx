import React, { useEffect } from "react";
import HomeComponent from "../Components/HomeComponent";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import Loader from "../Components/Common/Loader";

export default function Home(){

    const nav = useNavigate();

    useEffect( ()=> {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken){
                nav("/");
            } else{
                return <Loader />
            }
        } );
    }, [] );

    return(
        <HomeComponent />
    );
}
