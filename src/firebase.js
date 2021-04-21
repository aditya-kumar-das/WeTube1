import firebase from 'firebase/app'

import 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCF0zHtj_zAujOQCuDID2Ah2soAXm3EpY8",
    authDomain: "wetube519.firebaseapp.com",
    projectId: "wetube519",
    storageBucket: "wetube519.appspot.com",
    messagingSenderId: "200851459025",
    appId: "1:200851459025:web:f7ce75207e1070ad4feef0",
    measurementId: "G-8R1JF9RYSL"
  }

 firebase.initializeApp(firebaseConfig)
export default firebase.auth()
