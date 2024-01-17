import React from "react";
import "../Sass/HomeComponent.scss";
import TopBar from "./TopBar";
import LinkedinLogo from "../assets/LinkedinLogo.png"

export default function HomeComponent(){
    return(
        <div>
            <TopBar />
            
            <div className="columns" >ekrg
                <div className="first-column">f</div>
                <div className="second-column">f</div>
                <div className="third-column">f</div>
                <h1>Linkedin Logo!!</h1>
                <img src={LinkedinLogo} alt="Logo" />
            </div>
        </div>
    );
}
