import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCKUHEME8m82ofklT-vqlVJ1bv_yaHxxN0",
    authDomain: "charity-app-1cef2.firebaseapp.com",
    databaseURL: "https://charity-app-1cef2.firebaseio.com",
    projectId: "charity-app-1cef2",
    storageBucket: "charity-app-1cef2.appspot.com",
    messagingSenderId: "568526260035",
    appId: "1:568526260035:web:e1375b83f21e00b17591f6"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
