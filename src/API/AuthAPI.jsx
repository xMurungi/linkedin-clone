import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'; 
import { auth } from '../firebaseConfig';

export const loginAPI = (email, password) => { 
    try {
        signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error; 
    }
};

export const RegisterAPI = (email, password) => { 
    try {
        createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
        return error; 
    }
};
