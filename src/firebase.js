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

export const pushToFirebase = (reference, object) => {
  const ref = firebase.database().ref(reference);
  ref.push(object);
};

export const pullFromFirebase = (reference, callback) => {
  const ref = firebase.database().ref(reference);
  ref.on(
    "value",
    snapshot => {
      callback(snapshot);
    },
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    }
  );
};

export default firebase;
