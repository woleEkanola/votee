import * as firebase from 'firebase';
var config = {
  apiKey: "AIzaSyAcmNr9KTD31ANt5vuoTRbiV3ly7A29lNo",
  authDomain: "votee-e3069.firebaseapp.com",
  databaseURL: "https://votee-e3069.firebaseio.com",
  projectId: "votee-e3069",
  storageBucket: "votee-e3069.appspot.com",
  messagingSenderId: "98907177789"
}


  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  const db = firebase.firestore();
  const auth = firebase.auth();
  

  
  export {
    auth,
    db
  };