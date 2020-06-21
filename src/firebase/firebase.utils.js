import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyAjHyHq1bncNSgI5P4mZQXIaKBpSv92KyA",
    authDomain: "project12-dewberry.firebaseapp.com",
    databaseURL: "https://project12-dewberry.firebaseio.com",
    projectId: "project12-dewberry",
    storageBucket: "project12-dewberry.appspot.com",
    messagingSenderId: "790578541168",
    appId: "1:790578541168:web:1e522abb13e20474ecbab5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
