import firebase from 'firebase/app';
import 'firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKdms_1OofPHc7EJd22AcMF6WQ2S45a_Y",
    authDomain: "todo-app-5e277.firebaseapp.com",
    projectId: "todo-app-5e277",
    storageBucket: "todo-app-5e277.appspot.com",
    messagingSenderId: "52299153425",
    appId: "1:52299153425:web:100bf7826974b06465b1b0",
    measurementId: "G-W5Q74H3C11"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;