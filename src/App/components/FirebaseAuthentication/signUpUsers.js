import firebase from "firebase/app";

const signUpUsers = (email, password) => {
  console.log(email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      var user = userCredential.user;
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signUpUsers;
