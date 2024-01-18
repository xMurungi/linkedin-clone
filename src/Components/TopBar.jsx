import React from "react";
import { useNavigate } from "react-router-dom";
import "../Sass/TopBar.scss";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import anime from "../assets/anime-search.svg";
import Briefcase from "../assets/briefcase-icon.svg";
import msgicon from "../assets/message-icon.svg";
import home2 from "../assets/icons8-home.svg";
import people from "../assets/icons8-myspace.svg";
import news from "../assets/icons8-news.svg";
import profile from "../assets/icons8-user-male.svg";

const TopBar = ()=> {

    const nav = useNavigate();
    const goToRoute = (route) => {
        nav(route);
    };

    return(
        <div className="topbar" >

            <img src={LinkedinLogo} alt="Logo" />
            <div className="search-bar" >
                 <input className="search-input" type="text" /> <span /> <img src={anime} alt="Search" /> 
            </div>
            <div className="mid-icons" >
                <img src={home2} alt="Home" onClick={goToRoute("/home")} />
                <img src={people} alt="" onClick={goToRoute("/")} />
                <img src={Briefcase} alt="" onClick={goToRoute("/")} />
                <img src={msgicon} alt="" onClick={goToRoute("/")} />
                <img src={news} alt="" onClick={goToRoute("/")} />
                <img src={profile} alt="" onClick={goToRoute("/")} />
                <img src={profile} alt="Profile switch" />

            </div>
            
        </div>
    );
};

export default TopBar;