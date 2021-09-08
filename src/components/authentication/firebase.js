import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDT6Ncrbq2wE_J6T786WFAnBzG-2hGJLDI",
    authDomain: "newsportal-site.firebaseapp.com",
    projectId: "newsportal-site",
    storageBucket: "newsportal-site.appspot.com",
    messagingSenderId: "449653799582",
    appId: "1:449653799582:web:ed42cb679aa9607fb1598f"
  };
  firebase.initializeApp(firebaseConfig);

  export {firebase}