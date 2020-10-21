import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';


var firebaseConfig = {
    apiKey: "AIzaSyCJSy3HNi7yQPjOYiekHYKCGXmZMLwFLNU",
    authDomain: "photo-app-d4a76.firebaseapp.com",
    databaseURL: "https://photo-app-d4a76.firebaseio.com",
    projectId: "photo-app-d4a76",
    storageBucket: "photo-app-d4a76.appspot.com",
    messagingSenderId: "719090766310",
    appId: "1:719090766310:web:5f42c3ecb30d83dfc30627"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp };