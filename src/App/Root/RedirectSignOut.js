//External Imports
import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const SignOut = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  console.log(isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/login"/> : <Component {...props} /> 
      }
    />
  );
};

export default SignOut;