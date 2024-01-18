import React from "react";
import "../PostUpdate/PostUpdate.scss";

export default function PostUpdate(){
    return(
        <div className="post-update-root" >
            <div className="post-update" >
                <button className="open-post-modal" >Start a post</button>
            </div>
        </div>
    );
}
