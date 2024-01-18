import React from "react";
import "../Sass/HomeComponent.scss";
import TopBar from "./TopBar";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import PostUpdate from "./PostUpdate/PostUpdate";

export default function HomeComponent(){
    return(
        <div className="main" >
            <TopBar className="topbar" />
            <PostUpdate className="post" />
        </div>
    );
}
