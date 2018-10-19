import React, { Component } from "react";
import Person from "./Person/person";
import classnames from "classnames";
import styles from './App.module.css';
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
    personsDisplay: false
  };
  handleInput = e => {
    this.setState({
      pLength: e.target.value.length,
      stringArray: e.target.value.split("")
    });
  };
  togglePersonsDisplay = () => {
    console.log(styles.button);
    this.setState({ personsDisplay: !this.state.personsDisplay });
  };
  deletePerson = index => {
    this.setState({
      persons: this.state.persons.filter(
        (person, personIndex) => personIndex !== index
      )
    });
  };
  handleNameChange = (index, name) => {
    const newPersonList = [...this.state.persons];
    newPersonList[index].name = name;
    this.setState({ persons: newPersonList });
  };
  render() {
    const { personsDisplay, persons } = this.state;
    let personsList = null;
    if (personsDisplay) {
      personsList = (
        <div>
          {persons.map((person, index) => (
            <Person
              person={person}
              key={index}
              deletePerson={() => this.deletePerson(index)}
              changeName={name => this.handleNameChange(index, name)}
            />
          ))}
        </div>
      );
    }
    return (
      <div className={styles.App}>
        <button
          onClick={this.togglePersonsDisplay}
          className={classnames(styles.button, {
            [styles.hideDisplayButton]:personsDisplay,
            [styles.toggleDisplayButton]:!personsDisplay
          }
          )}>
          Toggle Display
        </button>
        {personsList}
      </div>
    );
  }
}

export default App;
