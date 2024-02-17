import React from "react";
import "../PostUpdate/PostCard.scss"

export default function PostCard( {posts} ) {

    const postsArray = Object.values(posts);

    if (Array.isArray(postsArray)) {
        // Sorting the posts array by timestamp in ascending order
        const sortedPosts = postsArray.sort((a, b) => {
            const dateA = new Date(a.timestamp);
            const dateB = new Date(b.timestamp);
            return dateA - dateB;
        });

        // Updating the state with the sorted array
        console.log(sortedPosts);
    } else {
        console.error('Posts is not an array:', posts);
    }

    return(
        <div className="PostCard">
            <p className="username" >{posts.userName}</p>
            <p className="timeStamp" >{posts.time}</p>
            <p className="status" >{posts.status}</p>
        </div>
    );
}