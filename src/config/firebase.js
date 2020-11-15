import firebase from 'firebase/app';
import 'firebase/auth' 
import 'firebase/database'

  var firebaseConfig = {
    apiKey: "AIzaSyBS-aA-Cu6AUCgNxUU2WUCDUVGV2Y9mhFc",
    authDomain: "replica-of-olx.firebaseapp.com",
    databaseURL: "https://replica-of-olx.firebaseio.com",
    projectId: "replica-of-olx",
    storageBucket: "replica-of-olx.appspot.com",
    messagingSenderId: "619914762605",
    appId: "1:619914762605:web:84c460891acad16cf9a264",
    measurementId: "G-FEN74YSMK4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig)

export default firebase;
