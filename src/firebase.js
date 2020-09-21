import firebase from "firebase";



const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAQyFmF3Jzj3iuwZp06XkaTE4oktjWCnuw",
    authDomain: "clone-15ac1.firebaseapp.com",
    databaseURL: "https://clone-15ac1.firebaseio.com",
    projectId: "clone-15ac1",
    storageBucket: "clone-15ac1.appspot.com",
    messagingSenderId: "512914009503",
    appId: "1:512914009503:web:58bbb16540cf140c9661aa",
    measurementId: "G-LNGM7LDVRW"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };