
import firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCaDLbrvRoGnGg6xZ-vN9FHUs37MHwgO4k",
    authDomain: "cursos-conforte.firebaseapp.com",
    projectId: "cursos-conforte",
    storageBucket: "cursos-conforte.appspot.com",
    messagingSenderId: "789256180492",
    appId: "1:789256180492:web:dc378113551c6297e6af29",
    measurementId: "G-T9ZMM4S6BH"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  const db = fb.firestore();

  db.settings({timespampsInSnapshots:true, merge: true })

  

  export default db;

