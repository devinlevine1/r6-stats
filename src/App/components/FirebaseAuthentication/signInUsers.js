import firebase from "firebase/app";

const signInUsers = (email, password) =>
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });

export default signInUsers;
