import React, { useState, useMemo } from "react";
import ModalPost from "../Common/Modal/Modal";
import { PostStatus, getPosts } from "../../API/FireStoreAPI";
import PostCard from "./PostCard";
import { getCurrentTimeStamp } from "../Helpers/useMoment";
import { UniqueID } from "../Helpers/UniqueID";
import "../PostUpdate/PostUpdate.scss";

export default function PostUpdate( {CurrentUser} ){
    const userEmail = localStorage.getItem('UserEmail');
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState("");
    const [allStatuses, setAllStatuses] = useState([]);
    console.log(CurrentUser);

    const sendStatus = async () => {
        const TimeStatusobj = {
            status: status,
            time: getCurrentTimeStamp('LLL'),
            userEmail: CurrentUser.email,
            userName: CurrentUser.name,
            PostID: UniqueID(),
        };
        console.log(TimeStatusobj);
        await PostStatus(TimeStatusobj);
        await setModalOpen(false);
        await setStatus("");
    }

    useMemo( () => {
        getPosts(setAllStatuses);
    } ,[])

    console.log(allStatuses);

    return(
 
        <div className="post-update-root" >
            <div className="post-update" >
                <button className="open-post-modal" 
                onClick={ () => setModalOpen(true) }
                >Start a post</button>
            </div>

            <ModalPost status={status} setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen} sendStatus={sendStatus} />
        
            <div>
                {allStatuses.map((posts) => {
                    return <PostCard key={posts.id} posts={posts}/>
                })}
            </div>
        
        </div>

    );
}
