import firebase from "firebase/app";

const signOutUsers = () =>
  firebase.auth().signOut().then(() =>{
      //Sign out completed
      console.log("User signed out")
  }).catch((error)=>{
      console.log(error);
  })

export default signOutUsers;