import firebase from 'firebase';
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA-DSjjsfko55YjYyzyYBrotuLV-9UlGoQ",
  authDomain: "intagram-firebase.firebaseapp.com",
  projectId: "intagram-firebase",
  storageBucket: "intagram-firebase.appspot.com",
  messagingSenderId: "226642952282",
  appId: "1:226642952282:web:f697f5b51d1ba7dbf91863",
};

!firebase.apps.length ?  firebase.initializeApp(firebaseConfig) : firebase.app()
export default firebase;
