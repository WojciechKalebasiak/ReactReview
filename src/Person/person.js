import React from "react";
import "./Person.css";
const person = props => {
  return (
    <div className="Person">
      <p>
        I'm a {props.person.name} and I'am {props.person.age}
      </p>
      <span>{props.children}</span>
      <input
        type="text"
        onChange={e => props.changeName(e.target.value)}
        value={props.person.name}
      />
    </div>
  );
};
export default person;
