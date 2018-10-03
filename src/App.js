import React, { Component } from "react";
import Person from "./Person/person";
import UserOutput from "./chall1/UserOutput";
import UserInput from "./chall1/UserInput";
class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      {
        name: "John",
        age: 19
      },
      { name: "Zoe", age: 31 }
    ],
    username: "Username"
  };
  handleUserInput = e => {
    this.setState({ username: e.target.value });
  };
  handleInput = newName => {
    this.setState({
      persons: [
        { name: newName, age: 28 },
        {
          name: "John",
          age: 19
        },
        { name: "Zoe", age: 40 }
      ]
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Im react component</h1>
        <Person
          changeName={newName => this.handleInput(newName)}
          person={this.state.persons[0]}
        />
        <Person
          changeName={newName => this.handleInput(newName)}
          person={this.state.persons[1]}
        />
        <Person
          changeName={newName => this.handleInput(newName)}
          person={this.state.persons[2]}
        />
        <UserInput handleUsernameChange={this.handleUserInput} username={this.state.username}/>
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
