import "../Sass/ProfileComponent.scss";
import { getCurrentUser } from "../API/FireStoreAPI";
import { useMemo, useState } from "react";

export default function ProfileComponent (){

    const [CurrentUser, setCurrentuser] = useState("");
    useMemo(() => {
        getCurrentUser(setCurrentuser);
    },[]);

    return(
        <div className="profile-card" >
            <div className="edit-div" >
                <button className="edit-btn" >Edit</button>
            </div>
            <h3 className="username" >{CurrentUser.name}</h3>
            <p className="useremail" >{CurrentUser.email}</p>
        </div>
    );
}
