import firebase from "firebase";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyADTT7l5mEAU1Ihp80Jz9UjyzNsuNTt4t4",
  authDomain: "sketchers-adda.firebaseapp.com",
  projectId: "sketchers-adda",
  storageBucket: "sketchers-adda.appspot.com",
  messagingSenderId: "842459918661",
  appId: "1:842459918661:web:08c9e98033bbce383a8e2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Photostorage = firebase.storage();
const Photofirestore = firebase.firestore();

export { Photostorage, Photofirestore };
