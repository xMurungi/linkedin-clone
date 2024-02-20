import { useState } from "react";
import "../Sass/ProfileEdit.scss";
import ProfileComponent from "./ProfileComponent";

export default function ProfileEdit(){

    const [isEdit, setEdit] = useState(true);
    const [EditInput, setEditInput] = useState({
        "First Name": "",
        "Second Name": "",
        Bio: "",
        "Phone Number": "",
        About: "",
        Company: "",
        School: "",
    });

    const getInput = (event) => {
        let { name, value } = event.target;
        setEditInput((prevEditInput) => ({ ...prevEditInput, [name]: value }));
        //let input = { [name]: value };
        //setEditInput( {...EditInput, ...input } );
    };

    return(
        <>
        {
            isEdit == false ? (<ProfileComponent />) : (
                <div className="profile-edit" >
                    <div className="edit-div" >
                        <button className="edit-btn" onClick={() => setEdit(!isEdit)} >Save Changes</button>
                    </div>
                    <div className="inputs" > 
                        <input onChange={getInput} name="First Name" type="text" placeholder="First Name"/>
                        <input onChange={getInput} name="Second Name" type="text" placeholder="Second Name"/>
                        <input onChange={getInput} name="Bio" type="text" placeholder="Bio"/>
                        <input onChange={getInput} name="Phone Number" type="text" placeholder="Phone Number"/>
                        <input onChange={getInput} name="About" type="text" placeholder="About"/>
                        <input onChange={getInput} name="Company" type="text" placeholder="Company"/>
                        <input onChange={getInput} name="School" type="text" placeholder="School"/>
                    </div>    
                    <button className="save-btn" >Submit</button>
                </div>
           // <h3 className="username" >{CurrentUser.name}</h3>
           //</> <p className="useremail" >{CurrentUser.email}</p>
            )}
        </>
    );
}
