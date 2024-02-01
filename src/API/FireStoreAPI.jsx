import { toast } from "react-toastify";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
 
const dbRef = collection(firestore, "posts");

export const PostStatus = (TimeStatusobj) => {
    addDoc(dbRef, TimeStatusobj)
    .then(() => {
        toast.success("Post created");
    })
    .catch((err) => {
        toast.error("Post not created");
        console.log(err);
    });
};

export const getPosts = (setAllStatuses) => {
    onSnapshot(dbRef, (response) => {
        setAllStatuses(
            response.docs.map((docs) => {
            return { ...docs.data(), id: docs.id }
        }));
    });
}