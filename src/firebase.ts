import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBqQlX-kCiW15KwDyyyLYPLzMQoHvA7HLQ",
    authDomain: "slack-clone-a0ab9.firebaseapp.com",
    databaseURL: "https://slack-clone-a0ab9.firebaseio.com",
    projectId: "slack-clone-a0ab9",
    storageBucket: "slack-clone-a0ab9.appspot.com",
    messagingSenderId: "924469186794",
    appId: "1:924469186794:web:5363297c8a0d39a8c48793",
    measurementId: "G-K0D1RFWVCK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export{ auth, provider};
export default db;