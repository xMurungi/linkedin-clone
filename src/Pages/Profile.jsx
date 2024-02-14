import "../Sass/Profile.scss";
import TopBar from "../Components/TopBar";
import ProfileComponent from "../Components/ProfileComponent";

export default function Profile(){

    return(
        <div className="main" >
            <TopBar className="topbar" />
            <ProfileComponent className="profile-component" />
        </div>
    );
}
