import React from "react";
import "../Sass/TopBar.scss";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import SearchIcon from "../assets/SearchIcon.png";
import HomeIcon from "../assets/home-icon.svg";
import SearchIcn from "../assets/icons8-search.svg";
import anime from "../assets/anime-search.svg";
import Briefcase from "../assets/briefcase-icon.svg";
import msgicon from "../assets/message-icon.svg";
import connections from "../assets/connections-icon.svg";
import searchs from "../assets/icons8-search (1).svg";
import home2 from "../assets/icons8-home.svg";
import people from "../assets/icons8-myspace.svg";
import notification from "../assets/icons8-mailbox.svg";
import news from "../assets/icons8-news.svg";
import profile from "../assets/icons8-user-male.svg";

const TopBar = ()=> {
    return(
        <div className="topbar" >

            <img src={LinkedinLogo} alt="Logo" />
            <div className="search-bar" >
                 <input className="search-input" type="text" /> <span /> <img src={anime} alt="Search" /> 
            </div>
            <div className="mid-icons" >
                <img src={home2} alt="" />
                <img src={people} alt="" />
                <img src={Briefcase} alt="" />
                <img src={msgicon} alt="" />
                <img src={news} alt="" />
                <img src={profile} alt="" />

            </div>
            
        </div>
    );
}

export default TopBar;