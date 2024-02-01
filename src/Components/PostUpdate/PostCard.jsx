import React from "react";
import "../PostUpdate/PostCard.scss"

export default function PostCard( {posts} ) {

    return(
        <div className="PostCard">
            <p className="status" >{posts.status}</p>
        </div>
    );
}