import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBBQ5oWmqMz6TShq8P1JypsWdP8Tq8wwVE",
    authDomain: "instagram-clone-react-86a2c.firebaseapp.com",
    databaseURL: "https://instagram-clone-react-86a2c.firebaseio.com",
    projectId: "instagram-clone-react-86a2c",
    storageBucket: "instagram-clone-react-86a2c.appspot.com",
    messagingSenderId: "760132191138",
    appId: "1:760132191138:web:d121c03c02de6dc786a8fb",
    measurementId: "G-XNZBKGRC87"
});

const db = firebaseApp.firestore();
const auth= firebase.auth();
const storage = firebase.storage();

export {db, auth, storage};

