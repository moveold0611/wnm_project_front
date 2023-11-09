// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBOxq-UrkngidSETfrfJBa6EoytJxtbU5A",
    authDomain: "woofnmeow-ed173.firebaseapp.com",
    projectId: "woofnmeow-ed173",
    storageBucket: "woofnmeow-ed173.appspot.com",
    messagingSenderId: "395333405250",
    appId: "1:395333405250:web:7964009d9b837433a47bdb",
    measurementId: "G-4SBW67YC2P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const storage = getStorage(app); 


