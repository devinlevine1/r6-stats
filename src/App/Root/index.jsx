// External Imports
import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import firebase from "firebase/app";

// Internal Imports
import Landing from "../pages/Landing";
import LeaderBoards from "../pages/LeaderBoards";
import Login from "../pages/Login";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import RedirectLeaderboard from "../Root/RedirectLeaderboard"
import RedirectSignOut from "../Root/RedirectSignOut"
import "../styles/page-styles/total-styles.css";
import useAuthListener from "../hooks/useAuthListener";


const Root = () => {
  useAuthListener();

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <PrivateRoute exact path="/leader-board" component={LeaderBoards} />
        <RedirectLeaderboard exact path="/login" component={Login} />
        <RedirectSignOut exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Root;
