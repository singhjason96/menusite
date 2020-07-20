import app, { firestore } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyBCn51PZrcmeeXuUN3ucl_4nlGgRYFnAXs",
    authDomain: "elton-s-menu.firebaseapp.com",
    databaseURL: "https://elton-s-menu.firebaseio.com",
    projectId: "elton-s-menu",
    storageBucket: "elton-s-menu.appspot.com",
    messagingSenderId: "696929772533",
    appId: "1:696929772533:web:fa5c14efff1e28c2aeb6bc",
    measurementId: "G-712MLTCJQ7"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
      this.auth = app.auth();
      this.db = app.firestore();
      this.database = app.database;
      // const { user, setUser } = useContext(UserContext);
    }
  }

  export default new Firebase();