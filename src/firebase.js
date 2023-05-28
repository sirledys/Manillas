// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFireStore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBmZMZbDo3rLAedGrH-PAnODQu_-esnpbc",
    authDomain: "manillas-dc8c6.firebaseapp.com",
    projectId: "manillas-dc8c6",
    storageBucket: "manillas-dc8c6.appspot.com",
    messagingSenderId: "538831418709",
    appId: "1:538831418709:web:a994c281b777cf25d1abdc",
    measurementId: "G-11J82EKVTQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFireStore(app)
export { db }