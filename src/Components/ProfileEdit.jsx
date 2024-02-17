import { useState } from "react";
import "../Sass/ProfileEdit.scss";
import ProfileComponent from "./ProfileComponent";

export default function ProfileEdit(){

    const [isEdit, setEdit] = useState(true);

    return(
        <>
        {
            isEdit == false ? (<ProfileComponent />) : (
                <div className="profile-edit" >
                    <div className="edit-div" >
                        <button className="edit-btn" onClick={() => setEdit(!isEdit)} >Save Changes</button>
                    </div>
                    <div className="inputs" > 
                        <input name="First Nmae" type="text" placeholder="First Name"/>
                        <input name="Second Name" type="text" placeholder="Second Name"/>
                        <input name="Bio" type="text" placeholder="Bio"/>
                        <input name="Phone Number" type="text" placeholder="Phone Number"/>
                        <input name="About" type="text" placeholder="About"/>
                        <input name="Company" type="text" placeholder="Company"/>
                        <input name="School" type="text" placeholder="School"/>
                    </div>    
                </div>
           // <h3 className="username" >{CurrentUser.name}</h3>
           //</> <p className="useremail" >{CurrentUser.email}</p>
            )}
        </>
    );
}
