import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/database'

var firebaseConfig = {
  apiKey: "AIzaSyBcdqR1MeIQHqE7NG28Pr-3MNVFzu0xgE0",
  authDomain: "olx-replica104.firebaseapp.com",
  databaseURL: "https://olx-replica104.firebaseio.com",
  projectId: "olx-replica104",
  storageBucket: "olx-replica104.appspot.com",
  messagingSenderId: "527852222513",
  appId: "1:527852222513:web:198d286c8c7e476b65bd10",
  measurementId: "G-6JS0QHQC20"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase;
