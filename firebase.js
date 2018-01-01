import firebase from 'firebase';
var config = {
    apiKey: "AIzaSyCgLoAVrYAmJ-IgWPBLjheGy8M2IizgpHU",
    authDomain: "construction-forms.firebaseapp.com",
    databaseURL: "https://construction-forms.firebaseio.com",
    projectId: "construction-forms",
    storageBucket: "construction-forms.appspot.com",
    messagingSenderId: "968720408960"
  };

firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;
