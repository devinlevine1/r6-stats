//External Imports
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import firebase from "firebase/app";

//Internal Imports
import { setLogin, setLogout } from "../state/actions";


const useAuthListener = () => {
  const dispatch = useDispatch();
  // console.log(useSelector((state)=>state.isAuthenticated))
 
  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      
      user ? dispatch(setLogin()) : dispatch(setLogout());
    });
    return unsubscribe;
  }, [dispatch]);
};

export default useAuthListener;
