import * as firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyD9hCFXwM5JzQyld2PYHZncpxABd6vO-Zw",
    authDomain: "msapp-9ae9b.firebaseapp.com",
    projectId: "msapp-9ae9b",
    storageBucket: "msapp-9ae9b.appspot.com",
    messagingSenderId: "21338778005",
    appId: "1:21338778005:web:10487b7c597b81ef192e9c"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore()