import firebase from "firebase";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyD14ybFemj38kpH8uv3Tsalx_XPWZEimEQ",
  authDomain: "furreverhomes.firebaseapp.com",
  databaseURL: "https://furreverhomes.firebaseio.com",
  projectId: "furreverhomes",
  storageBucket: "furreverhomes.appspot.com",
  messagingSenderId: "353379061445"
};
firebase.initializeApp(config);

const db = firebase.firestore();

export const pushToFirebase = (reference, object) => {
  const ref = db.ref(reference);
  ref.push(object);
};

export const pullFromFirebase = (collection, callback) => {
  db.collection(collection)
    .get()
    .then(function(querySnapshot) {
      callback(querySnapshot);
    });
};

export default firebase;
