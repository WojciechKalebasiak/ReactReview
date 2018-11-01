import React, { Component } from "react";

import "./AddPerson.css";

class AddPerson extends Component {
  state = {
    name: "",
    age: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div className="AddPerson">
        <input
          onChange={this.handleChange}
          type="text"
          name="name"
          placeholder="Name"
          value={this.state.name}
        />
        <input
          onChange={this.handleChange}
          type="number"
          name="age"
          placeholder="Age"
          value={this.state.age}
        />
        <button
          onClick={() =>
            this.props.personAdded({
              name: this.state.name,
              age: this.state.age
            })
          }>
          Add Person
        </button>
      </div>
    );
  }
}

export default AddPerson;
