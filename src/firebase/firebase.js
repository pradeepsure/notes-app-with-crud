import * as firebase from 'firebase';


 // Initialize Firebase
 const config = {
  apiKey: "AIzaSyALqqaTkvsdETBLEHXxoGbOuRUxM_1g938",
  authDomain: "notesapp-a9d8b.firebaseapp.com",
  databaseURL: "https://notesapp-a9d8b.firebaseio.com",
  projectId: "notesapp-a9d8b",
  storageBucket: "notesapp-a9d8b.appspot.com",
  messagingSenderId: "46626663136"
  };
  firebase.initializeApp(config);

  const googleAuthProvider =new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider};