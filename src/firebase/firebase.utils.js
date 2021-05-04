import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWmb76PPnh9J3XrXJV5MrPQEryBfjYK7c",
    authDomain: "crwn-db-2a8e4.firebaseapp.com",
    projectId: "crwn-db-2a8e4",
    storageBucket: "crwn-db-2a8e4.appspot.com",
    messagingSenderId: "280709538179",
    appId: "1:280709538179:web:a76fa0e8f2db20b491d6b6",
    measurementId: "G-HRT2JRQYKV"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
