// External Imports
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Internal Imports
import Root from "./Root";
import PersistedStore from "./state/persistedStore";
let store = PersistedStore.getDefaultStore().store

const App = () => {
 
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
