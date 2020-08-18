import firebase from 'firebase'

const config = {
 //Paste your config credentials here.
  };

  firebase.initializeApp(config)

  export const f = firebase
  export const database = firebase.database()
  export const auth = firebase.auth()
  export const storage = firebase.storage()
