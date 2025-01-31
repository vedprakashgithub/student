import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCDL4bdqTTLLU88HhVOkUK_m1UhBaRGThg",
    authDomain: "newproject-c8588.firebaseapp.com",
    projectId: "newproject-c8588",
    storageBucket: "newproject-c8588.firebasestorage.app",
    messagingSenderId: "672469419321",
    appId: "1:672469419321:web:e4878501f1dd190ca714e8"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, signInWithEmailAndPassword, signOut, db, collection, addDoc, getDocs, deleteDoc, doc };
