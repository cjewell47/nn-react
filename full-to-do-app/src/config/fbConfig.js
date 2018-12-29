import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCAevqpvxcq4c6yXmoPuwbSb4ZaL-E6WTE",
    authDomain: "nn-react-todo.firebaseapp.com",
    databaseURL: "https://nn-react-todo.firebaseio.com",
    projectId: "nn-react-todo",
    storageBucket: "nn-react-todo.appspot.com",
    messagingSenderId: "93348629095"
};

firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;