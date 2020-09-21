import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDh4SPUCwkmbyYCV2XcT9r-bcB5Sr8y3IY",
  authDomain: "major-project-d3513.firebaseapp.com",
  databaseURL: "https://major-project-d3513.firebaseio.com",
  projectId: "major-project-d3513",
  storageBucket: "major-project-d3513.appspot.com",
  messagingSenderId: "771977038259",
  appId: "1:771977038259:web:0ce8075c8c05f5d7ce63c6",
  measurementId: "G-VZRK6Y3Y19",
};
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider).then((result) =>{
   var token = result.credential.accessToken;
   console.log(token,'token');
   console.log(result.user,'user');
   // The signed-in user info.
   // The signed-in user info.
  //  var user = result.user;
}).catch(function (error) {
    // Handle Errors here.
    // var errorCode = error.code;
    // var errorMessage = error.message;
    // The email of the user's account used.
    // var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    // var credential = error.credential;
    // ...
  });

export const inventoryDataFetch = () =>{
  debugger
  return firebase
      .collection("inventory")
      .get()
      .then(function (querySnapshot) {
          querySnapshot.forEach(function (doc) {
              console.log(doc,'doc');
            });
          })
          .catch(function (error) {
            console.log(error,'doc error');
  
      })
}

export default firebase;
