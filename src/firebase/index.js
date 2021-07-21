import * as firebase from 'firebase/app'
import 'firebase/firestore'

const firebase = {
    apiKey: "AIzaSyCaDLbrvRoGnGg6xZ-vN9FHUs37MHwgO4k",
    authDomain: "cursos-conforte.firebaseapp.com",
    projectId: "cursos-conforte",
    storageBucket: "cursos-conforte.appspot.com",
    messagingSenderId: "789256180492",
    appId: "1:789256180492:web:dc378113551c6297e6af29",
    measurementId: "G-T9ZMM4S6BH"
  };

  const app = firebase.initializeApp(firebaseConfig);

  export function getFirestore(){
      return firebase.firestore(app)
  }