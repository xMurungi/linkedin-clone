import { toast } from "react-toastify";
import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot, doc, updateDoc } from "firebase/firestore";
import { FirebaseError } from "firebase/app";
import { Exception } from "sass";
 
const dbRef = collection(firestore, "posts");
let userRef = collection(firestore, "users");
//let postsRef = collection(firestore, "posts");

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

export const postUserData = (object) => {
    addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
        console.log(err);
    });
}

export const getCurrentUser = (setCurrentuser) => {

    onSnapshot(userRef, (response) => {
        setCurrentuser(
            response.docs.map((docs) => {
                return { ...docs.data(), userID: docs.id };
            })
            .filter((item) => {
                return item.email === localStorage.getItem("UserEmail");
            })[0] 
        );
    });
};

export const editProfle = () => {
};