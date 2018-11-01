import React, { Component } from "react";
import { connect } from "react-redux";
import Person from "../components/Person/Person";
import AddPerson from "../components/AddPerson/AddPerson";
import { ADD_PERSON, DELETE_PERSON } from "../store/actions";
class Persons extends Component {
  render() {
    return (
      <div>
        <AddPerson personAdded={this.props.onAddPerson} />
        {this.props.persons.map(person => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            clicked={() => this.props.onDeletePerson(person.id)}
          />
        ))}
      </div>
    );
  }
}
const mapStateToProps = state => ({
  persons: state.persons
});
const mapDispatchToProps = dispatch => ({
  onAddPerson: (person) => dispatch({ type: ADD_PERSON, person }),
  onDeletePerson: id => dispatch({ type: DELETE_PERSON, id })
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Persons);
