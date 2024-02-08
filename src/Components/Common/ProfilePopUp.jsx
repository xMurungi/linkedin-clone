import React from "react";
import { onLogout } from "../../API/AuthAPI";
import "../Common/ProfilePopUp.scss";

export default function ProfilePopUp (){
    return(
        <div className="popup-card" >
            <div className="popup-options">
                <button className="popup-option" onClick={onLogout} >LOG OUT</button>
            </div>
        </div>
    );
}
