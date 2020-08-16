import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAQa206OBSe3XYGKFLNc5nCWKwYy9iMA5M",
  authDomain: "upheld-dragon-275605.firebaseapp.com",
  databaseURL: "https://upheld-dragon-275605.firebaseio.com",
  projectId: "upheld-dragon-275605",
  storageBucket: "upheld-dragon-275605.appspot.com",
  messagingSenderId: "785936912745",
  appId: "1:785936912745:web:e4985248abf49a31792df8",
  measurementId: "G-TNSMZVM6E9"
  };

  firebase.initializeApp(config)

  export const f = firebase
  export const database = firebase.database()
  export const auth = firebase.auth()
  export const storage = firebase.storage()