import { useMemo, useState } from "react";
import "../Sass/HomeComponent.scss";
import TopBar from "./TopBar";
import { getCurrentUser } from "../API/FireStoreAPI";
import PostUpdate from "./PostUpdate/PostUpdate";

export default function HomeComponent(){

    const [CurrentUser, setCurrentuser] = useState("");

    useMemo(() => {
        getCurrentUser(setCurrentuser);
    },[]);

    return(
        <div className="main" >
            <TopBar className="topbar" />
            <PostUpdate CurrentUser={CurrentUser || { name: 'Default User' }} className="post" />
        </div>
    );
}
