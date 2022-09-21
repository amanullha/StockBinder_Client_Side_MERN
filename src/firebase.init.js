// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBdVfdFPpdCbMVbXEHwtc646MQUluqlYn0",
    authDomain: "stock-binder-update.firebaseapp.com",
    projectId: "stock-binder-update",
    storageBucket: "stock-binder-update.appspot.com",
    messagingSenderId: "747228932624",
    appId: "1:747228932624:web:af2e2dd935a98484d5b895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;