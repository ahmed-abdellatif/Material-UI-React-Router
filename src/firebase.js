import firebase from 'firebase'

// Initialize Firebase
  const config = {
    apiKey: "AIzaSyDIPtYGIunj7UuIjjwAY5kj0AeHPgsMeq0",
    authDomain: "material-react.firebaseapp.com",
    databaseURL: "https://material-react.firebaseio.com",
    projectId: "material-react",
    storageBucket: "",
    messagingSenderId: "7303237210"
  };
  firebase.initializeApp(config);

export default firebase;
