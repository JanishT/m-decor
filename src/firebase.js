import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDlsqqveWmzapeGixKENnYqgqFrNCX19XM",
    authDomain: "school-directory-41ba1.firebaseapp.com",
    projectId: "school-directory-41ba1",
    storageBucket: "school-directory-41ba1.appspot.com",
    messagingSenderId: "435697193510",
    appId: "1:435697193510:web:5e1a01f749f6f1a1b28ce7"
};

const app = initializeApp(firebaseConfig)
export const auth = getAuth();

export default getFirestore(app)