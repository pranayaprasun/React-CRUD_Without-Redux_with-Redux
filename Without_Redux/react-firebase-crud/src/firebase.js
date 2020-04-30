import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAPc4KWeX0dn7zew2VIrJt5vDnJ7fy0Ltc",
    authDomain: "react-firebase-crud-258f0.firebaseapp.com",
    databaseURL: "https://react-firebase-crud-258f0.firebaseio.com",
    projectId: "react-firebase-crud-258f0",
    storageBucket: "react-firebase-crud-258f0.appspot.com",
    messagingSenderId: "332572098413",
    appId: "1:332572098413:web:6025ec35ee1b962029e464"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);

  export default fireDb.database().ref();