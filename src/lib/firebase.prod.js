import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

//we need the database

//we need a config here

const config = {
  apiKey: "AIzaSyARNL8x92O9bAqJuGRM2BKnVHFK3IMCNHA",
  authDomain: "netflix-179c1.firebaseapp.com",
  projectId: "netflix-179c1",
  storageBucket: "netflix-179c1.appspot.com",
  messagingSenderId: "798190959316",
  appId: "1:798190959316:web:a2ee820f3d5d6474719941",
};

const firebase = Firebase.initializeApp(config);

export { firebase };
