import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import HomeComponent from "../Components/HomeComponent";
import Loader from "../Components/Common/Loader";

export default function Home(){

    const [Loading, setLoading] = useState(true);
    const nav = useNavigate();

    useEffect( ()=> {
        onAuthStateChanged(auth, (res) => {
            if(!res?.accessToken){
                nav("/");
            } else{
                setLoading(false);
            }
        } );
    }, [] );

    return(
        Loading? <Loader/> : <HomeComponent />
    );
}
