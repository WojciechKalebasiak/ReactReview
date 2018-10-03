import React, { Component } from "react";
import Person from "./Person/person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      {
        name: "John",
        age: 19
      },
      { name: "Zoe", age: 31 }
    ]
  };
  handleClick = () => {
    console.log("Was clicked!");
  };
  render() {
    return (
      <div className="App">
        <h1>Im react component</h1>
        <button onClick={this.handleClick}>Switch name</button>
        <Person person={this.state.persons[0]} />
        <Person person={this.state.persons[1]} />
        <Person person={this.state.persons[2]} />
      </div>
    );
  }
}

export default App;
