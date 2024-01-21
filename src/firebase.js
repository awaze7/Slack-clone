import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAlVz-Q4Vs5nvUVlanrQyfSdfIB_YyKf88",
    authDomain: "slack-clone-212f5.firebaseapp.com",
    projectId: "slack-clone-212f5",
    storageBucket: "slack-clone-212f5.appspot.com",
    messagingSenderId: "498029651427",
    appId: "1:498029651427:web:e356fef8ff16340df42cd6",
    measurementId: "G-JNEL5D0CG0"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider };
export default db;


