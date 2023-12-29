// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMjKqQccLvVbuybXdfuK9LRrI1VxdS4hs",
  authDomain: "linkedin-clone-319fe.firebaseapp.com",
  projectId: "linkedin-clone-319fe",
  storageBucket: "linkedin-clone-319fe.appspot.com",
  messagingSenderId: "435215886565",
  appId: "1:435215886565:web:adf7ded311191899d8cc0c",
  measurementId: "G-GTQMTJ9L6L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
 
export { auth, app };