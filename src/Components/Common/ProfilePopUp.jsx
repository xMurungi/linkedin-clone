import React from "react";
import { useNavigate } from "react-router-dom";
import { onLogout } from "../../API/AuthAPI";
import "../Common/ProfilePopUp.scss";

export default function ProfilePopUp (){
    const nav = useNavigate();

    return(
        <div className="popup-card" >
            <div className="popup-options">
                <button className="popup-option-1" onClick={onLogout} >Log Out</button>
                <button className="popup-option-2" onClick={() => nav("/profile")} >My Profile</button>
            </div>
        </div>
    );
}
