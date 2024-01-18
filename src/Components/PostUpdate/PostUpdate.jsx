import React, { useState } from "react";
import ModalPost from "../Common/Modal/Modal";
import "../PostUpdate/PostUpdate.scss";

export default function PostUpdate(){
    const [modalOpen, setModalOpen] = useState(false);
    const [status, setStatus] = useState();

    return(
        <div className="post-update-root" >
            <div className="post-update" >
                <button className="open-post-modal" 
                onClick={ () => setModalOpen(true) }
                >Start a post</button>
            </div>
            <ModalPost status={status} setStatus={setStatus} modalOpen={modalOpen} setModalOpen={setModalOpen}  />
        </div>
    );
}
