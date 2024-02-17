import "../Sass/ProfileComponent.scss";
import { getCurrentUser } from "../API/FireStoreAPI";
import { useMemo, useState } from "react";
import ProfileEdit from "./ProfileEdit";

export default function ProfileComponent (){

    const [isEdit, setEdit] = useState(false);

    const [CurrentUser, setCurrentuser] = useState("");
    useMemo(() => {
        getCurrentUser(setCurrentuser);
    },[]);

    return(
        <>
        {
            isEdit ? (<ProfileEdit />) : (
        
        <div className="profile-card" >
            <div className="edit-div" >
                <button className="edit-btn" onClick={() => setEdit(!isEdit)} >Edit</button>
            </div>
            <h3 className="username" >{CurrentUser.name}</h3>
            <p className="useremail" >{CurrentUser.email}</p>
        </div> )}
        </>
    );
}
