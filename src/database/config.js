import * as firebase from 'firebase'

var config = {
    apiKey: "AIzaSyADG2shF6dDTG-eYBzltw-jTAMv7B2QFaw",
    authDomain: "scarlogram.firebaseapp.com",
    databaseURL: "https://scarlogram.firebaseio.com",
    projectId: "scarlogram",
    storageBucket: "scarlogram.appspot.com",
    messagingSenderId: "609905672975"
  };

  firebase.initializeApp(config)

  const database = firebase.database()

  export {database};
