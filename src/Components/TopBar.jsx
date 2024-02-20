import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../API/FireStoreAPI";
import "../Sass/TopBar.scss";

import LinkedinLogo from "../assets/LinkedinLogo.png";
import anime from "../assets/anime-search.svg";
import Briefcase from "../assets/briefcase-icon.svg";
import msgicon from "../assets/message-icon.svg";
import home2 from "../assets/icons8-home.svg";
import people from "../assets/icons8-myspace.svg";
import news from "../assets/icons8-news.svg";
import profile from "../assets/icons8-user-male.svg";
import ProfilePopUp from "./Common/ProfilePopUp";

const TopBar = ()=> {

    const [popupVisible, setPopupVisible] = useState(true);
    const displayPopup = () => {
        setPopupVisible(!popupVisible);
    };

    const nav = useNavigate();

    const [CurrentUser, setCurrentuser] = useState("");
    useMemo(() => {
        getCurrentUser(setCurrentuser);
    },[]);

    return(
        <div className="topbar" >
            {!popupVisible ? (
                <div className="popup-position">
                    <ProfilePopUp />
                </div>
            ) : (
                    <></>
                )}

            <img src={LinkedinLogo} alt="Logo" />
            <div className="search-bar" >
                 <input name="Search" className="search-input" type="text" /> <span /> <img src={anime} alt="Search" /> 
            </div>

            <div className="mid-icons" >
                <img src={home2} alt="Home" onClick={() => nav("/home")} />
                <img src={people} alt="" onClick={() => nav("/")} />
                <img src={Briefcase} alt="" onClick={() => nav("/")} />
                <img src={msgicon} alt="" onClick={() => nav("/")} />
                <img src={news} alt="" onClick={() => nav("/")} />
                <img src={profile} alt="Profile switch" onClick={displayPopup} />
            </div>
            <div className="username-topbar"> <p className="top-p" >Hello, {CurrentUser.name}</p></div>
            
        </div>
    );
};

export default TopBar;