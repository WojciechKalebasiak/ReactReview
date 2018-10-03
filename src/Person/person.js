import React from "react";

const person = props => {
  return (
    <div>
      <p>
        I'm a {props.person.name} and I'am {props.person.age}
      </p>
      <span>{props.children}</span>
    </div>
  );
};
export default person;
