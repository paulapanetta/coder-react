// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCti5JzmcCy81UnNeuTWvc-h503oBmkNsQ",
authDomain: "proyecto-react-2b9b5.firebaseapp.com",
projectId: "proyecto-react-2b9b5",
storageBucket: "proyecto-react-2b9b5.appspot.com",
messagingSenderId: "532272170440",
appId: "1:532272170440:web:1abf40ec8c24a5a629acfd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

