import { signInWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebaseConfig';

export const loginAPI = (email, password) => { 
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error; 
    }
};
