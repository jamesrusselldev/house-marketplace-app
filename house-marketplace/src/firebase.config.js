// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBK8ed0BM3IJfY5VhpSIv39p_ch-_g8edA",
    authDomain: "house-marketplace-app-63a51.firebaseapp.com",
    projectId: "house-marketplace-app-63a51",
    storageBucket: "house-marketplace-app-63a51.appspot.com",
    messagingSenderId: "505036327288",
    appId: "1:505036327288:web:b575d3c9255bc4f07be08d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()