import firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCQ0vVHd9BmN_qPlPMInSYIm_JG6veVgAg",
    authDomain: "proyecto-8ae66.firebaseapp.com",
    projectId: "proyecto-8ae66",
    storageBucket: "proyecto-8ae66.appspot.com",
    messagingSenderId: "536403389166",
    appId: "1:536403389166:web:4f71ec4f7a18f831c721ff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const db = firebase.firestore()
const auth = firebase.auth()

export {db, auth}