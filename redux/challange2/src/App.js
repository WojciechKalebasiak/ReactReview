import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import Persons from "./containers/Persons";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Persons />
        </div>
      </Provider>
    );
  }
}

export default App;
