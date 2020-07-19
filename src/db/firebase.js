import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyAoN6qGEgtgJ29SZjCHBqe30ZiGk2Sez78",
	authDomain: "tech-house-eb04c.firebaseapp.com",
	databaseURL: "https://tech-house-eb04c.firebaseio.com",
	projectId: "tech-house-eb04c",
	storageBucket: "tech-house-eb04c.appspot.com",
	messagingSenderId: "177021683707",
	appId: "1:177021683707:web:09b9fcccd2ffb1150a6d5e",
	measurementId: "G-MEMM5Q3LGV",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const twitterProvider = new firebase.auth.TwitterAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export const singInWithFacebook = () => auth.signInWithPopup(facebookProvider);
export const signInWithTwitter = () => auth.signInWithPopup(twitterProvider);


